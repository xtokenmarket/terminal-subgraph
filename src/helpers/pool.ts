import {Address, BigInt, log} from "@graphprotocol/graph-ts";
import { UniswapLibrary } from "../types/templates/Pool/UniswapLibrary";
import { Pool } from "../types/Terminal/Pool";
import { Pool as EPool } from "../types/schema";
import {
  ADDRESS_ZERO,
  fetchTokenBalance,
  fetchTokenDecimals,
  MINUS_ONE_BI,
  UNISWAP_LIBRARY_ADDRESS,
  ZERO_BI
} from "./general";

export function fetchStakedToken(poolAddress: Address): Address {
  let contract = Pool.bind(poolAddress)
  let stakedToken = Address.fromString(ADDRESS_ZERO)
  let stakedTokenResult = contract.try_stakedToken()
  if (!stakedTokenResult.reverted) {
    stakedToken = stakedTokenResult.value
  }
  return stakedToken
}

export function fetchTicks(poolAddress: Address): Array<BigInt> {
  let contract = Pool.bind(poolAddress)
  let ticks = new Array<BigInt>(2)
  ticks.fill(ZERO_BI)
  let ticksResult = contract.try_getTicks()
  if (!ticksResult.reverted) {
    ticks[0] = BigInt.fromI32(ticksResult.value.value0)
    ticks[1] = BigInt.fromI32(ticksResult.value.value1)
  }
  return ticks
}

export function fetchOwner(poolAddress: Address): Address {
  let contract = Pool.bind(poolAddress)
  let owner = Address.fromString(ADDRESS_ZERO)
  let ownerResult = contract.try_owner()
  if (!ownerResult.reverted) {
    owner = ownerResult.value
  }
  return owner
}

export function fetchRewardTokens(poolAddress: Address): Array<Address> {
  let contract = Pool.bind(poolAddress)
  let rewardTokens: Array<Address> = new Array()
  let rewardTokensResult = contract.try_getRewardTokens()
  if (!rewardTokensResult.reverted) {
    rewardTokens = rewardTokensResult.value
  }
  return rewardTokens
}

export function fetchRewardInfo(poolAddress: Address, tokenAddress: Address): BigInt {
  let contract = Pool.bind(poolAddress)
  let rewardAmount = ZERO_BI
  let rewardAmountResult = contract.try_rewardInfo(tokenAddress)
  if (!rewardAmountResult.reverted) {
    rewardAmount = rewardAmountResult.value.value2
  }
  return rewardAmount
}

export function fetchRewardsAreEscrowed(poolAddress: Address): boolean {
  let contract = Pool.bind(poolAddress)
  let rewardsAreEscrowed = false
  let escrowedResult = contract.try_rewardsAreEscrowed()
  if (!escrowedResult.reverted) {
    rewardsAreEscrowed = escrowedResult.value
  }
  return rewardsAreEscrowed
}

export function fetchTokenId(poolAddress: Address): BigInt {
  let contract = Pool.bind(poolAddress)
  let tokenId = ZERO_BI
  let tokenIdResult = contract.try_tokenId()
  if (!tokenIdResult.reverted) {
    tokenId = tokenIdResult.value
  }
  return tokenId
}

export function fetchTradeFee(poolAddress: Address): BigInt {
  let contract = Pool.bind(poolAddress)
  let tradeFee = ZERO_BI
  let tradeFeeResult = contract.try_tradeFee()
  if (!tradeFeeResult.reverted) {
    tradeFee = tradeFeeResult.value
  }
  return tradeFee
}

export function fetchPoolFee(poolAddress: Address): i32 {
  let contract = Pool.bind(poolAddress)
  let poolFee = 0
  let poolFeeResult = contract.try_poolFee()
  if (!poolFeeResult.reverted) {
    poolFee = poolFeeResult.value
  }
  return poolFee
}

