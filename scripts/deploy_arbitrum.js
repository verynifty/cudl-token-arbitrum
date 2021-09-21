const hre = require("hardhat");

async function main() {
  const Cudl = await hre.ethers.getContractFactory("Cudl");
  const cudl = await Cudl.deploy(
    "0x096760F208390250649E3e8763348E783AEF5562",
    "0xecd20f0ebc3da5e514b4454e3dc396e7da18ca6a"
  );

  console.log("Cudl deployed to:", cudl.address);

  //   this is the address
  const CUDL_ARBI = "0x3de4cad091c0f041a34bca1c52e222b821f5189f";
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
