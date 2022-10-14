export default function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, 2)}…………${hex.substring(hex.length - length)}`
}
