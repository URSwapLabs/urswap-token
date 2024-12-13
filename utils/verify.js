const { run } = require("hardhat");

async function main() {
  const implementationAddress = "0x186caAfea5495B77891ed641d88804F4C9BA1c43";

  console.log("Verifying the implementation contract...");
  await run("verify:verify", {
    address: implementationAddress,
  });

  console.log("Verification complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
