import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputPath = path.join(root, 'src/data/generated/btc-usd.ts');
const fallback = {
  amount: 76063.265,
  source: 'fallback',
  fetchedAt: new Date().toISOString(),
};

const writeModule = ({ amount, source, fetchedAt }) => {
  const content = `export const btcUsdSpot = ${amount};
export const btcUsdSource = ${JSON.stringify(source)};
export const btcUsdFetchedAt = ${JSON.stringify(fetchedAt)};
export const usdPerSat = btcUsdSpot / 100_000_000;
`;
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content);
};

try {
  const response = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot');
  if (!response.ok) {
    throw new Error(`Coinbase price fetch failed with status ${response.status}`);
  }

  const payload = await response.json();
  const amount = Number(payload?.data?.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error('Coinbase price response did not contain a valid BTC/USD amount');
  }

  const fetchedAt = new Date().toISOString();
  writeModule({ amount, source: 'coinbase', fetchedAt });
  console.log(`Updated BTC/USD spot price: $${amount.toFixed(2)} (coinbase)`);
} catch (error) {
  writeModule(fallback);
  console.warn(`Using fallback BTC/USD price because live fetch failed: ${error instanceof Error ? error.message : String(error)}`);
}
