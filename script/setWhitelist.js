const { ethers } = require("hardhat");

async function main() {

  const addressToWhitelist = "0x87A137c84274Dbc208415c040e7CcFf83A681632";
  const status = true;

  const contractAddress = "0x2d13f9D88bb021A01Ace9e5424fB82A408E1E0f2";
  const [deployer] = await ethers.getSigners();

  console.log("Deployer Address:", deployer.address);

  const URSWAP = await ethers.getContractFactory("URSWAP");
  const contract = await URSWAP.attach(contractAddress);

  const tx = await contract.setWhitelist(addressToWhitelist, status);
  console.log(`Calling setWhitelist(${addressToWhitelist}, ${status})...`);

  await tx.wait();
  console.log(`Transaction successful! Address ${addressToWhitelist} added to whitelist: ${status}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
