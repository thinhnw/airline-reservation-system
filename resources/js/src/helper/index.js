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