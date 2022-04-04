import { Pool, User } from "../types/schema"
import { 
  Deposit,
  FeeCollected,
  ManagerSet,
  Withdraw,
  OwnershipTransferred
} from "../types/templates/Pool/Pool"

export function handleManagerSet(event: ManagerSet): void {
  let pool = Pool.load(event.transaction.from.toHexString())

  if (!pool) {
    return;
  }

  let manager = User.load(event.params.manager.toHexString())
  if (!manager) {
    manager = new User(event.params.manager.toHexString())
  }

  pool.manager = manager.id

  manager.save()
  pool.save()
}

export function handleDeposit(event: Deposit): void {

}

export function handleFeeCollected(event: FeeCollected): void {

}

export function handleWithdraw(event: Withdraw): void {
  
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let pool = Pool.load(event.transaction.from.toHexString())

  if (pool) {
    let newOwner = User.load(event.params.newOwner.toHexString())

    if (!newOwner) {
      newOwner = new User(event.params.newOwner.toHexString())
    }

    newOwner.save()
    pool.owner = newOwner.id

    pool.save()
  }
}
