const { ethers } = require("hardhat")

const main = async () => 
{
    const [deployer] = await ethers.getSigners();
    
    const Funder = await ethers.getContractFactory("ReleventFundFactory");

    const funder = await Funder.deploy();

    console.log("Deployer Address", funder.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error)
    process.exit(1)
})

