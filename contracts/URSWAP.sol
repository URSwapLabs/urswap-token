// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract URSWAP is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    mapping(address => bool) public whitelist;
    bool public whitelistEnabled;

    function initialize(address initialOwner) public initializer {
        __ERC20_init("URSWAP", "UR");
        __Ownable_init(initialOwner);

        whitelistEnabled = true;
        _mint(initialOwner, 500000000 * 10 ** decimals());
    }

    // Burn function: Allows the owner to burn their own tokens
    function burn(uint256 amount) public onlyOwner {
        require(balanceOf(msg.sender) >= amount, "URSWAP: Not enough tokens to burn");
        _burn(msg.sender, amount);
    }

    // Whitelist function: Allows the owner to add or remove addresses from the whitelist
    function setWhitelist(address account, bool status) public onlyOwner {
        whitelist[account] = status;
    }

    // Function to disable whitelist
    function disableWhitelist() public onlyOwner {
        whitelistEnabled = false;
    }

    // Override transfer function to include whitelist check
    function transfer(address to, uint256 amount) public override returns (bool) {
        if (whitelistEnabled) {
            require(whitelist[to] || whitelist[msg.sender], "URSWAP: Address not whitelisted");
        }
        return super.transfer(to, amount);
    }

    // Override transferFrom function to include whitelist check
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public override returns (bool) {
        if (whitelistEnabled) {
            require(whitelist[to] || whitelist[from], "URSWAP: Address not whitelisted");
        }
        return super.transferFrom(from, to, amount);
    }
}