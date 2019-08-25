export default {
  // block, trx
  SET_BLOCK: (state, block) => { state.block = block },
  SET_DAPPS: (state, dapps) => { state.dapps = dapps },
  SET_LATEST_BLOCK_ID: (state, blockId) => { state.blockId = blockId },
  SET_TRANSACTIONS: (state, transactions) => { state.transactions = transactions },
  SET_TRANSACTION: (state, trx) => { state.transaction = trx },
  SET_TRANSACTION_ID: (state, id) => { state.transactionId = id },
  SET_TRIBES_TOKENS: (state, tokens) => { state.tribesTokens = tokens }
}
