const { deterministicPartitionKey } = require("./dpk")

describe("deterministicPartitionKey", () => {
  it("Returns the literal that is same as env.TRIVIAL_PARTITION_KEY when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe(process.env.TRIVIAL_PARTITION_KEY)
  })
})
