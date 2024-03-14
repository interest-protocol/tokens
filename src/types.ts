export type Chain =
  | 'BSC' // name suffix [b]
  | 'ETH' // name suffix [e]
  | 'SOL' // name suffix [s]
  | 'ARB' // name suffix [a]
  | 'BTC' // name suffix [t]
  | 'FTM' // name suffix [f]
  | 'AVAX' // name suffix [x]
  | 'MATIC'; // name suffix [m]

export type Bridge = 'wormhole' | 'celer';

export interface Token {
  name: string;
  chain?: Chain;
  symbol: string;
  bridge?: Bridge;
  decimals: number;
  type: `0x${string}`;
}
