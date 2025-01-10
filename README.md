# **URswap Token**

The **URswap Token** is the native utility token for the **URswap** decentralized exchange (DEX) ecosystem. It is designed to facilitate decentralized trading, liquidity provision, and governance on the URswap platform. This repository contains the smart contract code for the token, deployed on EVM-compatible chains such as Ethereum, Binance Smart Chain, or Polygon.

---

## **Features**

- **BEP-20 Standard**: URswap Token follows the BEP-20 token standard, ensuring seamless compatibility with major wallets and decentralized applications.
- **Governance**: Token holders can participate in governance decisions and vote on proposals to enhance the platform.
- **Liquidity Incentives**: The token is used to incentivize liquidity providers within the URswap DEX.
- **Decentralized Exchange**: Built to integrate with URswap's DEX for decentralized trading and staking.

---

## **Installation**

To use the URswap Token contract, clone this repository and follow the instructions below.

### Prerequisites

- [Node.js](https://nodejs.org) installed
- [Hardhat](https://hardhat.org) installed
- An EVM-compatible wallet (e.g., MetaMask)
- Access to a testnet or mainnet (Ethereum, Binance Smart Chain, Polygon, etc.)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/urswap-token.git
   cd urswap-token

2. Install dependencies:

    ```bash
    npm install

3. Configure your Hardhat network settings by editing [Hardhat Configuration](hardhat.config.js)

4. Deploy the token contract:

    ```bash
    npx hardhat run scripts/deploy.js --network <network-name>

5. Verify the token contract:

    ```bash
    npx hardhat run utils/verify.js --network <network-name>

Replace <network-name> with the target network (e.g., bsc, ropsten, mainnet, polygon, etc.) and add **PRIVATE_KEY, ETHERSCAN_API_KEY** in .env.

---

## **Smart Contract Overview**

### Token Contract

The URswap Token contract implements the ERC-20 standard and includes the following functions:

- **transfer**: Transfer tokens between addresses.
- **approve**: Approve another address to spend tokens on behalf of the sender.
- **transferFrom**: Transfer tokens from an approved address to another.
- **balanceOf**: Check the token balance of an address.
- **burn**: Burn tokens to reduce the total supply.

### Governance and Staking

The token is used to facilitate governance on the URswap DEX platform, enabling token holders to vote on proposals and influence the platform’s development. Liquidity providers can also stake the token to earn rewards and further increase liquidity.

---

## **Proxy Contract Ownership Renouncement**

In the spirit of decentralization and to ensure the trustless operation of the URswap platform, the **ownership of the proxy contract** was renounced. The admin ownership of the proxy contract was transferred and then renounced, meaning that the proxy contract is **no longer upgradeable**.

### What does this mean?

- **Contract is Immutable**: No further upgrades or changes can be made to the contract by any entity, including the developers.
- **Trustless operation**: The platform will operate as designed without centralized control, ensuring full transparency and decentralization.
- **Enhanced Security**: By removing any potential for modification, the risk of exploits and vulnerabilities is minimized, giving users confidence that the platform is secure and reliable in the long term.
- **Community Empowerment**: With no centralized ownership, the URswap platform is truly decentralized, and its future is now in the hands of its community. This approach aligns with the values of fairness and collaboration, enabling all participants to benefit from the platform's success.
- **Long-Term Stability**: The renouncement of ownership guarantees the stability and continuity of the platform, ensuring that it will continue to serve the community without interruption or alteration by external forces.
- **Commitment to Decentralization**: The renouncement is a strong step towards ensuring that URswap is not just another centralized platform, but a truly decentralized ecosystem where governance and control are in the hands of the users.

By renouncing ownership, we have taken a definitive step to ensure that URswap remains a community-driven and immutable platform that serves its users with integrity and transparency.

---

## **Testing**

1. Run the tests to verify the functionality of the token contract:

    ```bash
    npx hardhat test

This will execute unit tests to ensure all token functions (e.g., transfer, approve, balance) are working as expected.

---

## **Contribution**

We welcome contributions! If you would like to improve the URswap Token or the platform, feel free to fork this repository and submit a pull request.

### How to contribute:

1. Fork this repository
2. Create a new branch (git checkout -b feature-xyz)
3. Make your changes
4. Commit your changes (git commit -am 'Add new feature')
5. Push to the branch (git push origin feature-xyz)
6. Open a pull request

---

## **License**

This repository is licensed under the MIT License. See the LICENSE file for more information.

---

## **Contact**

For any questions or inquiries, please reach out to the URswap team at support@urswap.io

---

## **Acknowledgements**

- This token contract uses [OpenZeppelin](https://www.openzeppelin.com) for secure, community-reviewed smart contract implementations.
- Special thanks to the Binance Smart Chain communities for their support in building decentralized finance platforms.