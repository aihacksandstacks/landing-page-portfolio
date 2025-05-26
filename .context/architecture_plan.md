# Architecture Plan

## Overview

- **Frontend:** Next.js App Router in TypeScript, Tailwind CSS, Shadcn UI components.
- **Backend:** Next.js API Routes, OpenAI SDK for completions.
- **Data Storage:** PostgreSQL (dev/test/prod), separate DB instances for each.
- **Search:** Elasticsearch clusters for dev/test/prod.
- **Containerization:** Docker Compose for local, Kubernetes on cloud.
- **Infrastructure:** Terraform for AWS resources (ECS/EKS, RDS, ES service).
- **CI/CD:** GitHub Actions pipelines with Terragrunt for infra, Helm for k8s.

## Key Decisions

- Use App Router exclusively for pages and API.
- Avoid in-app mocks; rely on real services and CI test DB.
- Store secrets in GitHub Secrets and AWS Parameter Store.

