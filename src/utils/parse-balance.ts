import type { BigNumberish } from "@ethersproject/bignumber"
import { formatUnits } from "@ethersproject/units"

export default function parseBalance(value: BigNumberish, decimals = 18, decimalsToDisplay = 3) {
  return parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay)
}
