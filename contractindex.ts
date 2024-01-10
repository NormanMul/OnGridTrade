import { IC, Principal } from "@dfinity/agent
import MySmartContract from "./smart_contract";

// Define the canister ID and principal for the contract
const canisterId = "your-canister-id" as Principal;
const principal = "your-principal" as Principal;

// Create an agent for the smart contract
const IC = new IC({ agentOptions: { host: "https://your-ic-host.com", principal } });

// Create an instance of the smart contract
const smartContract = new MySmartContract();

// Call the functions on the smart contract
async function main() {
  const balance = await smartContract.getBalance();
  console.log(`Balance: ${balance}`);

  const supplyAndDemand = await smartContract.forecastSupplyAndDemand();
  console.log(`Supply: ${supplyAndDemand.supply}`);
  console.log(`Demand: ${supplyAndDemand.demand}`);
}

main();
