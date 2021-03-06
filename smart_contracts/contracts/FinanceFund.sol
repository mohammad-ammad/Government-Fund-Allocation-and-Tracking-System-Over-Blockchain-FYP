// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.5.0 < 0.9.0;

contract FinanceFundFactory
{
    address[] public deployedFundsRequest;

    event fundRequestCreated(string projectName, 
    string indexed relevantMinistry, uint256 fundAmount, address indexed owner, 
    address fundRequest, uint indexed timestamp);

    function createFinanceFund(string memory _projectName,
    string memory _relevantMinistry,
    uint256 _fundAmount) public
    {
        FinanceFund finance = new FinanceFund(_projectName,_relevantMinistry,_fundAmount, msg.sender);

        deployedFundsRequest.push(address(finance));

        emit fundRequestCreated(_projectName,_relevantMinistry,
        _fundAmount,msg.sender,address(finance),block.timestamp);

    }

}

contract FinanceFund 
{
    string public projectName;
    string public relevantMinistry;
    uint256 public fundAmount;
    address payable public owner;
    uint256 public receviedAmount;
    uint public status; // 0 = pending, 1 = approved, 2 = rejected

    event amountTransfered(address indexed donar, uint status, uint256 indexed fundAmount, uint timeStamp);

    constructor(string memory _projectName, string memory _relevantMinistry, uint256 _fundAmount, address _owner)
    {
        projectName = _projectName;
        relevantMinistry = _relevantMinistry;
        fundAmount = _fundAmount;
        owner = payable(_owner);
        status = 0;
    }

    function transferAmount() public payable
    {
        require(fundAmount > receviedAmount, "Project Amount Fullfilled");
        require(status == 0, "Project Status is not pending");
        
        owner.transfer(msg.value);
        receviedAmount += msg.value;

        emit amountTransfered(msg.sender,status,msg.value,block.timestamp);
    } 

    function RequestStatus(uint _status) public 
    {
        require(status == 0, "Cannot change the status");
        status = _status;
    } 

}