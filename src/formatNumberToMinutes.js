import make2Digits from './make2Digits.js'

/**
 * Formates a number e.g. 2.5 to minutes e.g. 2:30
 */
export default function(val){
	var mins = Math.floor(val)
	var secondsFraction = val % 1
	var seconds = 60 * secondsFraction

	return `${mins}:${make2Digits(seconds)}`
}