const functionUnderTest = (a: number, b: number): string => `${a}${b}`

/**
 * @group unit
 */
describe("Sample Jest Unit test", () => {
  it("Should concatenate number as String - 1", () => {
    expect(functionUnderTest(1, 2)).toStrictEqual("12")
  })
  it("Should concatenate number as String - 2", () => {
    expect(functionUnderTest(0, 5)).toStrictEqual("05")
  })
  it("Should concatenate number as String - 3", () => {
    expect(functionUnderTest(123, 45)).toStrictEqual("12345")
  })
})