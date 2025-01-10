const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = "0x2d13f9D88bb021A01Ace9e5424fB82A408E1E0f2";

    const admin = await upgrades.erc1967.getAdminAddress(proxyAddress);
    console.log("Proxy Admin Address:", admin);

    const implementation = await upgrades.erc1967.getImplementationAddress(proxyAddress);
    console.log("Implementation Address:", implementation);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
