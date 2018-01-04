export default textEngine = (text, place) => {
	textArray = text.split(' ')
	let currentPlace = place
	let previousPlace = place --
	let nextPlace = place ++
	return textArray[currentPlace]
}