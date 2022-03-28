import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { ADDRESS_ZERO, fetchTokenDecimals, fetchTokenName, fetchTokenSymbol, TERMINAL_ADDRESS } from "./helpers"
import { Pool, Terminal, Token } from "./types/schema"
import { Pool as PoolTemplate } from "./types/templates"
import { InitializeRewardCall } from "./types/templates/Pool/Pool"
import { DeployedIncentivizedPool, DeployedUniV3Pool, EthFeeWithdraw, TokenFeeWithdraw } from "./types/Terminal/Terminal"

export function handleDeployedIncentivizedPool(event: DeployedIncentivizedPool): void {
  let terminal = Terminal.load(TERMINAL_ADDRESS)
  if (!terminal) {
    terminal = new Terminal(TERMINAL_ADDRESS)
    terminal.poolCount = 0
  }

  terminal.poolCount = terminal.poolCount + 1

  let token0 = Token.load(event.params.token0.toHexString())

  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.symbol = fetchTokenSymbol(event.params.token0)
    token0.name = fetchTokenName(event.params.token0)
    let decimals = fetchTokenDecimals(event.params.token0)

    log.debug("{} {} {}", [token0.symbol, token0.name, decimals.toString()])

    if (decimals === BigInt.fromI32(-1)) {
      log.debug("Terminal: decimals on token 0 was null", [])
      return
    }

    token0.decimals = decimals
  }

  let token1 = Token.load(event.params.token1.toHexString())

  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    let decimals = fetchTokenDecimals(event.params.token1)

    log.debug("{} {} {}", [token1.symbol, token1.name, decimals.toString()])

    if (decimals === BigInt.fromI32(-1)) {
      log.debug("Terminal: decimals on token 1 was null", [])
      return
    }

    token1.decimals = decimals
  }

  let pool: Pool = new Pool(event.params.clrInstance.toHexString())
  pool.token0 = token0.id
  pool.token1 = token1.id
  pool.lowerTick = event.params.lowerTick
  pool.upperTick = event.params.upperTick
  pool.fee = event.params.fee
  pool.manager = Address.fromString(ADDRESS_ZERO)

  PoolTemplate.create(event.params.clrInstance)

  token0.save()
  token1.save()
  pool.save()
  terminal.save()
}

// export function handleDeployedUniV3Pool(event: DeployedUniV3Pool): void {

// }

// export function handleInitiatedRewardsProgram(event: InitializeRewardCall): void {

// }

// export function handleTokenFeeWithdraw(event: TokenFeeWithdraw): void {

// }

// export function handleEthFeeWithdraw(event: EthFeeWithdraw): void {

// }