export function fetchUniswapPool(poolAddress: Address): Address {
  let contract = Pool.bind(poolAddress)
  let uniswapPool = Address.fromString(ADDRESS_ZERO)
  let uniswapPoolResult = contract.try_uniswapPool()
  if (!uniswapPoolResult.reverted) {
    uniswapPool = uniswapPoolResult.value
  }
  return uniswapPool
}

export function fetchPeriodFinish(poolAddress: Address): BigInt {
  let contract = Pool.bind(poolAddress)
  let periodFinish = ZERO_BI
  let periodFinishResult = contract.try_periodFinish()
  if (!periodFinishResult.reverted) {
    periodFinish = periodFinishResult.value
  }
  return periodFinish
}

export function fetchBufferTokenBalance(poolAddress: Address): Array<BigInt> {
  let bufferTokenBalance: Array<BigInt> = [ZERO_BI, ZERO_BI]
  let pool = EPool.load(poolAddress.toHexString())
  if (!pool) {
    log.debug("Terminal: pool {} not found", [poolAddress.toHexString()])
    return bufferTokenBalance
  }

  let token0Address = Address.fromString(pool.token0)
  let token1Address = Address.fromString(pool.token1)

  let token0Decimals = fetchTokenDecimals(token0Address)
  if (token0Decimals === MINUS_ONE_BI) {
    log.debug("Terminal: decimals on token {} was null", [token0Address.toHexString()])
    return bufferTokenBalance
  }
  let token1Decimals = fetchTokenDecimals(token1Address)
  if (token0Decimals === MINUS_ONE_BI) {
    log.debug("Terminal: decimals on token {} was null", [token1Address.toHexString()])
    return bufferTokenBalance
  }

  let token0Balance = fetchTokenBalance(token0Address, poolAddress)
  let token1Balance = fetchTokenBalance(token1Address, poolAddress)

  // convert buffer token balances to Wei
  let ETH_DECIMALS = BigInt.fromI32(18)
  let t0DecimalMultiplier = BigInt.fromI32(10).pow(ETH_DECIMALS.minus(token0Decimals) as u8);
  let t1DecimalMultiplier = BigInt.fromI32(10).pow(ETH_DECIMALS.minus(token1Decimals) as u8);
  if(token0Decimals.lt(ETH_DECIMALS)) {
    token0Balance = token0Balance.times(t0DecimalMultiplier);
  }
  if(token1Decimals.lt(ETH_DECIMALS)) {
    token1Balance = token1Balance.times(t1DecimalMultiplier);
  }

  return [token0Balance, token1Balance]
}

export function fetchStakedTokenBalance(poolAddress: Address): Array<BigInt> {
  let contract = Pool.bind(poolAddress)
  let stakedTokenBalance: Array<BigInt> = new Array()
  let stakedTokenBalanceResult = contract.try_getStakedTokenBalance()
  if (!stakedTokenBalanceResult.reverted) {
    stakedTokenBalance.push(stakedTokenBalanceResult.value.value0)
    stakedTokenBalance.push(stakedTokenBalanceResult.value.value1)
  } else {
    stakedTokenBalance.push(ZERO_BI)
    stakedTokenBalance.push(ZERO_BI)
  }
  return stakedTokenBalance
}

export function fetchPoolPrice(poolAddress: Address): BigInt {
  let contract = UniswapLibrary.bind(Address.fromString(UNISWAP_LIBRARY_ADDRESS))
  let price = ZERO_BI
  let priceResult = contract.try_getPoolPrice(poolAddress)
  if (!priceResult.reverted) {
    price = priceResult.value;
  }
  return price
}

/**
 * Calculate the uni v3 pool price with 18 decimals
 * @param poolAddress 
 * @returns 
 */
export function calculatePoolPriceWithDecimals(poolAddress: Address): BigInt {
  let price = fetchPoolPrice(poolAddress);
  price = price.equals(ZERO_BI) ? price : 
          price.pow(2).times(BigInt.fromI32(10).pow(18)).rightShift(192)
  return price;
}