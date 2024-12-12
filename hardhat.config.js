require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-ethers")

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
    // vanar: {
    //   url: "https://rpc-vanguard.vanarchain.com",
    //   accounts: ["0xYour_Private_Key"]
    // },
    // bsc: {
    //   url: "https://bscrpc.com",
    //   accounts: ["0xYour_Private_Key"]
    // },
  }
};
