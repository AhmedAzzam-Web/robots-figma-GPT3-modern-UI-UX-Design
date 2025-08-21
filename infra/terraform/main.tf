# Core Azure resources: RG, Networking, ACR, AKS. Costs kept minimal via small node size and Basic ACR.

locals {
  suffix = random_string.rand.result
}

resource "random_string" "rand" {
  length  = 4
  upper   = false
  lower   = true
  numeric = true
  special = false
}

# Resource Group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

# Virtual Network and Subnet for AKS
resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-${var.project_name}-${local.suffix}"
  address_space       = ["10.10.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_subnet" "aks" {
  name                 = "snet-aks"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.10.1.0/24"]
}

# Azure Container Registry
resource "azurerm_container_registry" "acr" {
  name                = "acr${replace(var.project_name, "-", "")}${local.suffix}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = var.acr_sku
  admin_enabled       = true # simplifies CI; can be disabled with service principal auth
}

# AKS Cluster with minimal node size and count
resource "azurerm_kubernetes_cluster" "aks" {
  name                = "aks-${var.project_name}-${local.suffix}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "aks-${var.project_name}-${local.suffix}"

  default_node_pool {
    name                = "system"
    node_count          = var.aks_node_count
    vm_size             = var.aks_vm_size
    vnet_subnet_id      = azurerm_subnet.aks.id
    os_disk_size_gb     = 30
    type                = "VirtualMachineScaleSets"
    orchestrator_version = null
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin = "azure"
    outbound_type  = "loadBalancer"
  }
}

# Grant AKS permission to pull from ACR
resource "azurerm_role_assignment" "aks_acr_pull" {
  scope                = azurerm_container_registry.acr.id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_kubernetes_cluster.aks.kubelet_identity[0].object_id
}




