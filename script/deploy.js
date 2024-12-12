const { ethers, upgrades } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    const Godzila = await ethers.getContractFactory("Godzilla");

    const godzila = await upgrades.deployProxy(Godzila, [deployer.address])
    godzila.waitForDeployment();

    console.log("Contract deployed at: ", await godzila.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });