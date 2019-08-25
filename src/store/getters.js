export default {
  // block, trx
  block: (state) => state.block,
  blockId: (state) => state.blockId,
  dappInfo: (state, getters) => (op, id) => {
    if (op === 'sh_active_user') {
      return 'hunted an app '
    }
    if (op === 'pm_update_bit') {
      return 'updated a bid '
    }
    if (op === 'pm_create_bid') {
      return 'created a bid '
    }
    if (op === 'sm_token_transfer') {
      return 'transferred ' + getters.dappCustomJsonByTrxId(id).qty + ' ' + getters.dappCustomJsonByTrxId(id).token + ` tokens to <a href="https://steemit.com/@${getters.dappCustomJsonByTrxId(id).to}" target="_blank">@${getters.dappCustomJsonByTrxId(id).to}</a>`
    }
    if (op === 'sm_open_pack') {
      return 'opened a pack of the ' + getters.dappCustomJsonByTrxId(id).edition + ' edition'
    }
    if (op === 'sm_purchase_record') {
      return 'purchased ' + getters.dappCustomJsonByTrxId(id).qty + ' ' + getters.dappCustomJsonByTrxId(id).type
    } 
    if (op === 'sm_submit_team') {
      return 'submitted a team for a battle '
    }
    if (op === 'sm_surrender') {
      return 'surrendered a battle '
    }
    if (op === 'sm_refresh_quest') {
      return 'refreshed a quest '
    }
    if (op === 'sm_team_reveal') {
      return 'revealed cards for a battle '
    }
    if (op === 'sm_find_match') {
      return 'entered into a match queue '
    }
    if (op === 'sm_start_quest') {
      return 'started a quest '
    }
    if (op === 'sm_tournament_checkin') {
      return 'checked in into a tournament '
    }
    if (op === 'sm_cancel_match') {
      return 'cancelled a match '
    }
    if (op === 'sm_cancel_sell') {
      return 'cancelled a sell position '
    }
    if (op === 'sm_sell_card') {
      return 'sold a card '
    }
    if (op === 'sm_sell_cards') {
      return 'sold cards '
    }
    if (op === 'sm_burn_cards') {
      return 'burned their cards '
    }
    if (op === 'sm_enter_tournament') {
      return 'entered a tournament '
    }
    if (op === 'sm_combine_all') {
      return 'combined all cards '
    }
    if (op === 'sm_combine_cards') {
      return 'combined cards '
    }
    if (op === 'sm_gift_cards') {
      return 'gifted cards'
    }
    if (op === 'sm_join_guild') {
      return 'joined a guild'
    }
    if (op === 'sm_edit_guild') {
      return 'edited a guild '
    }
    if (op === 'sm_claim_reward') {
      return 'claimed quest reward '
    }
    if (op === 'sm_delegate_cards') {
      return 'delegated cards '
    }
    // nextcolony
    if (op === 'nextcolony') {
      if (getters.dappCustomJsonByTrxId(id).type === 'deploy') {
        return 'deployed a spaceship '
      }
      if (getters.dappCustomJsonByTrxId(id).type === 'charge') {
        return 'charged a spaceship '
      }
      if (getters.dappCustomJsonByTrxId(id).type === 'enhance') {
        return 'enhanced a spaceship '
      }
      if (getters.dappCustomJsonByTrxId(id).type === 'buildship') {
        return 'built a spaceship '
      }
      if (getters.dappCustomJsonByTrxId(id).type === 'explorespace') {
        return 'started exploring the space '
      }
      if (getters.dappCustomJsonByTrxId(id).type === 'upgrade') {
        return 'upgraded a spaceship '
      }
      if (getters.dappCustomJsonByTrxId(id).type === 'attack') {
        return 'attacked an enemy '
      }
    }
    // steem-engine
    if (op.startsWith('ssc-mainnet')) {
      if (getters.dappCustomJsonByTrxId(id).contractAction === 'stake') {
        return 'staked ' + getters.dappCustomJsonByTrxId(id).contractPayload.quantity + ' ' + getters.dappCustomJsonByTrxId(id).contractPayload.symbol + ` tokens to <a href="https://steemit.com/@${getters.dappCustomJsonByTrxId(id).contractPayload.to}" target="_blank">@${getters.dappCustomJsonByTrxId(id).contractPayload.to} </a>`
      }
      if (getters.dappCustomJsonByTrxId(id).contractAction === 'delegate') {
        return 'delegated ' + getters.dappCustomJsonByTrxId(id).contractPayload.quantity + ' ' + getters.dappCustomJsonByTrxId(id).contractPayload.symbol + ` tokens to <a href="https://steemit.com/@${getters.dappCustomJsonByTrxId(id).contractPayload.to}" target="_blank">@${getters.dappCustomJsonByTrxId(id).contractPayload.to} </a>`
      }
      if (getters.dappCustomJsonByTrxId(id).contractAction === 'issue') {
        return 'issued ' + getters.dappCustomJsonByTrxId(id).contractPayload.quantity + ' ' + getters.dappCustomJsonByTrxId(id).contractPayload.symbol + ` tokens to <a href="https://steemit.com/@${getters.dappCustomJsonByTrxId(id).contractPayload.to}" target="_blank">@${getters.dappCustomJsonByTrxId(id).contractPayload.to} </a>`
      }
      if (getters.dappCustomJsonByTrxId(id).contractAction === 'transfer') {
        return 'transferred ' + getters.dappCustomJsonByTrxId(id).contractPayload.quantity + ' ' + getters.dappCustomJsonByTrxId(id).contractPayload.symbol + ` tokens to <a href="https://steemit.com/@${getters.dappCustomJsonByTrxId(id).contractPayload.to}" target="_blank">@${getters.dappCustomJsonByTrxId(id).contractPayload.to} </a>`
      }
      if (getters.dappCustomJsonByTrxId(id).contractAction === 'cancel') {
        return 'canceled a market order '
      }
      if (getters.dappCustomJsonByTrxId(id).contractAction === 'buy') {
        return 'bought ' + getters.dappCustomJsonByTrxId(id).contractPayload.quantity + ' ' + getters.dappCustomJsonByTrxId(id).contractPayload.symbol + ' tokens' + ` at ${getters.dappCustomJsonByTrxId(id).contractPayload.price}`
      }
      if (getters.dappCustomJsonByTrxId(id).contractAction === 'sell') {
        return 'placed a sell market order for ' + getters.dappCustomJsonByTrxId(id).contractPayload.quantity + ' ' + getters.dappCustomJsonByTrxId(id).contractPayload.symbol + ' tokens' + ` at ${getters.dappCustomJsonByTrxId(id).contractPayload.price}`
      }
    }
    if(op === 'scot_claim_token') {
      return 'claimed a Steem-engine token ' + (getters.dappCustomJsonByTrxId(id).symbol || '')
    }
    // steem operations
    if (op === 'transfer') {
      return `<a href="https://steemit.com/@${getters.dappJsonByTrxId(id).from}" target="_blank">@${getters.dappJsonByTrxId(id).from}</a>` + 
      ` transferred ${getters.dappJsonByTrxId(id).amount}` + 
      ` to <a href="https://steemit.com/@${getters.dappJsonByTrxId(id).to}" target="_blank">@${getters.dappJsonByTrxId(id).to} </a>`
    }
    if (op === 'vote') {
      if (JSON.stringify(getters.dappJsonByTrxId(id).voter) != undefined) {
        return `<a href='https://steemit.com/@${getters.dappJsonByTrxId(id).voter}' target="_blank">@${getters.dappJsonByTrxId(id).voter}<a/>` +
      ` upvoted a post <a class="font-weight-bold" href="https://steemit.com/@${getters.dappJsonByTrxId(id).author}/${getters.dappJsonByTrxId(id).permlink}" target="_blank">${getters.dappJsonByTrxId(id).permlink.slice(0, 30)}</a>`
      } else {
        return 'upvoted a post'
      }
    }
    if (op === 'comment') {
      return `<a href='https://steemit.com/@${getters.dappJsonByTrxId(id).author}' target="_blank">@${getters.dappJsonByTrxId(id).author}<a/>` +
      ` left a comment <a class="font-weight-bold" href="https://steemit.com/@${getters.dappJsonByTrxId(id).author}/${getters.dappJsonByTrxId(id).permlink}" target="_blank">${getters.dappJsonByTrxId(id).permlink.slice(0, 30)}</a>`
    }
    if (op === 'comment_options') {
      return `<a href='https://steemit.com/@${getters.dappJsonByTrxId(id).author}' target="_blank">@${getters.dappJsonByTrxId(id).author}<a/>` +
      ` set comment options <a class="font-weight-bold" href="https://steemit.com/@${getters.dappJsonByTrxId(id).author}/${getters.dappJsonByTrxId(id).permlink}" target="_blank">${getters.dappJsonByTrxId(id).permlink.slice(0, 30)}</a>`
    } else {
      return `performed ${op} operation` || ''
    }
  },
  transactions: (state) => state.transactions,
  transaction: (state) => state.transaction,
  transactionId: (state) => state.transactionId,
  dapps: (state) => state.dapps.sort((a, b) => a.text.localeCompare(b.text)),
  dappCustomJson: (state) => (dapp) => state.dapps.find(d => d.value === dapp).customJson,
  dappOperations: (state) => (dapp) => state.dapps.find(d => d.value === dapp).operations,
  dappAccounts: (state) => (dapp) => state.dapps.find(d => d.value === dapp).accounts,
  dappScotTokens: (state) => (dapp) => state.dapps.find(d => d.value === dapp).scotTokens,
  dappTags: (state) => (dapp) => state.dapps.find(d => d.value === dapp).metadataTags,
  dappImage: (state) => (dapp) => state.dapps.find(d => d.value === dapp).image,
  dappNames: (state) => (dapp) => state.dapps.find(d => d.value === dapp).metadataAppNames,
  transactionById: (state) => (id) => {
    return state.transactions.find(t => t.transaction_id === id)
  },
  totalTransactions: (state, getters) => (dapp) => getters.dappsTransactions(dapp).length,
  tribesTokens: (state) => state.tribesTokens,
  tribeMetadata: (state) => (symbol) => {
    let token = state.tribesTokens.find(t => t.symbol === symbol)
    return JSON.parse(token.metadata)
  },
  tribesByName: (state) => (name) => {
    return state.tribesTokens.filter(t => t.name.toLowerCase().includes(name))
  },
  tribesList: (state) => {
    return state.tribesTokens.filter(t => {
      if(JSON.parse(t.metadata).desc) {
        return (JSON.parse(t.metadata).desc.toLowerCase().includes('tribe') || JSON.parse(t.metadata).desc.toLowerCase().includes('community'))
      }
    })
  },
  dappsTransactions: (state, getters) => (dapp) => {
    const customJson = getters.dappCustomJson(dapp)
    const accounts = getters.dappAccounts(dapp)
    const tags = getters.dappTags(dapp)
    const dappNames = getters.dappNames(dapp)
    const scotTokens = getters.dappScotTokens(dapp)
    let transactions = state.transactions 
    let customJsonTrx = []
    let transferTrx = []
    let voteTrx = []
    let tagsTrx = []
    let commentsTrx = []
    let appNameTrx1 = []
    let appNameTrx2 = []
    let scotTokensTrx1 = []
    let scotTokensTrx2 = []
    let allTransactions = []

    // transfer
    if (transactions.filter(t => t.operations[0][0] === 'transfer')) {
      transferTrx = transactions.filter(t => (t.operations[0][0] === 'transfer') && 
      (accounts.some(account => t.operations[0][1].from.includes(account)) || 
      (accounts.some(account => t.operations[0][1].to.includes(account)))))
    }
    // vote
    if (transactions.filter(t => t.operations[0][0] === 'vote')) {
      voteTrx = transactions.filter(t => (t.operations[0][0] === 'vote') && 
      (accounts.some(account => t.operations[0][1].voter.includes(account)) || 
      (accounts.some(account => t.operations[0][1].author.includes(account)))))
    }
    if (transactions.filter(t => t.operations[0][0] === 'comment')) {
      // app name 1
      appNameTrx1 = transactions.filter(t => (t.operations[0][0] === 'comment') && 
      JSON.parse(Object.keys(t.operations[0][1].json_metadata).length > 0) &&
      JSON.parse(t.operations[0][1].json_metadata).app != undefined && 
      typeof JSON.parse(t.operations[0][1].json_metadata).app === 'string' &&
      dappNames.some(name => JSON.parse(t.operations[0][1].json_metadata).app.includes(name)))

      // tags
      tagsTrx = transactions.filter(t => (t.operations[0][0] === 'comment') && 
      JSON.parse(Object.keys(t.operations[0][1].json_metadata).length > 0) &&
      JSON.parse(t.operations[0][1].json_metadata).tags != undefined && 
      tags.some(tag => JSON.parse(t.operations[0][1].json_metadata).tags.includes(tag)))

      // comments
      commentsTrx = transactions.filter(t => (t.operations[0][0] === 'comment') && 
      accounts.some(account => t.operations[0][1].author.includes(account)))
    }
    if (transactions.filter(t => t.operations[0][0] === 'custom_json')) {
      // all custom_json
      customJsonTrx = transactions.filter(t => (t.operations[0][0] === 'custom_json') && 
      customJson.some(value => t.operations[0][1].id.includes(value)))

      // ssc-
      scotTokensTrx1 = transactions.filter(t => (t.operations[0][0] === 'custom_json') && 
      t.operations[0][1].id.startsWith('ssc-mainnet') &&
      JSON.parse(Object.keys(t.operations[0][1].json).length > 0) &&
      JSON.parse(t.operations[0][1].json).contractPayload !== undefined &&
      typeof JSON.parse(t.operations[0][1].json).contractPayload.symbol === 'string' &&
      scotTokens.some(token => JSON.parse(t.operations[0][1].json).contractPayload.symbol.includes(token)))

      // scot_
      scotTokensTrx2 = transactions.filter(t => (t.operations[0][0] === 'custom_json') && 
      t.operations[0][1].id.startsWith('scot_') &&
      JSON.parse(Object.keys(t.operations[0][1].json).length > 0) &&
      JSON.parse(t.operations[0][1].json).symbol !== undefined &&
      typeof JSON.parse(t.operations[0][1].json).symbol === 'string' &&
      scotTokens.some(token => JSON.parse(t.operations[0][1].json).symbol.includes(token)))

      // app name 2
      appNameTrx2 = transactions.filter(t => (t.operations[0][0] === 'custom_json') && 
      (t.operations[0][1].id === 'vote') &&
      JSON.parse(Object.keys(t.operations[0][1].json).length > 0) &&
      JSON.parse(t.operations[0][1].json).app !== undefined &&
      typeof JSON.parse(t.operations[0][1].json).app === 'string' &&
      dappNames.some(app => JSON.parse(t.operations[0][1].json).app.includes(app)))
    }
    allTransactions = [].concat(transferTrx, customJsonTrx, scotTokensTrx1, scotTokensTrx2, voteTrx, tagsTrx, commentsTrx, appNameTrx1, appNameTrx2)
    return allTransactions.filter((item, index) => allTransactions.indexOf(item) === index)
  },
  dappCustomJsonByTrxId: (state) => (id) => {
    return JSON.parse(state.transactions.find(t => t.transaction_id === id).operations[0][1].json)
  },
  dappJsonByTrxId: (state) => (id) => {
    return state.transactions.find(t => t.transaction_id === id).operations[0][1]
  }
}
