const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const godzillaAddress = "0xC0270b7Dc5DAC4Ee51CF52EeaEC1535aa1e6E882";
    console.log("Existing Godzilla proxy address:", godzillaAddress);

    const GodzillaV2 = await ethers.getContractFactory("GodzillaV2");
    const upgradedGodzilla = await upgrades.upgradeProxy(godzillaAddress, GodzillaV2, {redeployImplementation: 'always'});

    console.log("Godzilla contract upgraded to:", await upgradedGodzilla.getAddress());
    console.log("New contract name:", await upgradedGodzilla.name());
    // console.log("New contract version:", await upgradedGodzilla.version());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});