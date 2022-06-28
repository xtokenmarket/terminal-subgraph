import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { 
  calculatePoolPriceWithDecimals,
  fetchBufferTokenBalance,
  fetchStakedTokenBalance,
} from "../helpers/pool";
import { Pool, Uniswap } from "../types/schema";
import { Burn, Collect, Swap } from "../types/templates/UniswapV3Pool/UniswapV3Pool";

export function handleSwap(event: Swap): void {
  let uniswap = Uniswap.load(event.address.toHexString())
  if (!uniswap) {
    return
  }

  if (uniswap.pool) {
    let pool = Pool.load(uniswap.pool)
    if (pool) {
      pool.bufferTokenBalance = fetchBufferTokenBalance(Address.fromString(uniswap.pool))
      pool.stakedTokenBalance = fetchStakedTokenBalance(Address.fromString(uniswap.pool))
      if (pool.uniswapPool) {
        pool.price = calculatePoolPriceWithDecimals(Address.fromString(pool.uniswapPool))
      }
      pool.save()
    }
  }
}

export function handleBurn(event: Burn): void {
  let uniswap = Uniswap.load(event.address.toHexString())
  if (!uniswap) {
    return
  }

  if (uniswap.pool) {
    let pool = Pool.load(uniswap.pool)
    if (pool) {
      if (pool.uniswapPool) {
        pool.price = calculatePoolPriceWithDecimals(Address.fromString(pool.uniswapPool))
        pool.save()
      }
    }
  }
}

export function handleCollect(event: Collect): void {
  let uniswap = Uniswap.load(event.address.toHexString())
  if (!uniswap) {
    return
  }

  if (uniswap.pool) {
    let pool = Pool.load(uniswap.pool)
    if (pool) {
      if (pool.uniswapPool) {
        pool.price = calculatePoolPriceWithDecimals(Address.fromString(pool.uniswapPool))
        pool.save()
      }
    }
  }
}