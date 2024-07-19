# Cypress Authorization API Project

This project is a Cypress automation suite designed to test APIs with token-based authorization from a RESTful web service. It includes automated tests for various endpoints and verifies proper authentication and authorization.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Folder Structure](#folder-structure)

## Introduction

This project leverages Cypress to automate API testing with token-based authorization. The tests are designed to ensure the APIs function as expected and handle authorization correctly.

## Features

- Automated API testing using Cypress
- Token-based authorization
- Tests for various endpoints
- Easy configuration and setup
- Detailed test reports
### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/kaiorpg/cypress-authorization-API-project.git
    cd cypress-authorization-API-project
    ```

2. Install the dependencies:

    ```sh
    npm install
    npm install cypress
## CI/CD with GitHub Actions
This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). The configuration file for GitHub Actions is located in the .github/workflows directory.
Folder Structure
## Folder Structure

The project has the following structure:

```plaintext
cypress-authorization-API-project/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   └── api/
│   │       └── example.spec.js
│   ├── plugins/
│   │   └── index.js
│   └── support/
│       ├── commands.js
│       └── index.js
├── .env
├── .github/
│   └── workflows/
│       └── cypress.yml
├── .gitignore
├── cypress.json
├── package.json
└── README.md
```

- cypress/fixtures`: Contains test data files.
- cypress/integration/api: Contains the API test specifications.
- cypress/plugins: Contains custom plugins for Cypress.
- cypress/support: Contains support files and custom commands.
- .env: Environment variables file.
- .github/workflows: Contains CI/CD workflow files.
- cypress.json: Cypress configuration file.
- package.json: Project dependencies and scripts.
- README.md: Project documentation.


