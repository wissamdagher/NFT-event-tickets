module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6700000,
      network_id: "*"
    },
    mocha: {
      reporter: 'eth-gas-reporter',
      reporterOptions : {
        currency: 'USD',
        gasPrice: 0
      }
    },
    compilers: {
      solc: {
        version: "^0.5.2"
      }
    },
  }
}