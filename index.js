require('dotenv').config();
const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());