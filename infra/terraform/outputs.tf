# Important outputs for CI/CD steps

output "acr_name" {
  value = azurerm_container_registry.acr.name
}

output "acr_login_server" {
  value       = azurerm_container_registry.acr.login_server
  description = "ACR registry hostname"
  sensitive = true
}

output "aks_cluster_name" {
  value       = azurerm_kubernetes_cluster.aks.name
  description = "AKS cluster name"
}

output "resource_group_name" {
  value       = azurerm_resource_group.rg.name
  description = "Resource group name"
}