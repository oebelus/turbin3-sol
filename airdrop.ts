import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Create Solana devnet connection
const connection = new Connection("https://api.devnet.solana.com");

// Claim 2 devnet SOL tokens
(async () => {
  try {
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      LAMPORTS_PER_SOL * 2
    );
    console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
