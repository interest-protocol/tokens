import { Token } from './types';

export const STRICT_LIST: ReadonlyArray<Token> = [
  {
    name: 'Sui',
    decimals: 9,
    symbol: 'SUI',
    type: '0x2::sui::SUI',
  },
  {
    name: 'FUD',
    decimals: 5,
    symbol: 'FUD',
    type: '0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD',
  },
  {
    decimals: 6,
    chain: 'ETH',
    name: 'wUSDCe',
    symbol: 'USDC',
    bridge: 'wormhole',
    type: '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN',
  },
  {
    decimals: 6,
    chain: 'ETH',
    name: 'wUSDTe',
    symbol: 'USDT',
    bridge: 'wormhole',
    type: '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN',
  },
  {
    decimals: 8,
    chain: 'BSC',
    name: 'wUSDTb',
    symbol: 'USDT',
    bridge: 'wormhole',
    type: '0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN',
  },
  {
    decimals: 8,
    chain: 'BSC',
    symbol: 'USDC',
    name: 'wUSDCb',
    bridge: 'wormhole',
    type: '0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN',
  },
  {
    decimals: 8,
    chain: 'ETH',
    name: 'wETH',
    symbol: 'ETH',
    bridge: 'wormhole',
    type: '0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN',
  },
  {
    decimals: 8,
    chain: 'BSC',
    name: 'wWBNB',
    symbol: 'WBNB',
    bridge: 'wormhole',
    type: '0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN',
  },
  {
    decimals: 9,
    chain: 'ETH',
    symbol: 'WETH',
    bridge: 'celer',
    name: 'cWETH',
    type: '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_weth_coin::CELER_WETH_COIN',
  },
  {
    decimals: 6,
    chain: 'ETH',
    symbol: 'USDC',
    name: 'cUSDCe',
    bridge: 'celer',
    type: '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdc_coin::CELER_USDC_COIN',
  },
  {
    decimals: 6,
    chain: 'ETH',
    name: 'cUSDTe',
    symbol: 'USDT',
    bridge: 'celer',
    type: '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN',
  },
  {
    decimals: 9,
    name: 'TURBOS',
    symbol: 'TURBOS',
    type: '0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS',
  },
  {
    decimals: 9,
    name: 'BUCK',
    symbol: 'BUCK',
    type: '0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK',
  },
  {
    decimals: 9,
    name: 'afSUI',
    symbol: 'afSUI',
    type: '0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI',
  },
  {
    decimals: 9,
    symbol: 'SCA',
    name: 'Scallop',
    type: '0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA',
  },
  {
    decimals: 9,
    name: 'CETUS',
    symbol: 'CETUS',
    type: '0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS',
  },
  {
    decimals: 9,
    symbol: 'HSUI',
    name: 'Suicune',
    type: '0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533::suicune::SUICUNE',
  },
  {
    decimals: 6,
    chain: 'SOL',
    symbol: 'USDC',
    name: 'wUSDCs',
    bridge: 'wormhole',
    type: '0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN',
  },
  {
    decimals: 6,
    chain: 'ARB',
    symbol: 'USDC',
    name: 'wUSDCa',
    bridge: 'wormhole',
    type: '0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb::coin::COIN',
  },
  {
    decimals: 8,
    chain: 'BTC',
    name: 'wWBTC',
    symbol: 'WBTC',
    bridge: 'wormhole',
    type: '0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN',
  },
  {
    decimals: 6,
    name: 'Ondo US Dollar Yield',
    symbol: 'USDY',
    type: '0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY',
  },
  {
    decimals: 8,
    chain: 'SOL',
    symbol: 'SOL',
    name: 'wWSOL',
    bridge: 'wormhole',
    type: '0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN',
  },
  {
    decimals: 6,
    symbol: 'SURF',
    name: 'SurfDog',
    type: '0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::surf::SURF',
  },
  {
    decimals: 8,
    chain: 'AVAX',
    symbol: 'WAVAX',
    name: 'wWAVAX',
    bridge: 'wormhole',
    type: '0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN',
  },
  {
    decimals: 9,
    symbol: 'SUIB',
    name: 'Shiba Inu',
    type: '0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB',
  },
  {
    decimals: 8,
    name: 'Vaporeon',
    symbol: 'VAPOREON',
    type: '0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79::vaporeon::VAPOREON',
  },
  {
    decimals: 9,
    symbol: 'NAVX',
    name: 'NAVX Token',
    type: '0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX',
  },
  {
    decimals: 8,
    chain: 'MATIC',
    symbol: 'WMATIC',
    name: 'wWMATIC',
    bridge: 'wormhole',
    type: '0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN',
  },
  {
    decimals: 8,
    chain: 'MATIC',
    symbol: 'USDC',
    name: 'wUSDCm',
    bridge: 'wormhole',
    type: '0xcf72ec52c0f8ddead746252481fb44ff6e8485a39b803825bde6b00d77cdb0bb::coin::COIN',
  },
  {
    decimals: 9,
    name: 'MartyParty',
    symbol: 'MARTYPARTY',
    type: '0x16b382624391a9fc9b02c983dc3e363c97638e16e0ec5365995c9d1fef085e60::martyparty::MARTYPARTY',
  },
  {
    decimals: 9,
    name: 'Millie',
    symbol: 'MILLIE',
    type: '0x2d79d5911998b695ca4dcf15a0e850e3029d169d127a007887c5d57e98c87ec8::millie::MILLIE',
  },
  {
    decimals: 9,
    chain: 'FTM',
    name: 'Millie',
    symbol: 'wWFTM',
    bridge: 'wormhole',
    type: '0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN',
  },
];

export * from './types';
