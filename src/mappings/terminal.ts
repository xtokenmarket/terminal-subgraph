import { Address, BigInt, log, crypto, ByteArray } from "@graphprotocol/graph-ts"
import { 
  ADDRESS_ZERO,
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  TERMINAL_ADDRESS,
  ZERO_BI
} from "../helpers/general"
import {
  fetchOwner,
  fetchPeriodFinish,
  fetchPoolFee,
  fetchRewardsAreEscrowed,
  fetchStakedToken,
  fetchTicks,
  fetchTokenId,
  fetchTradeFee,
  fetchUniswapPool,
} from "../helpers/pool"
import { fetchVestingPeriod } from "../helpers/rewardEscrow"
import { fetchRewardEscrow } from "../helpers/terminal"
import { Pool, Terminal, Token, User } from "../types/schema"
import { Pool as PoolTemplate } from "../types/templates"
import { 
  DeployedIncentivizedPool,
  DeployedUniV3Pool,
  EthFeeWithdraw,
  TokenFeeWithdraw,
  InitiatedRewardsProgram
} from "../types/Terminal/Terminal"

export function handleDeployedIncentivizedPool(event: DeployedIncentivizedPool): void {
  let terminal = Terminal.load(TERMINAL_ADDRESS)
  if (!terminal) {
    terminal = new Terminal(TERMINAL_ADDRESS)
    terminal.poolCount = 0
  }

  terminal.poolCount = terminal.poolCount + 1

  let params = event.params

  let token0 = Token.load(params.token0.toHexString())

  if (token0 === null) {
    token0 = new Token(params.token0.toHexString())
    token0.symbol = fetchTokenSymbol(params.token0)
    token0.name = fetchTokenName(params.token0)
    let decimals = fetchTokenDecimals(params.token0)

    if (decimals === BigInt.fromI32(-1)) {
      log.debug("Terminal: decimals on token 0 was null", [])
      return
    }

    token0.decimals = decimals
  }

  let token1 = Token.load(params.token1.toHexString())

  if (token1 === null) {
    token1 = new Token(params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(params.token1)
    token1.name = fetchTokenName(params.token1)
    let decimals = fetchTokenDecimals(params.token1)

    if (decimals === BigInt.fromI32(-1)) {
      log.debug("Terminal: decimals on token 1 was null", [])
      return
    }

    token1.decimals = decimals
  }

  let poolAddress = params.clrInstance
  let pool: Pool = new Pool(poolAddress.toHexString())
  pool.token0 = token0.id
  pool.token1 = token1.id
  pool.lowerTick = params.lowerTick
  pool.upperTick = params.upperTick
  pool.fee = params.fee
  pool.manager = ADDRESS_ZERO

  let ownerAddress = fetchOwner(poolAddress)
  let owner = User.load(ownerAddress.toHexString())
  if (!owner) {
    owner = new User(ownerAddress.toHexString())
  }
  pool.owner = owner.id
  
  let stakedTokenAddress = fetchStakedToken(poolAddress)
  let stakedToken = Token.load(stakedTokenAddress.toHexString())

  if (stakedToken === null) {
    stakedToken = new Token(stakedTokenAddress.toHexString())
    stakedToken.symbol = fetchTokenSymbol(stakedTokenAddress)
    stakedToken.name = fetchTokenName(stakedTokenAddress)
    let decimals = fetchTokenDecimals(stakedTokenAddress)

    if (decimals === BigInt.fromI32(-1)) {
      log.debug("Terminal: decimals on staked tone was null", [])
      return
    }
    stakedToken.decimals = decimals
  }
  pool.stakedToken = stakedToken.id

  pool.ticks = fetchTicks(poolAddress)
  
  pool.rewardTokens = []
  pool.rewardAmounts = []
  pool.rewardDuration = BigInt.fromI32(0)
  pool.rewardsAreEscrowed = fetchRewardsAreEscrowed(poolAddress)

  pool.tokenId = fetchTokenId(poolAddress)
  pool.tradeFee = fetchTradeFee(poolAddress)
  pool.poolFee = fetchPoolFee(poolAddress)
  pool.uniswapPool = fetchUniswapPool(poolAddress).toHexString()
  pool.periodFinish = fetchPeriodFinish(poolAddress)

  let rewardEscrowAddress = fetchRewardEscrow()
  let vestingPeriod = fetchVestingPeriod(rewardEscrowAddress, poolAddress)
  pool.vestingPeriod = vestingPeriod

  PoolTemplate.create(poolAddress)

  owner.save()
  token0.save()
  token1.save()
  stakedToken.save()
  pool.save()
  terminal.save()
}

// export function handleDeployedUniV3Pool(event: DeployedUniV3Pool): void {

// }

let rewardsDuration: BigInt;
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
  rewardsDuration = params.rewardsDuration
  
  pool.rewardAmountsPerWeek = params.totalRewardAmounts.map<BigInt>((amount) => {
    let rewardAmountForWeek: BigInt = ZERO_BI
    if (rewardsDuration !== ZERO_BI) {
      rewardAmountForWeek = amount.times(BigInt.fromI32(604800)).div(rewardsDuration)
    }
    return rewardAmountForWeek
  })

  pool.save()
}

// export function handleTokenFeeWithdraw(event: TokenFeeWithdraw): void {

// }

// export function handleEthFeeWithdraw(event: EthFeeWithdraw): void {

// }
