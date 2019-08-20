import axios from 'axios'

export default {
  fetchDapps ({ commit, state }) {
    commit('SET_DAPPS', state.dapps)
  },
  async fetchTransactionById ({ commit }, trxId) {
    const baseUrl = process.env.VUE_APP_ANYX_API
    await axios.get(`${baseUrl}/account_history_api/get_transaction?id=${trxId}`)
      .then(response => {
        commit('SET_TRANSACTION', response.data)
        // console.log(response.data)
        return response.data
      })
      .catch(() => {
        return []
      })
  },
  async fetchBlockById ({ commit }, blockId) {
    const url = process.env.VUE_APP_STEEMIT_MAINNET_PROD
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_block',
      id: 1,
      params: [`${blockId}`]
    }
    await axios.post(url, body, headers)
      .then(response => {
        commit('SET_BLOCK', response.data.result)
        commit('SET_TRANSACTIONS', response.data.result.transactions)
        // console.log(response.data.result.transactions)
        return response.data.result
      })
      .catch(() => {
        return []
      })
  },
  async fetchLatestBlock ({ commit, dispatch }, blockId) {
    const url = process.env.VUE_APP_STEEMIT_MAINNET_PROD
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_dynamic_global_properties',
      id: 1,
      params: []
    }
    await axios.post(url, body, headers)
      .then(response => {
        blockId = parseInt(response.data.result.head_block_number)
        commit('SET_LATEST_BLOCK_ID', blockId)
        dispatch('fetchBlockById', blockId)
        return blockId
      })
      .catch(() => {
        return []
      })
  }
  // async fetchTransactionById ({ commit }, trxId) {
  //   const url = process.env.VUE_APP_STEEMIT_MAINNET_PROD
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   const body = {
  //     jsonrpc: '2.0',
  //     method: 'account_history_api.get_transaction',
  //     id: 1,
  //     params: {id: `${trxId}`}
  //   }
  //   await axios.post(url, body, headers)
  //     .then(response => {
  //       // commit('SET_ACCOUNT', response.data.result)
  //       console.log(response.data)        
  //       return response.data
  //     })
  //     .catch(() => {
  //       return []
  //     })
  // }
}
