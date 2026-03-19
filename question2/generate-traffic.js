const BASE_URL = "http://localhost:3000";

async function hit(path, count) {
  for (let i = 0; i < count; i++) {
    await fetch(`${BASE_URL}${path}`);
  }
}

async function main() {
  // Send repeated traffic to /about so the sampling difference is easier to observe
  await hit("/about", 200);

  console.log("Traffic generation complete");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});