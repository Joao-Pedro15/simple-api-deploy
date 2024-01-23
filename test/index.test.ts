import { describe, it } from 'mocha'
import assert from 'node:assert'

describe("first test", () => {
  it('should calc 1 + 1', () => {
    const calc = 1 + 1
    assert.equal(calc, 2)
  })
})