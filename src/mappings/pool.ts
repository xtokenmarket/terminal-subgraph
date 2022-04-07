import { Pool, Token, User } from "../types/schema"
import { 
  Deposit as DepositEvent,
  FeeCollected,
  ManagerSet,
  Withdraw as WithdrawEvent,
  OwnershipTransferred,
  RewardClaimed,
  RewardAdded,
  Staked,
  Withdrawn,
  Reinvest,
  RewardsDurationUpdated,
  Transfer
} from "../types/templates/Pool/Pool"
import { Deposit, Withdrawal, RewardClaim } from "../types/schema";
import {
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  MINUS_ONE_BI
} from "../helpers/general";
import { log } from "@graphprotocol/graph-ts";
import { fetchBufferTokenBalance, fetchPeriodFinish, fetchStakedTokenBalance } from "../helpers/pool";

export function handleManagerSet(event: ManagerSet): void {
  let pool = Pool.load(event.address.toHexString())

  if (!pool) {
    pool = new Pool(event.address.toHexString());
    pool.save()
  }

  let manager = User.load(event.params.manager.toHexString())
  if (!manager) {
    manager = new User(event.params.manager.toHexString())
  }

  pool.manager = manager.id

  manager.save()
  pool.save()
}

export function handleDeposit(event: DepositEvent): void {
  let deposit = Deposit.load(event.transaction.hash.toHexString())
  if (!deposit) {
    deposit = new Deposit(event.transaction.hash.toHexString())
  }

  let params = event.params

  let user = User.load(params.user.toHexString())
  if (!user) {
    user = new User(params.user.toHexString())
    user.save()
  }
  deposit.user = user.id

  // Get the pool info using the interacted contract address
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
    pool.save()
  }
  deposit.pool = pool.id

  deposit.amount0 = params.amount0
  deposit.amount1 = params.amount1
  deposit.timestamp = event.block.timestamp

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()

  deposit.save()
}

export function handleFeeCollected(event: FeeCollected): void {
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
    pool.save()
  }

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)

  pool.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let withdrawal = Withdrawal.load(event.transaction.hash.toHexString())
  if (!withdrawal) {
    withdrawal = new Withdrawal(event.transaction.hash.toHexString())
  }

  let params = event.params

  let user = User.load(params.user.toHexString())
  if (!user) {
    user = new User(params.user.toHexString())
    user.save()
  }
  withdrawal.user = user.id

  // Get the pool info using the interacted contract address
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
    pool.save()
  }
  withdrawal.pool = pool.id

  withdrawal.amount0 = params.amount0
  withdrawal.amount1 = params.amount1
  withdrawal.timestamp = event.block.timestamp

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()

  withdrawal.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let pool = Pool.load(event.transaction.from.toHexString())
  
  if (!pool) {
    return
  }
  
  let newOwner = User.load(event.params.newOwner.toHexString())

  if (!newOwner) {
    newOwner = new User(event.params.newOwner.toHexString())
  }

  newOwner.save()
  pool.owner = newOwner.id

  pool.save()
}

export function handleRewardClaimed(event: RewardClaimed): void {
  let rewardClaim = RewardClaim.load(event.transaction.hash.toHexString())
  if (!rewardClaim) {
    rewardClaim = new RewardClaim(event.transaction.hash.toHexString())
  }

  let params = event.params

  let user = User.load(params.user.toHexString())
  if (!user) {
    user = new User(params.user.toHexString())
    user.save()
  }
  rewardClaim.user = user.id

  // Get the pool info using the interacted contract address
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
    pool.save()
  }
  rewardClaim.pool = pool.id
  rewardClaim.amount = params.rewardAmount
  
  let token = Token.load(params.token.toHexString())
  if (!token) {
    token = new Token(params.token.toHexString())
    token.symbol = fetchTokenSymbol(params.token)
    token.name = fetchTokenName(params.token)
    let decimals = fetchTokenDecimals(params.token)

    if (decimals === MINUS_ONE_BI) {
      log.debug("Terminal: decimals on token {} was null", [params.token.toHexString()])
      return
    }
    token.decimals = decimals
    token.save()
  }
  rewardClaim.token = token.id
  rewardClaim.timestamp = event.block.timestamp

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()

  rewardClaim.save()
}

export function handleRewardAdded(event: RewardAdded): void {
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
  }

  pool.periodFinish = fetchPeriodFinish(event.address)
  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  
  pool.save()
}

export function handleStaked(event: Staked): void {
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
  }

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()
}

export function handleWithdrawn(event: Withdrawn): void {
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
  }

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()
}

export function handleReinvest(event: Reinvest): void {
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
  }

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()
}

export function handleRewardsDurationUpdated(event: RewardsDurationUpdated): void {
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
  }

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()
}

export function handleTransfer(event: Transfer): void {
  let pool = Pool.load(event.address.toHexString())
  if (!pool) {
    pool = new Pool(event.address.toHexString())
  }

  pool.bufferTokenBalance = fetchBufferTokenBalance(event.address)
  pool.stakedTokenBalance = fetchStakedTokenBalance(event.address)
  pool.save()
}
