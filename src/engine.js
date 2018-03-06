import {
	wordLengthWeights,
	puncuationWeights,
	wordFrequencyWeights,
	frequencyDefaultWeight
} from './weightConfig'


export const weighByFrequency = word => {
	word = word.toLowerCase()
	return wordFrequencyWeights[word] ? wordFrequencyWeights[word] : frequencyDefaultWeight
}

export const weightByLength = word => {
	return word.length > 7 ? wordLengthWeights.moreThan_7 : 0
}

export const weightByPuncuation = word => {
	switch(word[word.length - 1]) {
		case '.':
			return puncuationWeights.fullStop
		case ',':
			return puncuationWeights.comma
		default:
			return 0
	}
}

export const weightTotal = (word) => {
	return (weighByFrequency(word)
				 + weightByLength(word)
				 + weightByPuncuation(word))
}

export default textEngine = text => {
	return new Promise((resolve, reject) => {
		let feed = []
		const splitText = text.split(/\s/)
		splitText.map(word => feed.push(
			{ word, displayTime: weightTotal(word) }
		))

		const error = new Error(['Text engine failed to return the correct feed.'])
		const verifyWord = feed[splitText.length - 1]

		typeof verifyWord.displayTime === 'number' &&
			verifyWord === feed[feed.length - 1] ? resolve(feed) : reject(error)
	})
}
