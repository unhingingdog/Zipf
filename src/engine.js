import {
	wordLengthWeights,
	puncuationWeights,
	wordFrequencyWeights,
	frequencyDefaultWeight,
	digitWeights
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
		case ':':
			return puncuationWeights.colon
		case ';':
			return puncuationWeights.semiColon
		default:
			return 0
	}
}

export const weightByDigits = word => {
	const largeNumber = /[0-9]{6}/
	const mediumNumber = /[0-9]{3}/
	const smallNumber = /[0-9]{1}/

	if(largeNumber.test(word)) return digitWeights.largeNumber
	if(mediumNumber.test(word)) return digitWeights.mediumNumber
	if(smallNumber.test(word)) return digitWeights.smallNumber
	return 0
}

export const weightByHyphen = word => {
	const hyphen = /-/

	if (hyphen.test(word)) return puncuationWeights.hyphen
	return 0
}

export const weightTotal = word => {
	return (weighByFrequency(word)
				 + weightByLength(word)
				 + weightByPuncuation(word)
				 + weightByDigits(word)
				 + weightByHyphen(word)
			 	)
}

export default text => {
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
