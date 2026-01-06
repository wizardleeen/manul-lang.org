---
title: Installation (Windows)
desc: Getting started with Kiwi on Windows
date: 2026-01-06
---

### 1. Install via PowerShell
Run the following command in PowerShell to download and install the binary:

```powershell
irm https://kiwi.dev/install.ps1 | iex
```

### 2. Configure Shell
To update your system path and ensure the `kiwi` command is recognized, you generally need to restart your terminal session.

*Close your current PowerShell window and open a new one.*

### 3. Verify Installation
Confirm that Kiwi was installed correctly by checking the version:

```powershell
kiwi --version
```

### 4. Quick Start
Create and deploy a basic "Hello World" project to ensure everything is working.

**Initialize Project:**
```powershell
mkdir kiwi-test
cd kiwi-test
mkdir src

# Create a sample file
"class Product(var name: string)" | Set-Content test.kiwi

# Deploy
kiwi deploy
```

**Test Endpoint:**
Send a request to the local instance to create a new product using `Invoke-RestMethod`:

```powershell
Invoke-RestMethod -Uri "http://localhost:8080/api/product" `
  -Method Post `
  -Headers @{ "X-App-ID" = "{app-id}" } `
  -Body '{name: "Shoes"}' `
  -ContentType "application/json"
```