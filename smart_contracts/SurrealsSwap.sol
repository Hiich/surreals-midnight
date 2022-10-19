// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract SurrealsSwap is Ownable {
    address nftContract;
    mapping(address => uint256) public sacrifices;

    modifier onlyNFTContract() {
        require(msg.sender == nftContract, "Not authorized");
        _;
    }

    function redeemSacrifice(address _wallet, uint256 _amount)
        public
        onlyNFTContract
    {
        if (sacrifices[_wallet] > 0)
            if (_amount >= sacrifices[_wallet]) sacrifices[_wallet] = 0;
            else sacrifices[_wallet] -= _amount;
    }

    function makeSacrifice(uint _amount) external {
        require(sacrifices[msg.sender] + _amount <= 3, "Max sacrifice is 3");
        sacrifices[msg.sender] += _amount;
    }

    function setNFTContract(address _nftAddress) external onlyOwner{
        nftContract = _nftAddress;
    }
}