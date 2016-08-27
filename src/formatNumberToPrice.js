import make2Digits from './make2Digits.js'

/**
 * @param {number} price Price in cent. Formats the price with commas, 
 * Strips cent if they are 00.
 */
export default function (price){
	var dollars = Math.floor(price / 100)
	var cent = price % 100
	var strPrice = Number(dollars).toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return cent ? (strPrice + '.' + make2Digits(cent)) : strPrice
}

