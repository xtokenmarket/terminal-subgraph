import { Address, log } from "@graphprotocol/graph-ts";
import { fetchBufferTokenBalance, fetchStakedTokenBalance } from "../helpers/pool";
import { Pool, Uniswap } from "../types/schema";
import { Swap } from "../types/templates/UniswapV3Pool/UniswapV3Pool";

export function handleSwap(event: Swap): void {
  let uniswap = Uniswap.load(event.address.toHexString())
  log.warning("{}", [event.address.toHexString()])
  if (!uniswap) {
    return
  }

  if (uniswap.pool) {
    let pool = Pool.load(uniswap.pool)
    if (pool) {
      pool.bufferTokenBalance = fetchBufferTokenBalance(Address.fromString(uniswap.pool))
      pool.stakedTokenBalance = fetchStakedTokenBalance(Address.fromString(uniswap.pool))
      pool.save()
    }
  }
}