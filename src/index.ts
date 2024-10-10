import { Token } from './types';
import stringListJson from '../sui.json';

export const STRICT_LIST = stringListJson as ReadonlyArray<Token>;

export * from './types';
