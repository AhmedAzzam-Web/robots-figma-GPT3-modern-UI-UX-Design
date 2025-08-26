# Production-Grade CI/CD with Terraform, Docker, and Azure Kubernetes Service

A production-ready React application fully containerized with Docker, and implementing a complete CI/CD pipeline using GitHub Actions, Terraform, and Azure Kubernetes Service (AKS).

## 🚀 Project Overview

This project demonstrates enterprise-grade DevOps practices by implementing:

- **Infrastructure as Code (IaC)** using Terraform for Azure resource provisioning
- **Complete CI/CD Pipeline** with GitHub Actions for automated deployment
- **Container Orchestration** using Azure Kubernetes Service (AKS)
- **Multi-environment Support** with development, and production configurations
- **Modern React Application** with responsive design and professional UI/UX

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│  GitHub Actions  │───▶│  Azure Cloud    │
│                 │    │   CI/CD Pipeline │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │   Terraform      │    │   AKS Cluster   │
                       │ Infrastructure   │───▶│   + ACR         │
                       └──────────────────┘    └─────────────────┘
```

## 🛠️ Technology Stack

- **Frontend**: React.js with modern CSS
- **Containerization**: Docker & Docker Compose
- **Infrastructure**: Terraform for Azure resource management
- **CI/CD**: GitHub Actions
- **Container Registry**: Azure Container Registry (ACR)
- **Orchestration**: Azure Kubernetes Service (AKS)
- **Cloud Platform**: Microsoft Azure

## 📁 Repository Structure

```
├── src/                    # React application source code
├── infra/                  # Infrastructure as Code
│   ├── terraform/         # Terraform configurations
│   └── k8s/              # Kubernetes manifests
├── docker-compose.yml     # Base Docker Compose file
├── docker-compose.dev.yml # Development Docker Compose
├── docker-compose.prod.yml # Production override
├── Dockerfile             # Multi-stage Docker build for dev and prod
├── .github/               # GitHub Actions workflows
└── README.md              # This file
```

## 🚀 Quick Start - Local Development

### Prerequisites

- Docker and Docker Compose installed
- Node.js 16+ (for local development)

### Running Locally with Docker

1. **Clone the repository**

   ```bash
   git clone https://github.com/AhmedAzzam-Web/robots-figma-GPT3-modern-UI-UX-Design.git
   cd robots-figma-GPT3-modern-UI-UX-Design
   ```

2. **Start the application**

   ```bash
   # Development environment
   docker-compose -f docker-compose.dev.yml up --build

   # Or production-like environment
   docker-compose -f docker-compose.prod.yml up --build
   ```

3. **Access the application**
   - Open http://localhost:3000 in your browser
   - The app will automatically reload on code changes if using development environment

## 🚀 Production Deployment

### Prerequisites

- Azure subscription with appropriate permissions
- Azure Service Principal with RBAC access for OIDC
- GitHub repository with Actions enabled

### 1. Create Azure Service Principal

```bash
# Login to Azure CLI
az login

# Create Service Principal
az ad sp create-for-rbac \
  --name "robots-figma-sp" \
  --role contributor \
  --scopes /subscriptions/{your-subscription-id} \
  --sdk-auth
```

**Required RBAC Permissions:**

- Contributor role on subscription or resource group
- ACR Push role for container registry access
- AKS Contributor role for cluster management

### 2. Configure GitHub Secrets

Navigate to your repository → Settings → Secrets and variables → Actions, then add:

| Secret Name             | Description                     |
| ----------------------- | ------------------------------- |
| `AZURE_CLIENT_ID`       | Service Principal Client ID     |
| `AZURE_TENANT_ID`       | Azure Tenant ID                 |
| `AZURE_SUBSCRIPTION_ID` | Azure Subscription ID           |

### 3. Deploy Infrastructure

The CI/CD pipeline will automatically:

1. **Provision Azure Resources** using Terraform:

   - Resource Group
   - Azure Container Registry (ACR)
   - Azure Kubernetes Service (AKS)
   - Network Security Groups and Load Balancers

2. **Build and Push Docker Images** to ACR

3. **Deploy to AKS** using Kubernetes manifests

## 🔧 Infrastructure Details

### Terraform Resources

The `infra/terraform/` directory contains:

- **`main.tf`**: Core infrastructure resources
- **`variables.tf`**: Configurable parameters
- **`outputs.tf`**: Resource outputs (sensitive data handled securely)
- **`providers.tf`**: Azure provider configuration

### Kubernetes Deployment

The `infra/k8s/` directory includes:

- **`deployment.yaml`**: Application deployment configuration
- **`service.yaml`**: Load balancer and service definitions
- **`namespace.yaml`**: Resource isolation
- **`kustomization.yaml`**: Environment-specific configurations to update image name

## 🔒 Security Considerations

### Terraform State Security

- Used OIDC so that we don't have to worry about storing any sensitive information

## 📊 CI/CD Pipeline

### GitHub Actions Workflow

The pipeline executes the following stages:

1. **Infrastructure Provisioning**

   - Terraform plan and apply
   - Azure resource creation
   - Output validation

2. **Container Build & Push**

   - Multi-stage Docker build
   - Image optimization
   - Push to Azure Container Registry

3. **Application Deployment**
   - Kubernetes manifest validation
   - Rolling deployment to AKS

### Pipeline Triggers

- **Create a new tag**: Automatic deployment to production
- **Manual trigger**: Available for emergency deployments

### Infrastructure Testing

```bash
# Terraform validation
cd infra/terraform
terraform validate
terraform plan
```

## 📈 Monitoring & Observability

- **Azure Monitor**: Infrastructure and application metrics
- **AKS Insights**: Cluster performance monitoring
- **Application Logs**: Centralized logging via Azure Log Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Figma Design**: [View Design](https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1)
- **Live Demo**: [https://robots-figma.netlify.app/](https://robots-figma.netlify.app/)