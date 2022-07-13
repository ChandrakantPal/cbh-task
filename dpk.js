const crypto = require("crypto")

exports.deterministicPartitionKey = (event) => {
  let candidate

  if (event) {
    if (!event.partitionKey) {
      const data = JSON.stringify(event)
      candidate = crypto.createHash("sha3-512").update(data).digest("hex")
    }
    candidate = event.partitionKey
  }

  if (!candidate) {
    candidate = process.env.TRIVIAL_PARTITION_KEY
  }
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate)
  }
  if (candidate.length > process.env.MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex")
  }
  return candidate
}
