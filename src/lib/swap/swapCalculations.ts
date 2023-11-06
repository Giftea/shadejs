import BigNumber from 'bignumber.js';
import { StableConfig } from './stableswapCurve/stable';

/**
* returns output of a simulated swap from token0 to token1 using the constant
* product rule for non-stable pairs.
* The swap output is rounded to the nearest integer, so inputs should be in
* raw number form to prevent loss of precision
* */
function constantProductSwapToken0for1({
  token0LiquidityAmount,
  token1LiquidityAmount,
  token0InputAmount,
  fee,
}:{
  token0LiquidityAmount: BigNumber,
  token1LiquidityAmount: BigNumber,
  token0InputAmount: BigNumber,
  fee: BigNumber
}) {
  // constant product rule
  const token1OutputAmount = token1LiquidityAmount.minus(
    token0LiquidityAmount.multipliedBy(token1LiquidityAmount)
      .dividedBy((token0LiquidityAmount.plus(token0InputAmount))),
  );

  // subtract fees after swap
  const realToken1outputAmount = token1OutputAmount.minus(token1OutputAmount.multipliedBy(fee));
  return BigNumber(realToken1outputAmount.toFixed(0));
}

/**
* returns input of a simulated swap from token0 to token1 using the constant
* product rule for non-stable pairs
* The swap output is rounded to the nearest integer, so inputs should be in
* raw number form to prevent loss of precision
* */
function constantProductReverseSwapToken0for1({
  token0LiquidityAmount,
  token1LiquidityAmount,
  token1OutputAmount,
  fee,
}:{
  token0LiquidityAmount: BigNumber,
  token1LiquidityAmount: BigNumber,
  token1OutputAmount: BigNumber,
  fee: BigNumber
}) {
  if (token1OutputAmount.isGreaterThanOrEqualTo(token1LiquidityAmount)) {
    throw Error('Not enough liquidity for swap');
  }
  // constant product rule including fee applied after the trade
  const token0InputAmount = (token0LiquidityAmount.multipliedBy(
    token1LiquidityAmount,
  ).dividedBy(
    token1OutputAmount.dividedBy(BigNumber(1).minus(fee)).minus(token1LiquidityAmount),
  ).plus(token0LiquidityAmount)).multipliedBy(-1);
  return BigNumber(token0InputAmount.toFixed(0));
}

/**
* returns the price impact of a simulated swap of token 0 for token 1,
* Price impact is the difference between the current market price and the
* price you will actually pay.
* Inputs may either be in human readable or raw form. There is no rounding performed, therefore
* there is no risk of loss of precision
* */
function constantProductPriceImpactToken0for1({
  token0LiquidityAmount,
  token1LiquidityAmount,
  token0InputAmount,
}:{
  token0LiquidityAmount: BigNumber,
  token1LiquidityAmount: BigNumber,
  token0InputAmount: BigNumber,
}) {
  const marketPrice = token0LiquidityAmount.dividedBy(token1LiquidityAmount);
  const constantProduct = token0LiquidityAmount.multipliedBy(token1LiquidityAmount);
  const newToken0LiquidityAmount = token0LiquidityAmount.plus(token0InputAmount);
  const newToken1LiquidityAmount = constantProduct.dividedBy(newToken0LiquidityAmount);
  const amountToken1Received = token1LiquidityAmount.minus(newToken1LiquidityAmount);
  const paidPrice = token0InputAmount.dividedBy(amountToken1Received);

  const priceImpact = paidPrice.dividedBy(marketPrice).minus(1);
  return priceImpact;
}

/**
* returns output of a simulated swap from token1 to token0 using the constant
* product rule for non-stable pairs
* The swap output is rounded to the nearest integer, so inputs should be in
* raw number form to prevent loss of precision
* */
function constantProductSwapToken1for0({
  token0LiquidityAmount,
  token1LiquidityAmount,
  token1InputAmount,
  fee,
}:{
  token0LiquidityAmount: BigNumber,
  token1LiquidityAmount: BigNumber,
  token1InputAmount: BigNumber,
  fee: BigNumber
}) {
  // constant product rule
  const token0OutputAmount = token0LiquidityAmount.minus(
    token0LiquidityAmount.multipliedBy(token1LiquidityAmount)
      .dividedBy(token1LiquidityAmount.plus(token1InputAmount)),
  );
  // subtract fees after swap
  const realtoken0OutputAmount = token0OutputAmount.minus(token0OutputAmount.multipliedBy(fee));
  return BigNumber(realtoken0OutputAmount.toFixed(0));
}

