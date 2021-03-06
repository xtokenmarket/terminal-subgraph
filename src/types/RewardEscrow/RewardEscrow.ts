// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RewardContractAdded extends ethereum.Event {
  get params(): RewardContractAdded__Params {
    return new RewardContractAdded__Params(this);
  }
}

export class RewardContractAdded__Params {
  _event: RewardContractAdded;

  constructor(event: RewardContractAdded) {
    this._event = event;
  }

  get rewardContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RewardContractRemoved extends ethereum.Event {
  get params(): RewardContractRemoved__Params {
    return new RewardContractRemoved__Params(this);
  }
}

export class RewardContractRemoved__Params {
  _event: RewardContractRemoved;

  constructor(event: RewardContractRemoved) {
    this._event = event;
  }

  get rewardContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Vested extends ethereum.Event {
  get params(): Vested__Params {
    return new Vested__Params(this);
  }
}

export class Vested__Params {
  _event: Vested;

  constructor(event: Vested) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class VestingEntryCreated extends ethereum.Event {
  get params(): VestingEntryCreated__Params {
    return new VestingEntryCreated__Params(this);
  }
}

export class VestingEntryCreated__Params {
  _event: VestingEntryCreated;

  constructor(event: VestingEntryCreated) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class VestingPeriodSet extends ethereum.Event {
  get params(): VestingPeriodSet__Params {
    return new VestingPeriodSet__Params(this);
  }
}

export class VestingPeriodSet__Params {
  _event: VestingPeriodSet;

