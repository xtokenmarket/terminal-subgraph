import { Pool } from "./types/schema";
import { Deposit, FeeCollected, ManagerSet, Withdraw } from "./types/templates/Pool/Pool";

export function handleManagerSet(event: ManagerSet): void {
  let pool = Pool.load(event.transaction.from.toHexString())

  if (!pool) {
    return;
  }

  pool.manager = event.params.manager;

  pool.save();
}

export function handleDeposit(event: Deposit): void {

}

export function handleFeeCollected(event: FeeCollected): void {

}

export function handleWithdraw(event: Withdraw): void {
  
}
