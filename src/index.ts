import { Token } from './types';
import stringListJson from '../sui.json';

export const SUI_VERIFIED_COINS = stringListJson as ReadonlyArray<Token>;

export const getSuiVerifiedCoins = (): Promise<ReadonlyArray<Token>> =>
  fetch('https://interest-protocol.github.io/tokens/sui.json').then((res) =>
    res.json?.()
  );

export * from './types';
