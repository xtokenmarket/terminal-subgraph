import { Address, BigInt, log, crypto, ByteArray } from "@graphprotocol/graph-ts"
import { 
  ADDRESS_ZERO,
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  TERMINAL_ADDRESS
} from "./helpers"
import { Pool, Terminal, Token } from "./types/schema"
import { Pool as PoolTemplate } from "./types/templates"
import { 
  DeployedIncentivizedPool,
  DeployedUniV3Pool,
  EthFeeWithdraw,
  TokenFeeWithdraw,
  InitiatedRewardsProgram
} from "./types/Terminal/Terminal"

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
  
  pool.rewardTokens = []
  pool.rewardAmounts = []
  pool.rewardDuration = BigInt.fromI32(0)

  PoolTemplate.create(event.params.clrInstance)

  token0.save()
  token1.save()
  pool.save()
  terminal.save()
}

// export function handleDeployedUniV3Pool(event: DeployedUniV3Pool): void {

// }

export function handleInitiatedRewardsProgram(event: InitiatedRewardsProgram): void {
  let params = event.params
  let pool = Pool.load(params.clrInstance.toHexString())
  
  if (!pool) {
    pool = new Pool(params.clrInstance.toHexString())
  }

  params.rewardTokens.forEach(id => {
    let token = Token.load(id.toHexString())
    if (!token) {
      token = new Token(id.toHexString())
      token.symbol = fetchTokenSymbol(id)
      token.name = fetchTokenName(id)
      let decimals = fetchTokenDecimals(id)

      if (decimals === BigInt.fromI32(-1)) {
        log.debug("Terminal: decimals on token {} was null", [id.toHexString()])
        return
      }
      token.decimals = decimals
    }

    token.save()
  })

  pool.rewardTokens = params.rewardTokens.map<string>(token => token.toHexString())
  pool.rewardAmounts = params.totalRewardAmounts
  pool.rewardDuration = params.rewardsDuration

  pool.save()
}

// export function handleTokenFeeWithdraw(event: TokenFeeWithdraw): void {

// }

// export function handleEthFeeWithdraw(event: EthFeeWithdraw): void {

// }
