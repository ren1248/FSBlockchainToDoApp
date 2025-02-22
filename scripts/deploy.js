const main = async () => {
    const contractFactory = await ethers.getContractFactory('TaskContract');
    const contract = await contractFactory.deploy();
    await contract.waitForDeployment();
 
    console.log("Contract deployed to: ", contract.target);
}
 
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
 
runMain();