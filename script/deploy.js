const { ethers, upgrades } = require("hardhat");

async function main() {
    const deployerAddress = "0xe88adfaF82011E54Bb5129148A9373A636B759f1";

    const Godzila = await ethers.getContractFactory("URSWAP");

    console.log("Deploying proxy...");

    const godzila = await upgrades.deployProxy(Godzila, [deployerAddress], {
        initializer: "initialize",
    });
    await godzila.waitForDeployment();

    console.log("Contract deployed at:", await godzila.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error during deployment:", error);
        process.exit(1);
    });