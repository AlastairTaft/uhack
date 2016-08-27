

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

function make2Digits(str){
  if (String(str).length == 1) 
    return '0' + str
  return str
}