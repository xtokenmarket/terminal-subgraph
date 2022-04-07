import { Address, BigInt } from "@graphprotocol/graph-ts";
import { RewardEscrow } from "../types/RewardEscrow/RewardEscrow";
import { ZERO_BI } from "./general";

export function fetchVestingPeriod(rewardEscrowAddress: Address, poolAddress: Address): BigInt {
  let contract = RewardEscrow.bind(rewardEscrowAddress)
  let vestingPeriod = ZERO_BI
  let vestingPeriodResult = contract.try_clrPoolVestingPeriod(poolAddress)
  if (!vestingPeriodResult.reverted) {
    vestingPeriod = vestingPeriodResult.value
  }
  return vestingPeriod
}