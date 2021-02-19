/* eslint-disable @typescript-eslint/camelcase */
import numeral from 'numeral'

export const number_with_delimiter = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num).format('0,0.0[0000]')
}

export const rounded_currency = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(Math.round(num)).format('$0,0')
}

export const number_to_currency = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num).format('$0,0.00')
}

export const number_to_ordinal = (num: number) => {
  if (num === null) {
    return null
  }

  return numeral(num).format('0o')
}
