require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-slither");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: "https://rpc.ankr.com/polygon_amoy",
    //   accounts: ["0xYour_Private_Key"]
    // },
    vanar: {
      url: "https://rpc-vanguard.vanarchain.com",
      accounts: ["0x6d705e36e71e78bc1844edda3d61515f4c31a78623cb5306ddf7b91ddaf33842"]
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: ["0x6d705e36e71e78bc1844edda3d61515f4c31a78623cb5306ddf7b91ddaf33842"]
    },
  }
};
