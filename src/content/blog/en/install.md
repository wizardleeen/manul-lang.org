---
title: Installation
desc: Getting started with Kiwi
date: 2026-01-06
---


### 1. Install via CLI
Run the following command to download and install the binary:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://kiwi.dev/install.sh | sh
```

### 2. Configure Shell
Reload your shell configuration to update your path (ensure you use the config file matching your active shell, e.g., `.zshrc` or `.bashrc`):

```bash
source ~/.zshrc
```

### 3. Verify Installation
Confirm that Kiwi was installed correctly by checking the version:

```bash
kiwi --version
```

### 4. Quick Start
Create and deploy a basic "Hello World" project to ensure everything is working.

**Initialize Project:**
```bash
mkdir kiwi-test
cd kiwi-test
mkdir src

# Create a sample file
cat << EOF > test.kiwi
class Product(var name: string)
EOF

# Deploy
kiwi deploy
```

**Test Endpoint:**
Send a request to the local instance to create a new product:

```bash
curl -H "X-App-ID: {app-id}" \
     -X POST http://localhost:8080/api/product \
     --data-raw '{name: "Shoes"}'
```
