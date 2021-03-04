const expect = chai.expect;
const assert = chai.assert;


describe('Mini-lab #3', () => {
  describe('findLarger', () => {
    it('returns the larger of two numbers', () => {
      const smaller = 3
      const larger = 5
      const result = findLarger(smaller, larger)

      expect(result).to.eq(larger)
    })
  })

  describe('addExcitement', () => {
    it('excites the given string', () => {
      const unExcitedString = 'havin a good time'
      const excitedString = addExcitement(unExcitedString)

      expect(excitedString).to.eq('HAVIN A GOOD TIME!!!')
    })
  })

  describe('findMax', () => {
    it('returns the highest number from the input array', () => {
      const numbers = [2, 0, 10, -1]
      const max = findMax(numbers)

      expect(max).to.eq(10)
    })
  })
})

