# GrantJudge

Score grant applications before humans waste review cycles.

Contract: [https://studio.genlayer.com/contracts?import-contract=0xebAA54f44dE5bF2B3FCEAD580d7e2C100d85084F](https://studio.genlayer.com/contracts?import-contract=0xebAA54f44dE5bF2B3FCEAD580d7e2C100d85084F)

## What this app is

GrantJudge is a grant application screener for ecosystem funds, accelerators, and grant programs. Paste the startup application and the fund thesis. The contract returns a ranked decision with the exact reasons the deal should move or pause.

## The problem it solves

Grant reviewers lose time on applications that are clearly out of thesis, incomplete, or too weak to advance. GrantJudge gives programs a consistent first-pass decision before humans spend review bandwidth.

## How the product works

1. Connect a browser wallet on GenLayer Studionet.
2. Paste application or startup memo.
3. Paste grant thesis and eligibility rules.
4. Sign one write transaction to the intelligent contract.
5. Wait for the contract to return the structured result.
6. Read the verdict, score, reasons, and next action in the UI.

## What the contract decides

The contract performs this judgment onchain:

> Evaluate the application against the grant thesis and decide if it should advance, be reviewed manually, or be rejected.

Returned fields:

- headline
- verdict
- score
- reasons
- next_action
- proof_of_advantage

The verdict is always APPROVE, REVIEW, or REJECT. The score is an integer from 0 to 100, and the reasons array is always kept short enough to read instantly.

## Why GenLayer is necessary here

The contract is applying qualitative thesis matching and impact judgment to each application. The point is to place that reasoning step inside an auditable intelligent contract rather than inside an offchain spreadsheet workflow.

Consensus mode: **Non-comparative equivalence**

Validators independently apply the same task and criteria to the case. This keeps the verdict stable when the app is enforcing a policy, gate, or approval rule with a tight output schema.

## Example input shape

Application or startup memo:

~~~text
Startup: TideGrid
Problem: blackouts for small factories
Solution: predictive load balancing with local agents
Ask: $75k grant...
~~~

Grant thesis and eligibility rules:

~~~text
Fund only backs climate, infra, or public service products with measurable outcomes inside 12 months.
~~~

## Important files

- contracts/grantjudge.py: intelligent contract
- deploy/001_deploy.mjs: deployment script for Studionet
- src/App.tsx: browser UI
- src/lib/genlayer.ts: wallet connection and contract calls
- src/appConfig.ts: app task, copy, placeholders, and mode

## Run locally

1. pnpm install
2. Ensure .env.local contains VITE_CONTRACT_ADDRESS=0xebAA54f44dE5bF2B3FCEAD580d7e2C100d85084F
3. Ensure .env.local contains VITE_GENLAYER_RPC_URL=https://studio.genlayer.com/api
4. pnpm dev
5. Open the app in a browser with Rabby, MetaMask, or another injected wallet that can switch to GenLayer Studionet.

## Deployed contract

- Address: 0xebAA54f44dE5bF2B3FCEAD580d7e2C100d85084F
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0xebAA54f44dE5bF2B3FCEAD580d7e2C100d85084F](https://studio.genlayer.com/contracts?import-contract=0xebAA54f44dE5bF2B3FCEAD580d7e2C100d85084F)
