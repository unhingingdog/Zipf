import weights from './weights'
const wordLengthWeights = { moreThan_7: 200} //temp
const puncuationWeights = { endOfSentence: 1200} //temp


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

export const weightTotal = (word, readingSpeed) => {
	return (weighByFrequency(word)
				 + weightByLength(word)
				 + weightByPuncuation(word)
				 * readingSpeed)
}

export default textEngine = (text, readingSpeed) => {
	return new Promise((resolve, reject) => {
		let feed = []
		const splitText = text.split(' ')
		splitText.map(word => feed.push(
			{word, displayTime: weightTotal(word, 1)}
		))

		const error = new Error('Text engine failed to return a feed.')
		typeof feed[splitText.length - 1].displayTime === 'number'  ?
			resolve(feed) : reject(error)
	})
}
