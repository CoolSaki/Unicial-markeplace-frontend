// migrations/2_deploy.js
require("dotenv").config({ path: __dirname + "/../.env" });
const royaltiesManager = artifacts.require("RoyaltiesManager");
const marketplaceV2 = artifacts.require("MarketplaceV2");
const unicialCashToken = artifacts.require("UnicialCashToken");

const UCC = {
  ZNX_TESTNET: "0x00F40F0014713f527E3e9ABa89aB45adaD0DfCe1",
};

const OWNER_CUT_PER_MILLION = 25000;

const OWNER = process.env["OWNER"];

const FEES_COLLECTOR_CUT_PER_MILLION = 0;
const ROYALTIES_CUT_PER_MILLION = 25000;
const FEE_COLLECTOR = process.env["FEE_COLLECTOR"];

module.exports = async function (deployer) {
  console.log("\n3_deploy_marketplace_v2");
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

  await deployer.deploy(royaltiesManager);
  const ROYALTIES_MANAGER = royaltiesManager.address;
  console.log("Royalties Manager:", ROYALTIES_MANAGER);

  const marketplace = await deployer.deploy(
    marketplaceV2,
    OWNER,
    FEE_COLLECTOR,
    ACCEPTED_TOKEN,
    ROYALTIES_MANAGER,
    FEES_COLLECTOR_CUT_PER_MILLION,
    ROYALTIES_CUT_PER_MILLION
  );
  console.log("Marketplace v2:", marketplace.address);
};
