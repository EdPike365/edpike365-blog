---
title: "About"
date: "2021-12-27T22:12:03.284Z"
status: published
author: EdPike365
tags:
  - edpike365
  - goals
---

[Me](#me) | [My Goals in 2022](#my-goals-in-2022) | [Goals in 2023](#my-goals-in-2023) | [This Site](#this-site)

<!-- excerpt-end -->

### Me

- Links: [GitHub](https://github.com/EdPike365) | [LinkedIn]() | [Medium](https://edpike365.medium.com/) | [Twitter](https://twitter.com/EdPike365) | [Certs and Classes](/professional-certs-classes)

- Primary Skills:

  - Full Stack Web App Development

    I started out developing 3 tier apps, first with MS Active Server Pages (ASPs), then Java Server Pages (JSPs). I then moved to "fat client" multi page apps hitting REST services. I was still using JSPs for header, footer, and session mgt.

    I almost exclusively made extranet and intranet apps. The apps were nearly all orphaned "brown field" apps, so they required a lot of forensics and refactoring. I developed SSO code vis a vis MS Active Directory for intranet apps, and MS CRM for extranet access.

  - DevOps and Agile Evangelist and Tools Engineer

    Modifying orphaned legacy apps is difficult. I taught myself DevOps while researching best practices for refactoring. I inherited monoliths with no version control, no testing, no documentation. The code was litered with the former developers human usernames and passwords. Code was updated by copying individual class files over their predecessors. The end users turned over so much they did not know the history of how their apps were developed.

    The last developer job I'd had used SVN and rudimentary unit testing and I knew that the world had moved along since then. I loaded up on books and implemented Git, Gradle, JUnit, and Selenium. I drove adoption of AppDynamics monitoring. I creatdd AD service accounts and pulled all references to user credentials out of the massive code base. I laid out a plan to break apart the Java monolith into microservices.

    I took a contract to develop a CI/CD pipeline for BI report developers. The company was having problems with the reports quietly breaking and presenting erroneous data. Without version control and some sort of automated testing, they could not spot new breaks. I used JGit to create a workflow. I created an interface for the report developers to create JUnit like tests against known data with expected results.

- Secondary Skills

  Full stack web app development touches nearly all infrastructure in a company: DNS, Load Balancers, Networks, Identity, DBs, VMs, ERP apps, file systems, and Email Servers. When an app fails due to timeouts, the problem can be nearly anywhere in the system. I mostly worked in smaller companies, and needed to learn about all of those in the course of being productive.

  - SysOps: In the last job that required me to do Ops, I started learning about IaC (Infrastructure as Code) and helped the limited IT staff learn and begin adopting it. I pitched it as "sharpening the axe" versus "chopping harder".

  - DB Admin: I worked several years at a company that only had a part time, contractor DBA. He delegated a lot of his power to me. The web apps used legacy MS SQL server stored procedures that intermittentantly timed out and it was unclear what was causing it. The queries accessed JD Edwards ERP tables and stored procedures, so I needed to learn the JDE schema to figure out what could be causing it on their end. This recurred when JDE was upgraded.

  - Mentor: I documented and coached best practices for:

    - class, variable and function naming to support self documentation
    - "code smell" avoidance (too much code in one class, entanglement)
    - git workflows, at least daily merge
    - DRY, YAGNI

  - Technical Educator

    After the .com crash, I took a detour from software development into
    secondary school science and technology education. I enjoy educating and
    mentoring, and it was a good schedule fit for raising five school age children. I earned a Masters of Education in secondary education, primarily physics and general science. I ended up using my software experience to instead teach HS software engineering, robotics and CAD.

    I sponsored computer gaming clubs and robotics teams.

### My Goals in 2022

#### Strategic

1. Work as a consultant and be able to offer the following services:

- Modernize legacy Java web apps
  - The market is not sexy but its large.
  - From "lift and shift" to re-architect and refactor.
  - From monolith to microservices.
  - Migrate state to a seperate datastore to facilitate horizontal scaling.
  - Implement vanilla, MPA web client or SPA.
  - Upgrade to latest Java LTS (17) and native compilation
- Offer pub/sub integration to increase performance and resilience.
- Containerized, vendor neutral, serverless APIs
- Introduce or enhance DevOps Infrastructure, and custom DevOps tools if needed.
  - Turnkey CI/CD: Integrated with existing client infrastructure or de novo.
    - Migrate from classic Jenkins to [Jenkins Files](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/)
    - Automated load and security testing during dev
  - Converting IT/Ops to IaC
    - Create on prem Kubernetes cluster to leverage existing data center
    - Containerize everything (migrate from pet servers on VMs to generic containerized versions with state and data somewhere else)
    - IaC build scripts for dev, staging, prod
      - for n clusters, nodes
    - Create cloud vendor clusters.
- Improve App and API integrated security
  - Federated auth, AD integration.
  - Move secrets to secret repos and secret services (same for configs)

1. Earn Kubernetes certs (I've already bought them and they must be used)

#### Tactical

I will be learning and demonstrating the following things to support strategic goals. It will be a very busy year as I run to get back on this fast moving train.

Front End

- App Frameworks
  - Maintain: GatsbyJS, React
  - Improve: Next.js, Redux
  - Explore: SvelteKit, Angular 2, [Remix](https://remix.run/)
  - Skip: Vue/Nuxt, React Native, Flutter, Ruby, Android, Swift
- SSO: Okta, AuthO
- API Consumption: GraphQL and gRPC
- Master SPA and webworkers
- Master Typescript and auto testing

Back End

- Serverless APIs
  - Use cloud neutral, kubernetes native, OpenFaaS serveless framework and OCI containers.
    - [Knative (Google)](https://knative.dev/docs/)
  - Improve Java startup speed, resource usage by moving to [GraalVM Native](https://developer.okta.com/blog/2021/06/18/native-java-framework-comparison):
    - [**Quarkus**](https://quarkus.io/): [GraalVM Native option](https://quarkus.io/guides/building-native-image)
    - [Micronaut](https://micronaut.io/): [GraalVM Native option](https://docs.micronaut.io/latest/guide/index.html#graal)
    - [Spring Boot](https://spring.io/projects/spring-boot): [Spring Native Beta (GraalVM option)](https://docs.spring.io/spring-native/docs/current/reference/htmlsingle/)
  - [OpenAPI](https://www.openapis.org/) compliance
  - [GraphQL](https://graphql.org/) where appropriate
- Create a reference NodeJS API with auto testing. [Koa](https://nestjs.com/) or [NestJS](https://koajs.com/)

DevOps

- Enable more self serve capacity creation and management:
  - Multi Cluster (vs Namespaces): [vcluster](https://www.vcluster.com/) virtual clusters that provide more isolation than namespaces (though they in fact live in a namespace)
  - [Gitpod](https://www.gitpod.io/)
- Enable multicloud packaging and deployment: [KubeVela](https://kubevela.io/)
- Offer transition away from Docker, Docker Desktop. [Rancher Desktop](https://rancherdesktop.io/)
- Master [TerraForm](https://www.terraform.io/)
- Master [Jenkinsfile](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/).
- Security scanning build plugin: [Probley](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/)

SysOps

- Logging: [Grafana Loki](https://grafana.com/oss/loki/)
- Monitoring: [Prometheus](https://prometheus.io/)
- Visualization: [Grafana Dashboards](https://grafana.com/grafana/dashboards/)
- Health Monitoring: [Kuberhealthy](https://github.com/kuberhealthy/kuberhealthy)
- Troubleshooting: [Komodor](https://komodor.com/)
- Cluster Mgt GUI: [Rancher Kubernetes Dashboard](https://rancher.com/docs/k3s/latest/en/installation/kube-dashboard/)

- Create [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) and Config service reference. I'm still trying to nail this down:

  - Argo CD
    - [Bitnami Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) Current Top Choice
      - [How To Store Kubernetes Secrets in Git Repos](https://www.youtube.com/watch?v=xd2QoV6GJlc)
    - [Helm Secrets](https://github.com/jkroepke/helm-secrets)
  - [Kubernetes ConfigMap and Secret as Kubernetes Volumes](https://www.youtube.com/watch?v=FAnQTgr04mU)

  - [External Secrets Operator (was GoDaddy)](https://github.com/external-secrets/external-secrets). Backends:
    - [Hashicorp Vault](https://external-secrets.io/provider-hashicorp-vault/) Stable. [Vault](https://www.vaultproject.io/)
    - [GCP SM](https://external-secrets.io/provider-google-secrets-manager/) Stable
    - [ASM (Amazon Secrets Manager)](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) beta
  - [Fabric8 Config](https://fabric8.io/guide/develop/configuration.html)?

Containers

- Build Container Images on Kubernetes: [Shipwright](https://shipwright.io/) using [Kaniko](https://github.com/GoogleContainerTools/kaniko) (Shipwright requires Tekton)
- Know how to deploy Kubernetes, including serverless function containers, to [GKE](https://cloud.google.com/kubernetes-engine), [AWS EKS](https://aws.amazon.com/eks/), [Azure AKS](https://azure.microsoft.com/en-us/services/kubernetes-service/#overview).
- Self Service API: [CrossPlane](https://crossplane.io/)

### My Goals in 2023

- Offer HA Multi Cluster architecture
  - Beyond Dev, Staging and Prod clusters
- Offer migration from vendor specific solutions to vendor neutral Kubernetes options.
- Master GoLang
  - Be able to migrate Java apps to GoLang
  - Be able to create cloud native apps (Kubernetes is written in Go)
  - Be able to offer de novo API's
- Master DevSecOps
  - Automated Pentesting
- IOT DevOps
  - On prem equipment
  - Biology Cloud Lab Automation
- Master Python
  - Be able to migrate POC ML jobs to scalable production apps
- MLOps
  - TensorFlow, Keras
  - Data/Feature Engineering Pipelines
  - NGS (Next Generation Sequencer) data pipelines (very large files).
- Explore Rust
- Get more Cloud Vendor certs

### This Site

I wrote EdPike365.com in [Gatsby](https://www.gatsbyjs.com/). I
wanted to learn a lot about React, JAM Stack, GraphQL CSS in JS, and NPM
publishing. At the time, it was a better offer than NextJS.

I am documenting my work and what I learned in my [Site Customization Journal](/edpike365-customizations/).
