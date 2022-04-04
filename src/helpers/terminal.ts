import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Terminal } from "../types/Terminal/Terminal"
import { ADDRESS_ZERO, TERMINAL_ADDRESS } from "./general"

export function fetchRewardEscrow(): Address {
  let contract = Terminal.bind(Address.fromString(TERMINAL_ADDRESS))
  let rewardEscrowAddress = Address.fromString(ADDRESS_ZERO)
  let rewardEscrowAddressResult = contract.try_rewardEscrow()
  if (!rewardEscrowAddressResult.reverted) {
    rewardEscrowAddress = rewardEscrowAddressResult.value
  }
  return rewardEscrowAddress
}
