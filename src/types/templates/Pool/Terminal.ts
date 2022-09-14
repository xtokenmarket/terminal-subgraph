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

export class DeployedIncentivizedPool extends ethereum.Event {
  get params(): DeployedIncentivizedPool__Params {
    return new DeployedIncentivizedPool__Params(this);
  }
}

export class DeployedIncentivizedPool__Params {
  _event: DeployedIncentivizedPool;

  constructor(event: DeployedIncentivizedPool) {
    this._event = event;
  }

  get clrInstance(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token0(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get fee(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get lowerTick(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get upperTick(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class DeployedNonIncentivizedPool extends ethereum.Event {
  get params(): DeployedNonIncentivizedPool__Params {
    return new DeployedNonIncentivizedPool__Params(this);
  }
}

export class DeployedNonIncentivizedPool__Params {
  _event: DeployedNonIncentivizedPool;

  constructor(event: DeployedNonIncentivizedPool) {
    this._event = event;
  }

  get poolInstance(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token0(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get fee(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get lowerTick(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get upperTick(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class DeployedUniV3Pool extends ethereum.Event {
  get params(): DeployedUniV3Pool__Params {
    return new DeployedUniV3Pool__Params(this);
  }
}

export class DeployedUniV3Pool__Params {
  _event: DeployedUniV3Pool;

  constructor(event: DeployedUniV3Pool) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token0(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get fee(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class EthFeeWithdraw extends ethereum.Event {
  get params(): EthFeeWithdraw__Params {
    return new EthFeeWithdraw__Params(this);
  }
}

export class EthFeeWithdraw__Params {
  _event: EthFeeWithdraw;

  constructor(event: EthFeeWithdraw) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class InitiatedRewardsProgram extends ethereum.Event {
  get params(): InitiatedRewardsProgram__Params {
    return new InitiatedRewardsProgram__Params(this);
  }
}

export class InitiatedRewardsProgram__Params {
  _event: InitiatedRewardsProgram;

  constructor(event: InitiatedRewardsProgram) {
    this._event = event;
  }

  get clrInstance(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rewardTokens(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get totalRewardAmounts(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get rewardsDuration(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

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

export class TokenFeeWithdraw extends ethereum.Event {
  get params(): TokenFeeWithdraw__Params {
    return new TokenFeeWithdraw__Params(this);
  }
}

export class TokenFeeWithdraw__Params {
  _event: TokenFeeWithdraw;

  constructor(event: TokenFeeWithdraw) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Terminal__uniContractsResult {
  value0: Address;
  value1: Address;
  value2: Address;

  constructor(value0: Address, value1: Address, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }
}

export class Terminal extends ethereum.SmartContract {
  static bind(address: Address): Terminal {
    return new Terminal("Terminal", address);
  }

  clrDeployer(): Address {
    let result = super.call("clrDeployer", "clrDeployer():(address)", []);

    return result[0].toAddress();
  }

  try_clrDeployer(): ethereum.CallResult<Address> {
    let result = super.tryCall("clrDeployer", "clrDeployer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  customDeploymentFee(param0: Address): BigInt {
    let result = super.call(
      "customDeploymentFee",
      "customDeploymentFee(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_customDeploymentFee(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "customDeploymentFee",
      "customDeploymentFee(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  customDeploymentFeeEnabled(param0: Address): boolean {
    let result = super.call(
      "customDeploymentFeeEnabled",
      "customDeploymentFeeEnabled(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_customDeploymentFeeEnabled(
    param0: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "customDeploymentFeeEnabled",
      "customDeploymentFeeEnabled(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deployUniswapPool(
    token0: Address,
    token1: Address,
    fee: i32,
    initPrice: BigInt
  ): Address {
    let result = super.call(
      "deployUniswapPool",
      "deployUniswapPool(address,address,uint24,uint160):(address)",
      [
        ethereum.Value.fromAddress(token0),
        ethereum.Value.fromAddress(token1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromUnsignedBigInt(initPrice)
      ]
    );

    return result[0].toAddress();
  }

  try_deployUniswapPool(
    token0: Address,
    token1: Address,
    fee: i32,
    initPrice: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployUniswapPool",
      "deployUniswapPool(address,address,uint24,uint160):(address)",
      [
        ethereum.Value.fromAddress(token0),
        ethereum.Value.fromAddress(token1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromUnsignedBigInt(initPrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployedCLRPools(param0: BigInt): Address {
    let result = super.call(
      "deployedCLRPools",
      "deployedCLRPools(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_deployedCLRPools(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployedCLRPools",
      "deployedCLRPools(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deploymentFee(): BigInt {
    let result = super.call("deploymentFee", "deploymentFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_deploymentFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deploymentFee",
      "deploymentFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPool(token0: Address, token1: Address, fee: i32): Address {
    let result = super.call(
      "getPool",
      "getPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(token0),
        ethereum.Value.fromAddress(token1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
      ]
    );

    return result[0].toAddress();
  }

  try_getPool(
    token0: Address,
    token1: Address,
    fee: i32
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPool",
      "getPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(token0),
        ethereum.Value.fromAddress(token1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  nonRewardPoolDeployer(): Address {
    let result = super.call(
      "nonRewardPoolDeployer",
      "nonRewardPoolDeployer():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_nonRewardPoolDeployer(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "nonRewardPoolDeployer",
      "nonRewardPoolDeployer():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  positionManager(): Address {
    let result = super.call(
      "positionManager",
      "positionManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_positionManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "positionManager",
      "positionManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxyAdmin(): Address {
    let result = super.call("proxyAdmin", "proxyAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_proxyAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("proxyAdmin", "proxyAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardEscrow(): Address {
    let result = super.call("rewardEscrow", "rewardEscrow():(address)", []);

    return result[0].toAddress();
  }

  try_rewardEscrow(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardEscrow", "rewardEscrow():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardFee(): BigInt {
    let result = super.call("rewardFee", "rewardFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewardFee", "rewardFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tradeFee(): BigInt {
    let result = super.call("tradeFee", "tradeFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tradeFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tradeFee", "tradeFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uniContracts(): Terminal__uniContractsResult {
    let result = super.call(
      "uniContracts",
      "uniContracts():(address,address,address)",
      []
    );

    return new Terminal__uniContractsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress()
    );
  }

  try_uniContracts(): ethereum.CallResult<Terminal__uniContractsResult> {
    let result = super.tryCall(
      "uniContracts",
      "uniContracts():(address,address,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Terminal__uniContractsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress()
      )
    );
  }

  uniswapFactory(): Address {
    let result = super.call("uniswapFactory", "uniswapFactory():(address)", []);

    return result[0].toAddress();
  }

  try_uniswapFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapFactory",
      "uniswapFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  xTokenManager(): Address {
    let result = super.call("xTokenManager", "xTokenManager():(address)", []);

    return result[0].toAddress();
  }

  try_xTokenManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "xTokenManager",
      "xTokenManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DeployIncentivizedPoolCall extends ethereum.Call {
  get inputs(): DeployIncentivizedPoolCall__Inputs {
    return new DeployIncentivizedPoolCall__Inputs(this);
  }

  get outputs(): DeployIncentivizedPoolCall__Outputs {
    return new DeployIncentivizedPoolCall__Outputs(this);
  }
}

export class DeployIncentivizedPoolCall__Inputs {
  _call: DeployIncentivizedPoolCall;

  constructor(call: DeployIncentivizedPoolCall) {
    this._call = call;
  }

  get symbol(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ticks(): DeployIncentivizedPoolCallTicksStruct {
    return this._call.inputValues[1].value.toTuple() as DeployIncentivizedPoolCallTicksStruct;
  }

  get rewardsProgram(): DeployIncentivizedPoolCallRewardsProgramStruct {
    return this._call.inputValues[2].value.toTuple() as DeployIncentivizedPoolCallRewardsProgramStruct;
  }

  get pool(): DeployIncentivizedPoolCallPoolStruct {
    return this._call.inputValues[3].value.toTuple() as DeployIncentivizedPoolCallPoolStruct;
  }
}

export class DeployIncentivizedPoolCall__Outputs {
  _call: DeployIncentivizedPoolCall;

  constructor(call: DeployIncentivizedPoolCall) {
    this._call = call;
  }
}

export class DeployIncentivizedPoolCallTicksStruct extends ethereum.Tuple {
  get lowerTick(): i32 {
    return this[0].toI32();
  }

  get upperTick(): i32 {
    return this[1].toI32();
  }
}

export class DeployIncentivizedPoolCallRewardsProgramStruct extends ethereum.Tuple {
  get rewardTokens(): Array<Address> {
    return this[0].toAddressArray();
  }

  get vestingPeriod(): BigInt {
    return this[1].toBigInt();
  }
}

export class DeployIncentivizedPoolCallPoolStruct extends ethereum.Tuple {
  get fee(): i32 {
    return this[0].toI32();
  }

  get token0(): Address {
    return this[1].toAddress();
  }

  get token1(): Address {
    return this[2].toAddress();
  }

  get amount0(): BigInt {
    return this[3].toBigInt();
  }

  get amount1(): BigInt {
    return this[4].toBigInt();
  }
}

export class DeployNonIncentivizedPoolCall extends ethereum.Call {
  get inputs(): DeployNonIncentivizedPoolCall__Inputs {
    return new DeployNonIncentivizedPoolCall__Inputs(this);
  }

  get outputs(): DeployNonIncentivizedPoolCall__Outputs {
    return new DeployNonIncentivizedPoolCall__Outputs(this);
  }
}

export class DeployNonIncentivizedPoolCall__Inputs {
  _call: DeployNonIncentivizedPoolCall;

  constructor(call: DeployNonIncentivizedPoolCall) {
    this._call = call;
  }

  get symbol(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ticks(): DeployNonIncentivizedPoolCallTicksStruct {
    return this._call.inputValues[1].value.toTuple() as DeployNonIncentivizedPoolCallTicksStruct;
  }

  get pool(): DeployNonIncentivizedPoolCallPoolStruct {
    return this._call.inputValues[2].value.toTuple() as DeployNonIncentivizedPoolCallPoolStruct;
  }
}

export class DeployNonIncentivizedPoolCall__Outputs {
  _call: DeployNonIncentivizedPoolCall;

  constructor(call: DeployNonIncentivizedPoolCall) {
    this._call = call;
  }
}

export class DeployNonIncentivizedPoolCallTicksStruct extends ethereum.Tuple {
  get lowerTick(): i32 {
    return this[0].toI32();
  }

  get upperTick(): i32 {
    return this[1].toI32();
  }
}

export class DeployNonIncentivizedPoolCallPoolStruct extends ethereum.Tuple {
  get fee(): i32 {
    return this[0].toI32();
  }

  get token0(): Address {
    return this[1].toAddress();
  }

  get token1(): Address {
    return this[2].toAddress();
  }

  get amount0(): BigInt {
    return this[3].toBigInt();
  }

  get amount1(): BigInt {
    return this[4].toBigInt();
  }
}

export class DeployUniswapPoolCall extends ethereum.Call {
  get inputs(): DeployUniswapPoolCall__Inputs {
    return new DeployUniswapPoolCall__Inputs(this);
  }

  get outputs(): DeployUniswapPoolCall__Outputs {
    return new DeployUniswapPoolCall__Outputs(this);
  }
}

export class DeployUniswapPoolCall__Inputs {
  _call: DeployUniswapPoolCall;

  constructor(call: DeployUniswapPoolCall) {
    this._call = call;
  }

  get token0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get token1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get initPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class DeployUniswapPoolCall__Outputs {
  _call: DeployUniswapPoolCall;

  constructor(call: DeployUniswapPoolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DisableCustomDeploymentFeeCall extends ethereum.Call {
  get inputs(): DisableCustomDeploymentFeeCall__Inputs {
    return new DisableCustomDeploymentFeeCall__Inputs(this);
  }

  get outputs(): DisableCustomDeploymentFeeCall__Outputs {
    return new DisableCustomDeploymentFeeCall__Outputs(this);
  }
}

export class DisableCustomDeploymentFeeCall__Inputs {
  _call: DisableCustomDeploymentFeeCall;

  constructor(call: DisableCustomDeploymentFeeCall) {
    this._call = call;
  }

  get deployer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DisableCustomDeploymentFeeCall__Outputs {
  _call: DisableCustomDeploymentFeeCall;

  constructor(call: DisableCustomDeploymentFeeCall) {
    this._call = call;
  }
}

export class EnableCustomDeploymentFeeCall extends ethereum.Call {
  get inputs(): EnableCustomDeploymentFeeCall__Inputs {
    return new EnableCustomDeploymentFeeCall__Inputs(this);
  }

  get outputs(): EnableCustomDeploymentFeeCall__Outputs {
    return new EnableCustomDeploymentFeeCall__Outputs(this);
  }
}

export class EnableCustomDeploymentFeeCall__Inputs {
  _call: EnableCustomDeploymentFeeCall;

  constructor(call: EnableCustomDeploymentFeeCall) {
    this._call = call;
  }

  get deployer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get feeAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EnableCustomDeploymentFeeCall__Outputs {
  _call: EnableCustomDeploymentFeeCall;

  constructor(call: EnableCustomDeploymentFeeCall) {
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

  get _xTokenManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardEscrow(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _proxyAdmin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _clrDeployer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _nonRewardPoolDeployer(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _uniswapFactory(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _uniContracts(): InitializeCall_uniContractsStruct {
    return this._call.inputValues[6].value.toTuple() as InitializeCall_uniContractsStruct;
  }

  get _deploymentFee(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _rewardFee(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _tradeFee(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall_uniContractsStruct extends ethereum.Tuple {
  get router(): Address {
    return this[0].toAddress();
  }

  get quoter(): Address {
    return this[1].toAddress();
  }

  get positionManager(): Address {
    return this[2].toAddress();
  }
}

export class InitiateNewRewardsProgramCall extends ethereum.Call {
  get inputs(): InitiateNewRewardsProgramCall__Inputs {
    return new InitiateNewRewardsProgramCall__Inputs(this);
  }

  get outputs(): InitiateNewRewardsProgramCall__Outputs {
    return new InitiateNewRewardsProgramCall__Outputs(this);
  }
}

export class InitiateNewRewardsProgramCall__Inputs {
  _call: InitiateNewRewardsProgramCall;

  constructor(call: InitiateNewRewardsProgramCall) {
    this._call = call;
  }

  get clrPool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get totalRewardAmounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get rewardsDuration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class InitiateNewRewardsProgramCall__Outputs {
  _call: InitiateNewRewardsProgramCall;

  constructor(call: InitiateNewRewardsProgramCall) {
    this._call = call;
  }
}

export class InitiateRewardsProgramCall extends ethereum.Call {
  get inputs(): InitiateRewardsProgramCall__Inputs {
    return new InitiateRewardsProgramCall__Inputs(this);
  }

  get outputs(): InitiateRewardsProgramCall__Outputs {
    return new InitiateRewardsProgramCall__Outputs(this);
  }
}

export class InitiateRewardsProgramCall__Inputs {
  _call: InitiateRewardsProgramCall;

  constructor(call: InitiateRewardsProgramCall) {
    this._call = call;
  }

  get clrPool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get totalRewardAmounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get rewardsDuration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class InitiateRewardsProgramCall__Outputs {
  _call: InitiateRewardsProgramCall;

  constructor(call: InitiateRewardsProgramCall) {
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

export class SetCLRDeployerCall extends ethereum.Call {
  get inputs(): SetCLRDeployerCall__Inputs {
    return new SetCLRDeployerCall__Inputs(this);
  }

  get outputs(): SetCLRDeployerCall__Outputs {
    return new SetCLRDeployerCall__Outputs(this);
  }
}

export class SetCLRDeployerCall__Inputs {
  _call: SetCLRDeployerCall;

  constructor(call: SetCLRDeployerCall) {
    this._call = call;
  }

  get newDeployer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCLRDeployerCall__Outputs {
  _call: SetCLRDeployerCall;

  constructor(call: SetCLRDeployerCall) {
    this._call = call;
  }
}

export class SetNonRewardPoolDeployerCall extends ethereum.Call {
  get inputs(): SetNonRewardPoolDeployerCall__Inputs {
    return new SetNonRewardPoolDeployerCall__Inputs(this);
  }

  get outputs(): SetNonRewardPoolDeployerCall__Outputs {
    return new SetNonRewardPoolDeployerCall__Outputs(this);
  }
}

export class SetNonRewardPoolDeployerCall__Inputs {
  _call: SetNonRewardPoolDeployerCall;

  constructor(call: SetNonRewardPoolDeployerCall) {
    this._call = call;
  }

  get newDeployer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNonRewardPoolDeployerCall__Outputs {
  _call: SetNonRewardPoolDeployerCall;

  constructor(call: SetNonRewardPoolDeployerCall) {
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

export class WithdrawFeesCall extends ethereum.Call {
  get inputs(): WithdrawFeesCall__Inputs {
    return new WithdrawFeesCall__Inputs(this);
  }

  get outputs(): WithdrawFeesCall__Outputs {
    return new WithdrawFeesCall__Outputs(this);
  }
}

export class WithdrawFeesCall__Inputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawFeesCall__Outputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }
}
