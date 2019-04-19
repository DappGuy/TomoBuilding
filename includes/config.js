var configAbiMyCryptoBuilding = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_appartmentId",
				"type": "uint256"
			}
		],
		"name": "getAppartment",
		"outputs": [
			{
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"name": "curPrice",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_appartmentId",
				"type": "uint256"
			}
		],
		"name": "purchaseAppartment",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "InitiateGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "purchaseBuilding",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBuilding",
		"outputs": [
			{
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"name": "curPrice",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var configContractAddressMyCryptoBuilding = "0xecaeb3e5f5a918bf18491963216141e38847471d";

// Access our WorldCryptoCup contract
var MyCryptoBuildingContract = web3.eth.contract(configAbiMyCryptoBuilding);
var MyCryptoBuilding = MyCryptoBuildingContract.at(configContractAddressMyCryptoBuilding);

// Constant
var safeGasPrice = 7500000000;

// We check if user is on the right network
web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('🤑 Welcome to MyCryptoBuilding! 🤑');
      $(".metamask-wrong-network-screen").hide()
      break
    case "2":
      console.log('This is the deprecated Morden test network.');
      $(".metamask-wrong-network-screen").show()
      break
    case "3":
      console.log('🤑 MyCryptoBuilding on the ropsten test network. 🤑');
      $(".metamask-wrong-network-screen").show();
      break
    default:
      console.log('This is an unknown network.');
      $(".metamask-wrong-network-screen").show()
  }
})



