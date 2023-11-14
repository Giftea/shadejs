import BigNumber from 'bignumber.js';

// Gas Multipliers based on the swap type
enum GasMultiplier {
  STABLE = 2.7,
  CONSTANT_PRODUCT = 1,
}

type Route = {
  inputAmount: BigNumber,
  quoteOutputAmount: BigNumber,
  quoteShadeDaoFee: BigNumber,
  quoteLPFee: BigNumber,
  priceImpact: BigNumber,
  inputTokenContractAddress: string,
  outputTokenContractAddress: string,
  path: string[],
  gasMultiplier: number,
};

export {
  GasMultiplier,
};
export type {
  Route,
};
