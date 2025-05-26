# Roadmap

**Goal:** Build an AI-powered landing page generator with modular UI and robust API.

## Phases

1. **Setup & Configuration** (Jun 2024)
   - Initialize Next.js app and AI API route
   - Configure environment variables and project structure
   - Resolve 404 asset/stub issues and context scaffolding

2. **Headline Generation** (Jul 2024)
   - Build input form UI
   - Hook up `generate-landing-page` API
   - Display generated headlines and variations

3. **Full Page Schema** (Aug 2024)
   - Extend API to produce full page JSON (headline, copy, features)
   - Render sections dynamically in React

4. **Styling & Templates** (Sep 2024)
   - Provide multiple visual templates (Netflix, Thinkific, LinkedIn)
   - Integrate Tailwind/Theme switching

5. **Persistence & User Accounts** (Oct 2024)
   - Save generated pages to database
   - Add user login and history view

6. **Production & Deployment** (Nov 2024)
   - Dockerize app, Terraform infra
   - Kubernetes deployment
   - CI/CD and monitoring