/**
* returns input of a simulated swap from token1 to token0 using the constant
* product rule for non-stable pairs
* The swap output is rounded to the nearest integer, so inputs should be in
* raw number form to prevent loss of precision
* */
function constantProductReverseSwapToken1for0({
  token0LiquidityAmount,
  token1LiquidityAmount,
  token0OutputAmount,
  fee,
}:{
  token0LiquidityAmount: BigNumber,
  token1LiquidityAmount: BigNumber,
  token0OutputAmount: BigNumber,
  fee: BigNumber
}) {
  if (token0OutputAmount.isGreaterThanOrEqualTo(token0LiquidityAmount)) {
    throw Error('Not enough liquidity for swap');
  }

  // constant product rule including fee applied after the trade
  const token1InputAmount = (token1LiquidityAmount.multipliedBy(
    token0LiquidityAmount,
  ).dividedBy(
    token0OutputAmount.dividedBy(BigNumber(1).minus(fee)).minus(token0LiquidityAmount),
  ).plus(token1LiquidityAmount)).multipliedBy(-1);
  return BigNumber(token1InputAmount.toFixed(0));
}

/**
* returns the price impact of a simulated swap of token 1 for token 0,
* Price impact is the difference between the current market price and the
* price you will actually pay.
* Inputs may either be in human readable or raw form. There is no rounding performed, therefore
* there is no risk of loss of precision
* */
function constantProductPriceImpactToken1for0({
  token0LiquidityAmount,
  token1LiquidityAmount,
  token1InputAmount,
}:{
  token0LiquidityAmount: BigNumber,
  token1LiquidityAmount: BigNumber,
  token1InputAmount: BigNumber,
}) {
  const marketPrice = token1LiquidityAmount.dividedBy(token0LiquidityAmount);
  const constantProduct = token1LiquidityAmount.multipliedBy(token0LiquidityAmount);
  const newToken1LiquidityAmount = token1LiquidityAmount.plus(token1InputAmount);
  const newToken0LiquidityAmount = constantProduct.dividedBy(newToken1LiquidityAmount);
  const amountToken0Received = token0LiquidityAmount.minus(newToken0LiquidityAmount);
  const paidPrice = token1InputAmount.dividedBy(amountToken0Received);
  const priceImpact = paidPrice.dividedBy(marketPrice).minus(1);
  return priceImpact;
}

/**
* returns output of a simulated swap of token0 for token1 using the stableswap math
* inputs token amounts must be passsed in as human readable form
* */
function stableSwapToken0for1({
  inputToken0Amount,
  poolToken0Amount,
  poolToken1Amount,
  priceRatio,
  alpha,
  gamma1,
  gamma2,
  liquidityProviderFee,
  daoFee,
  minTradeSizeToken0For1,
  minTradeSizeToken1For0,
  priceImpactLimit,
}:{
  inputToken0Amount:BigNumber,
  poolToken0Amount: BigNumber,
  poolToken1Amount: BigNumber,
  priceRatio: BigNumber,
  alpha: BigNumber,
  gamma1: BigNumber,
  gamma2: BigNumber,
  liquidityProviderFee: BigNumber,
  daoFee: BigNumber,
  minTradeSizeToken0For1: BigNumber,
  minTradeSizeToken1For0: BigNumber,
  priceImpactLimit: BigNumber,
}) {
  function stableSwapConfig(): StableConfig {
    BigNumber.set({ DECIMAL_PLACES: 30 });
    return new StableConfig({
      pool0Size: poolToken0Amount,
      pool1Size: poolToken1Amount,
      priceRatio,
      alpha,
      gamma1,
      gamma2,
      lpFee: liquidityProviderFee,
      shadeDaoFee: daoFee,
      minTradeSize0For1: minTradeSizeToken0For1,
      minTradeSize1For0: minTradeSizeToken1For0,
      priceImpactLimit,
    });
  }

  const swap: StableConfig = stableSwapConfig();
  return swap.swapToken0WithToken1(inputToken0Amount);
}

