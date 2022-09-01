// migrations/2_deploy.js
require("dotenv").config({ path: __dirname + "/../.env" });
const marketplace = artifacts.require("Marketplace");
const unicialCashToken = artifacts.require("UnicialCashToken");

const UCC = {
  ZNX_TESTNET: "0x00F40F0014713f527E3e9ABa89aB45adaD0DfCe1",
};

const OWNER_CUT_PER_MILLION = 25000;

const OWNER = process.env["OWNER"];

module.exports = async function (deployer) {
  console.log("\n2_deploy_marketplace_v1");
  console.log("====================\n");

  const network = process.env["NETWORK"] || "ganache";

  if (!network) {
    throw "Invalid network";
  }
  var ACCEPTED_TOKEN = UCC[network];

  if (network === "ganache") {
    await deployer.deploy(unicialCashToken);
    ACCEPTED_TOKEN = unicialCashToken.address;
  }

  await deployer.deploy(
    marketplace,
    ACCEPTED_TOKEN,
    OWNER_CUT_PER_MILLION,
    OWNER
  );
};
