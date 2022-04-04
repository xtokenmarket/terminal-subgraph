import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Pool } from "../types/Terminal/Pool";
import { ADDRESS_ZERO, ZERO_BI } from "./general";

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
