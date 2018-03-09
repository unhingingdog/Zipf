export const wordLengthWeights = { moreThan_7: 200}

export const puncuationWeights = {
  fullStop: 1000,
  comma: 500,
  colon: 900,
  semiColon: 700,
  hyphen: 1000
}

export const digitWeights = {
  largeNumber: 1200,
  mediumNumber: 800,
  smallNumber: 600
}

export const frequencyDefaultWeight = 1000

const zeroToTen = 500
const elevenToTwenty = 550
const twentyoneToThirty = 600
const thirtyOneToForty = 650
const fortyonetoFifty = 700
const fiftyoneToSixty = 750
const sixtyoneToSeventy = 800
const seventyoneToEighty = 850
const eightyoneToNintey = 900
const ninetyoneToOnehundred = 950

export const wordFrequencyWeights = {
  "the": zeroToTen,
  "be": zeroToTen,
  "to": zeroToTen,
  "of": zeroToTen,
  "and": zeroToTen,
  "a": zeroToTen,
  "in": zeroToTen,
  "that": zeroToTen,
  "have": zeroToTen,
  "I": zeroToTen,
  //10
  "it": elevenToTwenty,
  "for": elevenToTwenty,
  "not": elevenToTwenty,
  "on": elevenToTwenty,
  "with": elevenToTwenty,
  "he": elevenToTwenty,
  "as": elevenToTwenty,
  "you": elevenToTwenty,
  "do": elevenToTwenty,
  "at": elevenToTwenty,
  //20
  "this": twentyoneToThirty,
  "but": twentyoneToThirty,
  "his": twentyoneToThirty,
  "by": twentyoneToThirty,
  "from": twentyoneToThirty,
  "they": twentyoneToThirty,
  "we": twentyoneToThirty,
  "say": twentyoneToThirty,
  "her": twentyoneToThirty,
  "she": twentyoneToThirty,
  //30
  "or": thirtyOneToForty,
  "will": thirtyOneToForty,
  "an": thirtyOneToForty,
  "my": thirtyOneToForty,
  "one": thirtyOneToForty,
  "all": thirtyOneToForty,
  "would": thirtyOneToForty,
  "there": thirtyOneToForty,
  "their": thirtyOneToForty,
  "what": thirtyOneToForty,
  //40
  "so": fortyonetoFifty,
  "up": fortyonetoFifty,
  "out": fortyonetoFifty,
  "if": fortyonetoFifty,
  "about": fortyonetoFifty,
  "who": fortyonetoFifty,
  "get": fortyonetoFifty,
  "which": fortyonetoFifty,
  "go": fortyonetoFifty,
  "when": fortyonetoFifty,
  //50
  "me": fiftyoneToSixty,
  "make": fiftyoneToSixty,
  "can": fiftyoneToSixty,
  "like": fiftyoneToSixty,
  "time": fiftyoneToSixty,
  "no": fiftyoneToSixty,
  "just": fiftyoneToSixty,
  "him": fiftyoneToSixty,
  "know": fiftyoneToSixty,
  "take": fiftyoneToSixty,
  //60
  "person": sixtyoneToSeventy,
  "into": sixtyoneToSeventy,
  "year": sixtyoneToSeventy,
  "your": sixtyoneToSeventy,
  "good": sixtyoneToSeventy,
  "some": sixtyoneToSeventy,
  "could": sixtyoneToSeventy,
  "them": sixtyoneToSeventy,
  "see": sixtyoneToSeventy,
  "other": sixtyoneToSeventy,
  //70
  "than": seventyoneToEighty,
  "then": seventyoneToEighty,
  "now": seventyoneToEighty,
  "look": seventyoneToEighty,
  "only": seventyoneToEighty,
  "come": seventyoneToEighty,
  "its": seventyoneToEighty,
  "over": seventyoneToEighty,
  "think": seventyoneToEighty,
  "also": seventyoneToEighty,
  //80
  "back": eightyoneToNintey,
  "after": eightyoneToNintey,
  "use": eightyoneToNintey,
  "two": eightyoneToNintey,
  "how": eightyoneToNintey,
  "our": eightyoneToNintey,
  "work": eightyoneToNintey,
  "first": eightyoneToNintey,
  "well": eightyoneToNintey,
  "way": eightyoneToNintey,
  //90
  "even": ninetyoneToOnehundred,
  "new": ninetyoneToOnehundred,
  "want": ninetyoneToOnehundred,
  "because": ninetyoneToOnehundred,
  "any": ninetyoneToOnehundred,
  "these": ninetyoneToOnehundred,
  "give": ninetyoneToOnehundred,
  "day": ninetyoneToOnehundred,
  "most": ninetyoneToOnehundred,
  "us": ninetyoneToOnehundred,
}
