# Decentralized To-Do List

This project is a decentralized to-do list application built using Solidity, Hardhat, React, Vite, Material-UI, and Tailwind CSS. The smart contract manages tasks on the Ethereum blockchain, allowing users to create, update, complete, and delete tasks.

## Features

- **Add Tasks**: Create new tasks.
- **Complete Tasks**: Mark tasks as completed.
- **Edit Tasks**: Update existing tasks.
- **Delete Tasks**: Remove tasks from the list.
- **Decentralized**: All tasks are managed on the Ethereum blockchain.

## Prerequisites

- Node.js
- npm (or yarn)
- MetaMask or another Ethereum wallet extension

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/saibotlive/web3-to-do.git
cd web3-to-do
```

### Install Dependencies

Install dependencies for both the smart contract and the frontend.

```bash
npm install
cd frontend
npm install
```

### Set Up Environment Variables

Create a `.env` file in the `frontend` directory and add the following environment variables:

```env
VITE_CONTRACT_ADDRESS=your_contract_address
VITE_ETHEREUM_NETWORK_URL=http://127.0.0.1:8545
```

### Compile and Deploy the Smart Contract

Run the following commands to compile and deploy the smart contract:

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
```

After deploying, update the `VITE_CONTRACT_ADDRESS` in your `.env` file with the deployed contract address.

### Start the Local Blockchain

Start the Hardhat local blockchain:

```bash
npx hardhat node
```

### Run the Frontend

In a new terminal, navigate to the `frontend` directory and start the Vite development server:

```bash
npm run dev
```

### Access the Application

Open your browser and navigate to `{your_vite_localhost}` to access the decentralized to-do list application.

## Usage

- **Add Task**: Enter a new task in the input field and click "Add Task".
- **Complete Task**: Click the checkbox next to a task to mark it as completed.
- **Edit Task**: Click the edit icon, update the task text, and press Enter or click outside the input field to save.
- **Delete Task**: Click the delete icon to remove a task.

## Project Structure

```
.
├── contracts
│   └── TodoList.sol
├── scripts
│   └── deploy.ts
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   └── TaskList.tsx
│   │   ├── App.tsx
│   │   ├── constants.ts
│   │   └── ...
│   ├── public
│   ├── .env
│   └── ...
├── hardhat.config.ts
├── package.json
├── README.md
└── ...
```
