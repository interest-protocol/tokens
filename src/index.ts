import { Token } from './types';

export const STRICT_LIST: ReadonlyArray<Token> = [
  {
    name: 'Sui',
    decimals: 9,
    symbol: 'SUI',
    type: '0x2::sui::SUI',
    logoUrl: 'https://strapi-dev.scand.app/uploads/sui_c07df05f00.png',
    kind: 'Layer1',
  },
  {
    decimals: 6,
    chain: 'ETH',
    name: 'wUSDCe',
    symbol: 'USDC',
    bridge: 'wormhole',
    type: '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN',
    logoUrl: 'https://strapi-dev.scand.app/uploads/usdc_8cc5687a10.png',
    kind: 'StableCoin',
  },
  {
    decimals: 9,
    name: 'haSUI',
    symbol: 'haSUI',
    type: '0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI',
    logoUrl: 'https://assets.haedal.xyz/logos/hasui.svg',
    kind: 'LST',
  },
  {
    decimals: 9,
    name: 'CETUS',
    symbol: 'CETUS',
    type: '0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS',
    logoUrl: 'https://strapi-dev.scand.app/uploads/Cetus_fd3e9a7dbd.png',
    kind: 'DeFi',
  },
  {
    decimals: 9,
    symbol: 'SCA',
    name: 'Scallop',
    type: '0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA',
    kind: 'DeFi',
    logoUrl:
      'https://vrr7y7aent4hea3r444jrrsvgvgwsz6zi2r2vv2odhgfrgvvs6iq.arweave.net/rGP8fARs-HIDcec4mMZVNU1pZ9lGo6rXThnMWJq1l5E',
  },
  {
    decimals: 9,
    name: 'Volo Staked SUI',
    symbol: 'vSUI',
    type: '0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT',
    logoUrl:
      'https://strapi-dev.scand.app/uploads/volo_SUI_Logo_f28ed9c6a1.png',
    kind: 'LST',
  },

  {
    decimals: 9,
    symbol: 'NAVX',
    name: 'NAVX Token',
    type: '0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX',
    logoUrl: 'https://arweave.net/FNGKLRGBS7D4lXxsmz4_F-xkMQs9DIRsTQT_q0Nn-iI',
    kind: 'DeFi',
  },
  {
    decimals: 9,
    name: 'BUCK',
    symbol: 'BUCK',
    type: '0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK',
    logoUrl:
      'https://ipfs.io/ipfs/QmYH4seo7K9CiFqHGDmhbZmzewHEapAhN9aqLRA7af2vMW',
    kind: 'StableCoin',
  },
  {
    decimals: 6,
    chain: 'SOL',
    symbol: 'USDC',
    name: 'wUSDCs',
    bridge: 'wormhole',
    type: '0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN',
    kind: 'Layer1',
    logoUrl:
      'https://strapi-dev.scand.app/uploads/Bez_nazvaniya_a03b9b6fbb.jpeg',
  },
  {
    decimals: 9,
    name: 'afSUI',
    symbol: 'afSUI',
    type: '0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI',
    logoUrl: 'https://aftermath.finance/coins/afsui.svg',
    kind: 'LST',
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
    name: 'wWETH',
    symbol: 'WETH',
    bridge: 'wormhole',
    type: '0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN',
  },
  {
    name: 'FUD',
    decimals: 5,
    symbol: 'FUD',
    type: '0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD',
  },
  {
    decimals: 9,
    name: 'MOVE',
    symbol: 'MOVE',
    type: '0x648f9eab1434c056d509ad857fb657ac170528798d771f7eb1edc35639e3e75c::movecoin::MOVECOIN',
  },
  {
    decimals: 9,
    name: 'Sacabam',
    symbol: 'SCB',
    type: '0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001::scb::SCB',
  },
  {
    decimals: 8,
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
    name: 'wWBNB',
    symbol: 'WBNB',
    bridge: 'wormhole',
    type: '0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN',
  },
  {
    decimals: 9,
    chain: 'ETH',
    name: 'cWETH',
    symbol: 'WETH',
    bridge: 'celer',
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
    symbol: 'HSUI',
    name: 'Suicune',
    type: '0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533::suicune::SUICUNE',
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
    name: 'SPAM',
    symbol: 'SPAM',
    decimals: 4,
    coinMetadata:
      '0xe01e2172335cd2b52bf2b3010ae6c95e8c2b4958db72ba11330be70e85793274',
    type: '0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a::spam::SPAM',
  },
  {
    name: 'rincel',
    symbol: 'RINCEL',
    decimals: 8,
    type: '0xd2c7943bdb372a25c2ac7fa6ab86eb9abeeaa17d8d65e7dcff4c24880eac860b::rincel::RINCEL',
    coinMetadata:
      '0xf68aa5edf8c58d8233a39c23023c8bb74d88880c2ad9df0775d785694539559e',
    logoUrl:
      'data:image/jpg;base64,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\n',
  },
  {
    decimals: 6,
    symbol: 'RINWIF',
    name: 'rinwifhat',
    logoUrl:
      'https://lavender-gentle-primate-223.mypinata.cloud/ipfs/QmUMrHW9c3S2GNSyX7LuDxk2ZU5wBGTzwo4D6xKvLCj5Sc?pinataGatewayToken=M45Jh03NicrVqTZJJhQIwDtl7G6fGS90bjJiIQrmyaQXC_xXj4BgRqjjBNyGV7q2',
    type: '0x4c023b94ba2e42e5ce1400191d0228216359f4de894150b813b1f514d2668426::rinwif::RINWIF',
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
    name: 'wWFTM',
    symbol: 'WFTM',
    bridge: 'wormhole',
    type: '0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN',
  },
];

export * from './types';
