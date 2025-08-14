# Important outputs for CI/CD steps

output "acr_admin_username" {
  value       = azurerm_container_registry.acr.admin_username
  description = "ACR admin username"
  sensitive   = true
}

output "acr_admin_password" {
  value       = azurerm_container_registry.acr.admin_password
  description = "ACR admin password"
  sensitive   = true
}

output "aks_kube_config" {
  value       = azurerm_kubernetes_cluster.aks.kube_config_raw
  description = "Raw kubeconfig for AKS"
  sensitive   = true
}


