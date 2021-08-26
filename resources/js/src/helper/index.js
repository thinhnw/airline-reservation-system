import _ from 'lodash'

export const toTitleCase = (sentence) => {
	return _.words(sentence).map(word => _.capitalize(word)).join(' ')
}

export const getDisplayedDuration = (a, b) => {
	const date1 = new Date(a);
	const date2 = new Date(b);

	const diffTime = Math.abs(date2 - date1);
	const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
	const diffMinutes = (diffTime % (1000 * 60 * 60)) * 60; 
	return diffHours + 'h ' + diffMinutes + 'm'
}

export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
  try {
    if (typeof(amount) === 'string') amount = parseFloat(amount)
    if (amount == null || isNaN(amount)) return "N/A"
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
    return "N/A"
  }
}