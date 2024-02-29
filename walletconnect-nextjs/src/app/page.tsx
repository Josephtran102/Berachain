// Imports
// ========================================================
import Account from "/Users/vietnguyen/Web3/berachain/walletconnect-nextjs/components/Account"; 
import SignMessage from "/Users/vietnguyen/Web3/berachain/walletconnect-nextjs/components/SignMessage"; 
import Deploy from "/Users/vietnguyen/Web3/berachain/walletconnect-nextjs/components/Deploy"; 
// Main Page
// ========================================================
export default function Home() {
  // Render
  return (
    <main className="p-8">
      <h1>🐻⛓️ Berachain WalletConnect Web3Modal Example</h1>
      <p>An example of Berachain being used with WalletConnect.</p>
      <div className="mb-8">
        <w3m-button />
      </div>
    
      <Account />
      <SignMessage />
      <Deploy />

    </main>
  )
};