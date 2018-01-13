import weights from './weights'
const wordLengthWeights = { moreThan_7: 200} //temp
const puncuationWeights = { endOfSentence: 1200} //temp
const readingSpeed = 1 //temp

const frequencyDefaultWeight = 1000

export const weighByFrequency = word => {
	word = word.toLowerCase()
	return weights[word] ? weights[word] : frequencyDefaultWeight
}

export const weightByLength = word => {
	return word.length > 7 ? wordLengthWeights.moreThan_7 : 0
}

export const weightByPuncuation = word => {
	return word[word.length - 1] ==='.' ? puncuationWeights.endOfSentence : 0
}

export const weightTotal = word => {
	return weighByFrequency(word)
				 + weightByLength(word)
				 + weightByPuncuation(word)
				 * readingSpeed
	return {[word]: weight}
}

export default textEngine = (text) => {
	let feed = []
	text.split(' ')
			.map(word => feed.push({[word]: weightTotal(word)}))
	return feed
}
