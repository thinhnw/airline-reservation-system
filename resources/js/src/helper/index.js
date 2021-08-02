import _ from 'lodash'

export const toTitleCase = (sentence) => {
	return _.words(sentence).map(word => _.capitalize(word)).join(' ')
}