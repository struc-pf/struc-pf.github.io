---
title: A data foundation for clean cooking and clean water programmes
clientType: A social enterprise delivering clean cooking and clean water programmes
tag: Social enterprise
services: [Build]
summary: A scalable data architecture for operational, impact and carbon project reporting.

challenges:
  - title: Growing volumes of data
    text: "Operational, monitoring and impact data came in from water, sanitation and hygiene activities, clean cooking projects and maintenance records."
  - title: Inconsistent structures
    text: "Data was collected through a survey tool, but inconsistent structures and processes made quality hard to maintain."
  - title: Hard to track progress
    text: "It was difficult to follow progress over time or produce reliable insights."
  - title: Carbon traceability
    text: "The team needed a stronger foundation to meet the traceability requirements of carbon projects."

diagram:
  title: What we built
  layout: flow
  items:
    - name: Survey forms
      note: Data collection
    - name: Pipelines
      note: Into Microsoft Fabric
    - name: Raw data
    - name: Cleaned datasets
    - name: Reporting-ready data
    - name: Dashboards
      note: Operations, impact and carbon
  caption: "One data model keeps raw data, cleaned datasets and reporting-ready information separate, from collection through to reporting."

stepsTitle: What we did
steps:
  - title: Audit
    text: "Audited survey design, forms, data structures and reporting workflows, and documented the gaps."
  - title: Improve collection
    text: "Worked with the team on survey design so forms captured the right information."
  - title: Build the architecture
    text: "Designed the database structures and built end-to-end pipelines for ingesting and transforming data."
  - title: Build in quality
    text: "Set up cleaning, validation and governance so data stays consistent over time."
  - title: Dashboards and training
    text: "Built interactive dashboards and trained internal teams to manage the new processes."

outcomesTitle: What the team gets
outcomes:
  - title: Live dashboards
    text: "Teams can monitor operational KPIs and impact metrics, from clean cooking performance and carbon indicators to water delivery and maintenance."
  - title: Less manual entry
    text: "Streamlined processes and automated workflows reduce manual data entry and improve accuracy."
  - title: Data that holds up
    text: "Governance and validation keep data consistent and traceable for carbon projects."
  - title: A team that can run it
    text: "Internal teams are trained to manage the processes, understand the data structure and keep quality high."

featured: true
order: 2
draft: false
---