/**
* returns input of a simulated swap of token0 for token1 using the stableswap math
* inputs token amounts must be passsed in as human readable form
* */
function stableReverseSwapToken0for1({
  outputToken1Amount,
  poolToken0Amount,
  poolToken1Amount,
  priceRatio,
  alpha,
  gamma1,
  gamma2,
  liquidityProviderFee,
  daoFee,
  minTradeSizeToken0For1,
  minTradeSizeToken1For0,
  priceImpactLimit,
}:{
  outputToken1Amount:BigNumber,
  poolToken0Amount: BigNumber,
  poolToken1Amount: BigNumber,
  priceRatio: BigNumber,
  alpha: BigNumber,
  gamma1: BigNumber,
  gamma2: BigNumber,
  liquidityProviderFee: BigNumber,
  daoFee: BigNumber,
  minTradeSizeToken0For1: BigNumber,
  minTradeSizeToken1For0: BigNumber,
  priceImpactLimit: BigNumber,
}) {
  function stableSwapConfig(): StableConfig {
    BigNumber.set({ DECIMAL_PLACES: 30 });
    return new StableConfig({
      pool0Size: poolToken0Amount,
      pool1Size: poolToken1Amount,
      priceRatio,
      alpha,
      gamma1,
      gamma2,
      lpFee: liquidityProviderFee,
      shadeDaoFee: daoFee,
      minTradeSize0For1: minTradeSizeToken0For1,
      minTradeSize1For0: minTradeSizeToken1For0,
      priceImpactLimit,
    });
  }

  // add fees before the reverse swap
  const totalFee = liquidityProviderFee.plus(daoFee);
  const outputWithFeesAdded = outputToken1Amount.dividedBy(BigNumber(1).minus(totalFee));

  const swap: StableConfig = stableSwapConfig();
  return swap.simulateReverseToken0WithToken1Trade(outputWithFeesAdded).tradeInput;
}

/**
* returns output of a simulated swap of token1 for token0 using the stableswap math
* inputs token amounts must be passsed in as human readable form
* */
function stableSwapToken1for0({
  inputToken1Amount,
  poolToken0Amount,
  poolToken1Amount,
  priceRatio,
  alpha,
  gamma1,
  gamma2,
  liquidityProviderFee,
  daoFee,
  minTradeSizeToken0For1,
  minTradeSizeToken1For0,
  priceImpactLimit,
}:{
  inputToken1Amount:BigNumber,
  poolToken0Amount: BigNumber,
  poolToken1Amount: BigNumber,
  priceRatio: BigNumber,
  alpha: BigNumber,
  gamma1: BigNumber,
  gamma2: BigNumber,
  liquidityProviderFee: BigNumber,
  daoFee: BigNumber,
  minTradeSizeToken0For1: BigNumber,
  minTradeSizeToken1For0: BigNumber,
  priceImpactLimit: BigNumber,
}) {
  function stableSwapConfig(): StableConfig {
    BigNumber.set({ DECIMAL_PLACES: 30 });
    return new StableConfig({
      pool0Size: poolToken0Amount,
      pool1Size: poolToken1Amount,
      priceRatio,
      alpha,
      gamma1,
      gamma2,
      lpFee: liquidityProviderFee,
      shadeDaoFee: daoFee,
      minTradeSize0For1: minTradeSizeToken0For1,
      minTradeSize1For0: minTradeSizeToken1For0,
      priceImpactLimit,
    });
  }

  const swap: StableConfig = stableSwapConfig();
  return swap.swapToken1WithToken0(inputToken1Amount);
}

/**
* returns output of a simulated swap of token1 for token0 using the stableswap math
* inputs token amounts must be passsed in as human readable form
* */
function stableReverseSwapToken1for0({
  outputToken0Amount,
  poolToken0Amount,
  poolToken1Amount,
  priceRatio,
  alpha,
  gamma1,
  gamma2,
  liquidityProviderFee,
  daoFee,
  minTradeSizeToken0For1,
  minTradeSizeToken1For0,
  priceImpactLimit,
}:{
  outputToken0Amount:BigNumber,
  poolToken0Amount: BigNumber,
  poolToken1Amount: BigNumber,
  priceRatio: BigNumber,
  alpha: BigNumber,
  gamma1: BigNumber,
  gamma2: BigNumber,
  liquidityProviderFee: BigNumber,
  daoFee: BigNumber,
  minTradeSizeToken0For1: BigNumber,
  minTradeSizeToken1For0: BigNumber,
  priceImpactLimit: BigNumber,
}) {
  function stableSwapConfig(): StableConfig {
    BigNumber.set({ DECIMAL_PLACES: 30 });
    return new StableConfig({
      pool0Size: poolToken0Amount,
      pool1Size: poolToken1Amount,
      priceRatio,
      alpha,
      gamma1,
      gamma2,
      lpFee: liquidityProviderFee,
      shadeDaoFee: daoFee,
      minTradeSize0For1: minTradeSizeToken0For1,
      minTradeSize1For0: minTradeSizeToken1For0,
      priceImpactLimit,
    });
  }
  // add fees before the reverse swap
  const totalFee = liquidityProviderFee.plus(daoFee);
  const outputWithFeesAdded = outputToken0Amount.dividedBy(BigNumber(1).minus(totalFee));
  const swap: StableConfig = stableSwapConfig();
  return swap.simulateReverseToken1WithToken0Trade(outputWithFeesAdded).tradeInput;
}

