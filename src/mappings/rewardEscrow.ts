import { log } from "@graphprotocol/graph-ts";
import { 
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  MINUS_ONE_BI,
  ZERO_BI
} from "../helpers/general";
import { Vested, VestingPeriodSet } from "../types/RewardEscrow/RewardEscrow";
import { Pool, Token, User, Vest } from "../types/schema";

export function handleVested(event: Vested): void {
  let id = event.transaction.hash.toHexString() + event.params.token.toHexString()
  let vest = Vest.load(id)
  if (!vest) {
    vest = new Vest(id)
  }

  let params = event.params

  let beneficiary = User.load(params.beneficiary.toHexString())
  if (!beneficiary) {
    beneficiary = new User(params.beneficiary.toHexString())
    beneficiary.save()
  }
  vest.beneficiary = beneficiary.id

  let pool = Pool.load(params.pool.toHexString())
  log.warning("{}", [params.pool.toHexString()])
  if (!pool) {
    pool = new Pool(params.pool.toHexString())
    pool.save()
  }
  vest.pool = pool.id
  
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
  vest.token = token.id

  vest.timestamp = params.time
  vest.value = params.value
  vest.period = ZERO_BI
  vest.txHash = event.transaction.hash.toHexString()

  vest.save()
}

export function handleVestingPeriodSet(event: VestingPeriodSet): void {
  let params = event.params
  let pool = Pool.load(params.pool.toHexString())
  if (!pool) {
    pool = new Pool(params.pool.toHexString())
  }

  pool.vestingPeriod = params.vestingPeriod
  pool.save()
}
