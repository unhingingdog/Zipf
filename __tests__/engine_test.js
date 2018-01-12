import engine from '../src/engine'

describe("Text engine", () => {
let text

  beforeEach(() => {
    text = "It was a bright cold day in April, and the clocks were striking thirteen"
  })

  it('should return feed object', () => {
    expect(engine(text)).toBeInstanceOf(Object)
  })

  it('should return an feed with the correct length', () => {
    expect(engine(text)).toBeInstanceOf(Array)
  })
})
