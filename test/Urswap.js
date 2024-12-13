const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("URSWAP Contract", function () {
  let URSWAP, urswap, owner, addr1, addr2;

  beforeEach(async function () {
    // Deploy the upgradeable contract
    [owner, addr1, addr2] = await ethers.getSigners();
    URSWAP = await ethers.getContractFactory("URSWAP");
    urswap = await upgrades.deployProxy(URSWAP, [owner.address]);
    // await urswap.deployed();
  });

  describe("Initialization", function () {
    it("Should initialize with correct name and symbol", async function () {
      expect(await urswap.name()).to.equal("URSWAP");
      expect(await urswap.symbol()).to.equal("UR");
    });

    it("Should mint initial supply to owner", async function () {
      const ownerBalance = await urswap.balanceOf(owner.address);
      expect(ownerBalance).to.equal(ethers.parseUnits("500000000", 18));
    });

    it("Whitelist should be enabled by default", async function () {
      expect(await urswap.whitelistEnabled()).to.be.true;
    });
  });

  describe("Whitelist Management", function () {
    it("Should allow owner to add addresses to the whitelist", async function () {
      await urswap.setWhitelist(addr1.address, true);
      expect(await urswap.whitelist(addr1.address)).to.be.true;
    });

    it("Should allow owner to remove addresses from the whitelist", async function () {
      await urswap.setWhitelist(addr1.address, true);
      await urswap.setWhitelist(addr1.address, false);
      expect(await urswap.whitelist(addr1.address)).to.be.false;
    });

    it("Should disable whitelist when requested by owner", async function () {
      await urswap.disableWhitelist();
      expect(await urswap.whitelistEnabled()).to.be.false;
    });
  });

  describe("Transfers with Whitelist", function () {
    beforeEach(async function () {
      await urswap.setWhitelist(addr1.address, true);
    });

    it("Should allow transfers when sender and receiver are whitelisted", async function () {
      await urswap.transfer(addr1.address, ethers.parseUnits("100", 18));
      const addr1Balance = await urswap.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(ethers.parseUnits("100", 18));
    });

    it("Should block transfers when whitelist is enabled and addresses are not whitelisted", async function () {
      await expect(
        urswap.connect(addr1).transfer(addr2.address, ethers.parseUnits("100", 18))
      ).to.be.reverted;
    });

    it("Should allow transfers when whitelist is disabled", async function () {
      await urswap.disableWhitelist();
      await urswap.connect(owner).transfer(addr2.address, ethers.parseUnits("100", 18));
    });
  });

  describe("Burn Functionality", function () {
    it("Should allow owner to burn tokens", async function () {
      const initialBalance = await urswap.balanceOf(owner.address);
      const burnAmount = ethers.parseUnits("100", 18);
      await urswap.burn(burnAmount);
      const finalBalance = await urswap.balanceOf(owner.address);
      expect(finalBalance).to.equal(initialBalance - burnAmount);
    });

    it("Should prevent non-owner from burning tokens", async function () {
      await expect(
        urswap.connect(addr1).burn(ethers.parseUnits("100", 18))
      ).to.be.reverted;
    });
  });

  describe("Upgradability", function () {
    it("Should allow the contract to be upgraded by the owner", async function () {
      const GodzillaV2 = await ethers.getContractFactory("GodzillaV2");
      const godzillaAddress = await urswap.getAddress();
      const godzillaV2 = await upgrades.upgradeProxy(godzillaAddress, GodzillaV2, {
        redeployImplementation: 'always',
        kind: 'transparent'
    });
    godzillaV2.waitForDeployment();
    await godzillaV2.mint(addr1, 1000);
    expect(await urswap.balanceOf(addr1)).to.be.equal(1000);
    });
  });
});