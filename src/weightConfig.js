export const wordLengthWeights = { moreThan_7: 200}
export const puncuationWeights = {
  fullStop: 1000,
  comma: 500
}

export const frequencyDefaultWeight = 1000

const common10 = 500
const common20 = 500
const common30to40 = 500
const common50s70s = 500

export const wordFrequencyWeights = {
  "the": common10,
  "be": common10,
  "to": common10,
  "of": common10,
  "and": common10,
  "a": common10,
  "in": common10,
  "that": common10,
  "have": common10,
  "I": common10,
  //10
  "it": common20,
  "for": common20,
  "not": common20,
  "on": common20,
  "with": common20,
  "he": common20,
  "as": common20,
  "you": common20,
  "do": common20,
  "at": common20,
  //20
  "this": common30to40,
  "but": common30to40,
  "his": common30to40,
  "by": common30to40,
  "from": common30to40,
  "they": common30to40,
  "we": common30to40,
  "say": common30to40,
  "her": common30to40,
  "she": common30to40,
  //30
  "or": common30to40,
  "will": common30to40,
  "an": common30to40,
  "my": common30to40,
  "one": common30to40,
  "all": common30to40,
  "would": common30to40,
  "there": common30to40,
  "their": common30to40,
  "what": common30to40,
  //40
  "so": common50s70s,
  "up": common50s70s,
  "out": common50s70s,
  "if": common50s70s,
  "about": common50s70s,
  "who": common50s70s,
  "get": common50s70s,
  "which": common50s70s,
  "go": common50s70s,
  "when": common50s70s,
  //50
  "me": common50s70s,
  "make": common50s70s,
  "can": common50s70s,
  "like": common50s70s,
  "time": common50s70s,
  "no": common50s70s,
  "just": common50s70s,
  "him": common50s70s,
  "know": common50s70s,
  "take": common50s70s,
  //60
  "person": common50s70s,
  "into": common50s70s,
  "year": common50s70s,
  "your": common50s70s,
  "good": common50s70s,
  "some": common50s70s,
  "could": common50s70s,
  "them": common50s70s,
  "see": common50s70s,
  "other": common50s70s,
  //70
  "than": 500,
  "then": 500,
  "now": 500,
  "look": 500,
  "only": 500,
  "come": 500,
  "its": 500,
  "over": 500,
  "think": 500,
  "also": 500,
  //80
  "back": 500,
  "after": 500,
  "use": 500,
  "two": 500,
  "how": 500,
  "our": 500,
  "work": 500,
  "first": 500,
  "well": 500,
  "way": 500,
  //90
  "even": 500,
  "new": 500,
  "want": 500,
  "because": 500,
  "any": 500,
  "these": 500,
  "give": 500,
  "day": 500,
  "most": 500,
  "us": 500,
}