  constructor(event: VestingPeriodSet) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get vestingPeriod(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RewardEscrow extends ethereum.SmartContract {
  static bind(address: Address): RewardEscrow {
    return new RewardEscrow("RewardEscrow", address);
  }

  MAX_VESTING_ENTRIES(): BigInt {
    let result = super.call(
      "MAX_VESTING_ENTRIES",
      "MAX_VESTING_ENTRIES():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_VESTING_ENTRIES(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_VESTING_ENTRIES",
      "MAX_VESTING_ENTRIES():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(token: Address, account: Address): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,address):(uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(token: Address, account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,address):(uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkAccountSchedule(
    pool: Address,
    token: Address,
    account: Address
  ): Array<BigInt> {
    let result = super.call(
      "checkAccountSchedule",
      "checkAccountSchedule(address,address,address):(uint256[520])",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_checkAccountSchedule(
    pool: Address,
    token: Address,
    account: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "checkAccountSchedule",
      "checkAccountSchedule(address,address,address):(uint256[520])",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  clrPoolVestingPeriod(param0: Address): BigInt {
    let result = super.call(
      "clrPoolVestingPeriod",
      "clrPoolVestingPeriod(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_clrPoolVestingPeriod(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "clrPoolVestingPeriod",
      "clrPoolVestingPeriod(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNextVestingEntry(
    pool: Address,
    token: Address,
    account: Address
  ): Array<BigInt> {
    let result = super.call(
      "getNextVestingEntry",
      "getNextVestingEntry(address,address,address):(uint256[2])",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getNextVestingEntry(
    pool: Address,
    token: Address,
    account: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getNextVestingEntry",
      "getNextVestingEntry(address,address,address):(uint256[2])",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getNextVestingIndex(pool: Address, token: Address, account: Address): BigInt {
    let result = super.call(
      "getNextVestingIndex",
      "getNextVestingIndex(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigInt();
  }

  try_getNextVestingIndex(
    pool: Address,
    token: Address,
    account: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNextVestingIndex",
      "getNextVestingIndex(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNextVestingQuantity(
    pool: Address,
    token: Address,
    account: Address
  ): BigInt {
    let result = super.call(
      "getNextVestingQuantity",
      "getNextVestingQuantity(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigInt();
  }

  try_getNextVestingQuantity(
    pool: Address,
    token: Address,
    account: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNextVestingQuantity",
      "getNextVestingQuantity(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNextVestingTime(pool: Address, token: Address, account: Address): BigInt {
    let result = super.call(
      "getNextVestingTime",
      "getNextVestingTime(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigInt();
  }

  try_getNextVestingTime(
    pool: Address,
    token: Address,
    account: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNextVestingTime",
      "getNextVestingTime(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVestingQuantity(
    pool: Address,
    token: Address,
    account: Address,
    index: BigInt
  ): BigInt {
    let result = super.call(
      "getVestingQuantity",
      "getVestingQuantity(address,address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_getVestingQuantity(
    pool: Address,
    token: Address,
    account: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVestingQuantity",
      "getVestingQuantity(address,address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVestingScheduleEntry(
    pool: Address,
    token: Address,
    account: Address,
    index: BigInt
  ): Array<BigInt> {
    let result = super.call(
      "getVestingScheduleEntry",
      "getVestingScheduleEntry(address,address,address,uint256):(uint256[2])",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getVestingScheduleEntry(
    pool: Address,
    token: Address,
    account: Address,
    index: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getVestingScheduleEntry",
      "getVestingScheduleEntry(address,address,address,uint256):(uint256[2])",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getVestingTime(
    pool: Address,
    token: Address,
    account: Address,
    index: BigInt
  ): BigInt {
    let result = super.call(
      "getVestingTime",
      "getVestingTime(address,address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_getVestingTime(
    pool: Address,
    token: Address,
    account: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVestingTime",
      "getVestingTime(address,address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isRewardContract(param0: Address): boolean {
    let result = super.call(
      "isRewardContract",
      "isRewardContract(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_isRewardContract(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isRewardContract",
      "isRewardContract(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  numVestingEntries(pool: Address, token: Address, account: Address): BigInt {
    let result = super.call(
      "numVestingEntries",
      "numVestingEntries(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigInt();
  }

  try_numVestingEntries(
    pool: Address,
    token: Address,
    account: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numVestingEntries",
      "numVestingEntries(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalEscrowedAccountBalance(param0: Address, param1: Address): BigInt {
    let result = super.call(
      "totalEscrowedAccountBalance",
      "totalEscrowedAccountBalance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_totalEscrowedAccountBalance(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalEscrowedAccountBalance",
      "totalEscrowedAccountBalance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalEscrowedBalance(param0: Address): BigInt {
    let result = super.call(
      "totalEscrowedBalance",
      "totalEscrowedBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_totalEscrowedBalance(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalEscrowedBalance",
      "totalEscrowedBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(token: Address): BigInt {
    let result = super.call("totalSupply", "totalSupply(address):(uint256)", [
      ethereum.Value.fromAddress(token)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(address):(uint256)",
      [ethereum.Value.fromAddress(token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalVestedAccountBalance(param0: Address, param1: Address): BigInt {
    let result = super.call(
      "totalVestedAccountBalance",
      "totalVestedAccountBalance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_totalVestedAccountBalance(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalVestedAccountBalance",
      "totalVestedAccountBalance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vestingSchedules(
    param0: Address,
    param1: Address,
    param2: Address,
    param3: BigInt,
    param4: BigInt
  ): BigInt {
    let result = super.call(
      "vestingSchedules",
      "vestingSchedules(address,address,address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromAddress(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromUnsignedBigInt(param4)
      ]
    );

    return result[0].toBigInt();
  }

  try_vestingSchedules(
    param0: Address,
    param1: Address,
    param2: Address,
    param3: BigInt,
    param4: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "vestingSchedules",
      "vestingSchedules(address,address,address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromAddress(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromUnsignedBigInt(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddRewardsContractCall extends ethereum.Call {
  get inputs(): AddRewardsContractCall__Inputs {
    return new AddRewardsContractCall__Inputs(this);
  }

  get outputs(): AddRewardsContractCall__Outputs {
    return new AddRewardsContractCall__Outputs(this);
  }
}

export class AddRewardsContractCall__Inputs {
  _call: AddRewardsContractCall;

  constructor(call: AddRewardsContractCall) {
    this._call = call;
  }

  get _rewardContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddRewardsContractCall__Outputs {
  _call: AddRewardsContractCall;

  constructor(call: AddRewardsContractCall) {
    this._call = call;
  }
}

export class AppendVestingEntryCall extends ethereum.Call {
  get inputs(): AppendVestingEntryCall__Inputs {
    return new AppendVestingEntryCall__Inputs(this);
  }

  get outputs(): AppendVestingEntryCall__Outputs {
    return new AppendVestingEntryCall__Outputs(this);
  }
}

export class AppendVestingEntryCall__Inputs {
  _call: AppendVestingEntryCall;

  constructor(call: AppendVestingEntryCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get pool(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get quantity(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AppendVestingEntryCall__Outputs {
  _call: AppendVestingEntryCall;

  constructor(call: AppendVestingEntryCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RemoveRewardsContractCall extends ethereum.Call {
  get inputs(): RemoveRewardsContractCall__Inputs {
    return new RemoveRewardsContractCall__Inputs(this);
  }

  get outputs(): RemoveRewardsContractCall__Outputs {
    return new RemoveRewardsContractCall__Outputs(this);
  }
}

export class RemoveRewardsContractCall__Inputs {
  _call: RemoveRewardsContractCall;

  constructor(call: RemoveRewardsContractCall) {
    this._call = call;
  }

  get _rewardContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveRewardsContractCall__Outputs {
  _call: RemoveRewardsContractCall;

  constructor(call: RemoveRewardsContractCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCLRPoolVestingPeriodCall extends ethereum.Call {
  get inputs(): SetCLRPoolVestingPeriodCall__Inputs {
    return new SetCLRPoolVestingPeriodCall__Inputs(this);
  }

  get outputs(): SetCLRPoolVestingPeriodCall__Outputs {
    return new SetCLRPoolVestingPeriodCall__Outputs(this);
  }
}

export class SetCLRPoolVestingPeriodCall__Inputs {
  _call: SetCLRPoolVestingPeriodCall;

  constructor(call: SetCLRPoolVestingPeriodCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get vestingPeriod(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCLRPoolVestingPeriodCall__Outputs {
  _call: SetCLRPoolVestingPeriodCall;

  constructor(call: SetCLRPoolVestingPeriodCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class VestCall extends ethereum.Call {
  get inputs(): VestCall__Inputs {
    return new VestCall__Inputs(this);
  }

  get outputs(): VestCall__Outputs {
    return new VestCall__Outputs(this);
  }
}

export class VestCall__Inputs {
  _call: VestCall;

  constructor(call: VestCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class VestCall__Outputs {
  _call: VestCall;

  constructor(call: VestCall) {
    this._call = call;
  }
}

export class VestAllCall extends ethereum.Call {
  get inputs(): VestAllCall__Inputs {
    return new VestAllCall__Inputs(this);
  }

  get outputs(): VestAllCall__Outputs {
    return new VestAllCall__Outputs(this);
  }
}

export class VestAllCall__Inputs {
  _call: VestAllCall;

  constructor(call: VestAllCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokens(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class VestAllCall__Outputs {
  _call: VestAllCall;

  constructor(call: VestAllCall) {
    this._call = call;
  }
}
