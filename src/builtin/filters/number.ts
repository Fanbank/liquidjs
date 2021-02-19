import numeral from 'numeral'

export const formatNumber = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num).format('0,0.0[0000]')
}

export const formatMoneyRounded = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num).format('$0,0')
}

export const formatMoney = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num).format('$0,0.00')
}

export const formatPercent = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num / 100).format('0,0.0%')
}

export const formatOrdinal = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num).format('0o')
}
