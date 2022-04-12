import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Terminal } from "../types/Terminal/Terminal"
import { ADDRESS_ZERO, ZERO_BI } from "./general"

export function fetchRewardEscrow(address: Address): Address {
  let contract = Terminal.bind(address)
  let rewardEscrowAddress = Address.fromString(ADDRESS_ZERO)
  let rewardEscrowAddressResult = contract.try_rewardEscrow()
  if (!rewardEscrowAddressResult.reverted) {
    rewardEscrowAddress = rewardEscrowAddressResult.value
  }
  return rewardEscrowAddress
}

export function fetchRewardFee(address: Address): BigInt {
  let contract = Terminal.bind(address)
  let rewardFee = ZERO_BI
  let rewardFeeResult = contract.try_rewardFee()
  if (!rewardFeeResult.reverted) {
    rewardFee = rewardFeeResult.value
  }
  return rewardFee
}
