/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("@tenderly/hardhat-tenderly");
require("dotenv").config();

//
// Select the network you want to deploy to here:
//
const defaultNetwork = "arbitrum";

function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    if (defaultNetwork !== "localhost") {
      console.log(
        "☢️ WARNING: No mnemonic file created for a deploy account. Try `yarn run generate` and then `yarn run account`."
      );
    }
  }
  return "";
}

module.exports = {
  defaultNetwork,
  networks: {
    // hardhat: {
    //   gas: 12000000,
    //   blockGasLimit: 0x1fffffffffffff,
    //   allowUnlimitedContractSize: true,
    //   timeout: 1800000,
    // },
    //hardhat: {
    //  forking: {
    //    url: process.env.INFURA
    //     ? `https://mainnet.infura.io/v3/${process.env.INFURA}`
    //      : process.env.NODE_URL,
    //    blockNumber: 13130349,
    //  },
    //  gas: 3e6,
    //},
    localhost: {
      url: "http://localhost:8545",
      allowUnlimitedContractSize: true,
      timeout: 1800000,

      /*
       notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
       (you can put in a mnemonic here to set the deployer locally)
     */
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA}`, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [process.env.KEY],
      gasPrice: 6000000000,
      accounts: [],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA}`,
      accounts: [process.env.KEY],
      accounts: [],
      gasPrice: 70000000000,
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      //   accounts: [],
      accounts: [process.env.KEY],
    },
    xdai: {
      url: "https://dai.poa.network",
      gasPrice: 1000000000,
      accounts: {
        mnemonic: mnemonic(),
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN,
    url: "https://api.arbiscan.com/",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 2000000,
  },
};