/**
* returns price impact of a simulated swap of token0 for token1
* inputs token amounts must be passsed in as human readable form
* */
function stableSwapPriceImpactToken0For1({
  inputToken0Amount,
  poolToken0Amount,
  poolToken1Amount,
  priceRatio,
  alpha,
  gamma1,
  gamma2,
  liquidityProviderFee,
  daoFee,
  minTradeSizeToken0For1,
  minTradeSizeToken1For0,
  priceImpactLimit,
}:{
  inputToken0Amount:BigNumber,
  poolToken0Amount: BigNumber,
  poolToken1Amount: BigNumber,
  priceRatio: BigNumber,
  alpha: BigNumber,
  gamma1: BigNumber,
  gamma2: BigNumber,
  liquidityProviderFee: BigNumber,
  daoFee: BigNumber,
  minTradeSizeToken0For1: BigNumber,
  minTradeSizeToken1For0: BigNumber,
  priceImpactLimit: BigNumber,
}) {
  function stableSwapConfig(): StableConfig {
    BigNumber.set({ DECIMAL_PLACES: 30 });
    return new StableConfig({
      pool0Size: poolToken0Amount,
      pool1Size: poolToken1Amount,
      priceRatio,
      alpha,
      gamma1,
      gamma2,
      lpFee: liquidityProviderFee,
      shadeDaoFee: daoFee,
      minTradeSize0For1: minTradeSizeToken0For1,
      minTradeSize1For0: minTradeSizeToken1For0,
      priceImpactLimit,
    });
  }

  const swap: StableConfig = stableSwapConfig();
  const marketPrice = swap.priceToken1();
  const amountToken1Received = swap.swapToken0WithToken1(inputToken0Amount);
  // Add trade fees back into the received amount because price impact is
  // measured prior to fees being taken out of the trade
  const amountToken1ReceivedNoTradeFee = amountToken1Received.dividedBy(
    BigNumber(1).minus(liquidityProviderFee.plus(daoFee)),
  );
  const paidPrice = inputToken0Amount.dividedBy(amountToken1ReceivedNoTradeFee);
  return paidPrice.dividedBy(marketPrice).minus(1);
}

/**
* returns price impact of a simulated swap of token1 for token0
* inputs token amounts must be passsed in as human readable form
* */
function stableSwapPriceImpactToken1For0({
  inputToken1Amount,
  poolToken0Amount,
  poolToken1Amount,
  priceRatio,
  alpha,
  gamma1,
  gamma2,
  liquidityProviderFee,
  daoFee,
  minTradeSizeToken0For1,
  minTradeSizeToken1For0,
  priceImpactLimit,
}:{
  inputToken1Amount:BigNumber,
  poolToken0Amount: BigNumber,
  poolToken1Amount: BigNumber,
  priceRatio: BigNumber,
  alpha: BigNumber,
  gamma1: BigNumber,
  gamma2: BigNumber,
  liquidityProviderFee: BigNumber,
  daoFee: BigNumber,
  minTradeSizeToken0For1: BigNumber,
  minTradeSizeToken1For0: BigNumber,
  priceImpactLimit: BigNumber,
}) {
  function stableSwapConfig(): StableConfig {
    BigNumber.set({ DECIMAL_PLACES: 30 });
    return new StableConfig({
      pool0Size: poolToken0Amount,
      pool1Size: poolToken1Amount,
      priceRatio,
      alpha,
      gamma1,
      gamma2,
      lpFee: liquidityProviderFee,
      shadeDaoFee: daoFee,
      minTradeSize0For1: minTradeSizeToken0For1,
      minTradeSize1For0: minTradeSizeToken1For0,
      priceImpactLimit,
    });
  }

  const swap: StableConfig = stableSwapConfig();
  const marketPrice = swap.priceToken0();
  const amountToken0Received = swap.swapToken1WithToken0(inputToken1Amount);
  // Add trade fees back into the received amount because price impact is
  // measured prior to fees being taken out of the trade
  const amountToken0ReceivedNoTradeFee = amountToken0Received.dividedBy(
    BigNumber(1).minus(liquidityProviderFee.plus(daoFee)),
  );
  const paidPrice = inputToken1Amount.dividedBy(amountToken0ReceivedNoTradeFee);
  return paidPrice.dividedBy(marketPrice).minus(1);
}

export {
  constantProductSwapToken0for1,
  constantProductSwapToken1for0,
  stableSwapToken0for1,
  stableSwapToken1for0,
  constantProductPriceImpactToken0for1,
  constantProductPriceImpactToken1for0,
  stableSwapPriceImpactToken0For1,
  stableSwapPriceImpactToken1For0,
  constantProductReverseSwapToken0for1,
  constantProductReverseSwapToken1for0,
  stableReverseSwapToken0for1,
  stableReverseSwapToken1for0,
};
