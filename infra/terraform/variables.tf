# Input variables with reasonable defaults. Override in CI as needed.

variable "project_name" {
  description = "Project name used for resource naming."
  type        = string
  default     = "robots-figma"
}

variable "location" {
  description = "Azure region for all resources"
  type        = string
  default     = "eastus"
}

variable "resource_group_name" {
  description = "Resource group name"
  type        = string
  default     = "rg-robots-figma"
}

variable "aks_node_count" {
  description = "Number of AKS nodes"
  type        = number
  default     = 1
}

variable "aks_vm_size" {
  description = "AKS node VM size (small to stay under $100)"
  type        = string
  # Standard_B2s ~2 vCPU/4GiB; economical for small workloads
  default     = "Standard_B2s"
}

variable "acr_sku" {
  description = "Azure Container Registry SKU"
  type        = string
  default     = "Basic"
}


