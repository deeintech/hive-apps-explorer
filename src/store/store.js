import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    block: {},
    blockId: 0,
    transactions: [],
    tribesTokens: [],
    transaction: {},
    transactionId: '',
    dapps: [
      { 
        text: ' All apps',
        value: 'all',
        customJson: [''],
        accounts: [''],
        metadataTags: [''],
        operations: [''],
        metadataAppNames: [''],
        scotTokens: [''],
        image: 'https://steemitimages.com/p/4qEixipsxSf1sU6hijriHZUjqTiUF92ty5bZJf48duLvGSuN7ZRwc3YMwYTQXcLwAW?format=match&mode=fit&width=640'
      },
      { 
        text: 'Steemit',
        value: 'steemit',
        customJson: [],
        accounts: ['steemitblog', 'steem'],
        metadataTags: ['steemit', 'steem'],
        metadataAppNames: ['steemit'],
        scotTokens: [],
        image: 'https://khaleelkazi.com/wp-content/uploads/2019/01/Steemit-Logo-4.png'
      },
      { 
        text: 'TRIBES',
        value: 'tribes',
        customJson: [],
        accounts: ['sports', 'steemsports', 'zzan', 'neoxian', 'one.life'],
        metadataTags: ['tribes', 'aaa', 'steemzzang', 'neoxag', 'sct', 'stem', 'weedcash', 'sports', 'leo', 'jahm', 'lifestyle'],
        metadataAppNames: ['aaa', 'zzan', 'weedcash', 'steemleo'],
        scotTokens: ['NEOXAG', 'CCC', 'LEO', 'GG', 'STEM', 'NATRL', 'SONIC', 'AAA', 'ACTNEARN',
        'ASS', 'ATTDUMMY', 'BATTLE', 'BLQ', 'BPC', 'CTP', 'DOLPHIN', 'ENG', 'INT', 'IV', 'JAHM', 'LIFESTYLE', 'LIV',
        'MARLIANS', 'MOT', 'NGA', 'RHB', 'SPACO', 'SPORTS', 'TMT', 'TUNES', 'UFM', 'WEED', 'ZZAN', 'BEER', 'LIFESTYLE'],
        image: 'https://s3.amazonaws.com/steem-engine/images/icon_steem-engine_gradient.svg'
      },
      { 
        text: 'PALnet',
        value: 'palnet',
        customJson: [],
        accounts: ['palnet', 'palnetapp'],
        metadataTags: ['palnet', 'pal'],
        metadataAppNames: ['palnet'],
        scotTokens: ['PAL'],
        image: 'https://cdn.steemitimages.com/DQmTFpM7mKpZD6ZEnCeqmwM9oiBAm6qmsAuTJdSYVghpNih/image.png'
      },
      { 
        text: 'SteemCoinpan',
        value: 'steemcoinpan',
        customJson: [],
        accounts: ['steemcoinpan'],
        metadataTags: ['steemcoinpan', 'sct'],
        metadataAppNames: ['steemcoinpan'],
        scotTokens: ['SCT'],
        image: 'https://dappimg.com/media/image/app/954e7f1db0b54090a7a9fc205d412dc6.jpg'
      },
      { 
        text: 'Bots/Promo',
        value: 'bots',
        customJson: [],
        accounts: ['bot', 'promo', 'vote', 'boost', 'big-whale', 'tipu', 'appreciator', 'smartsteem', 'smartmarket', 'rocky1',
        'therising', 'boomerang', 'upmewhale', 'buildawhale', 'steemitboard', 'curator', 'raise-me-up'],
        metadataTags: [],
        metadataAppNames: [],
        scotTokens: [],
        image: 'https://steemitimages.com/p/4i88GgaV8qiFU89taP2MgKXzwntUGAvkoQiKU7VxyD37q91ZahPN39ouoApFvmmBnoEnovXFnyLeuoo2tiK577MMVaAAFzhpXmGxF7f5ibE1q3kVS41F38JqbU?width=128&height=128'
      },
      { 
        text: 'Steem Monsters',
        value: 'steemmonsters',
        customJson: ['sm_'],
        accounts: ['steemmonsters', 'splinterlands'],
        metadataTags: ['steemmonsters', 'splinterlands', 'spt'],
        metadataAppNames: ['steemmonsters', 'splinterlands'],
        scotTokens: ['SPT', 'SMTT', 'ALPHA', 'BETA', 'SMPT', 'DEC'],
        image: 'https://steemitimages.com/u/steemmonsters/avatar'
      },
      { 
        text: 'Steem Engine',
        value: 'steem-engine',
        customJson: ['ssc-', 'scot_', 'scotauto'],
        accounts: ['steem-engine'],
        metadataTags: ['steem-engine', 'tribes'],
        metadataAppNames: ['steem-engine'],
        scotTokens: [],
        image: 'https://s3.amazonaws.com/steem-engine/images/icon_steem-engine_gradient.svg'
      },
      { 
        text: 'Actifit',
        value: 'actifit',
        customJson: [],
        accounts: ['actifit', 'actifit.pay', 'actifit.funds', 'actifit.signup'],
        metadataTags: ['actifit', 'sportstalk', 'afit'],
        metadataAppNames: ['actifit'],
        scotTokens: ['AFIT', 'AFITX'],
        image: 'https://steemitimages.com/u/actifit/avatar'
      },
      { 
        text: 'DLike',
        value: 'dlike',
        customJson: [],
        accounts: ['dlike'],
        metadataTags: ['dlike'],
        metadataAppNames: ['dlike'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/dlike/avatar'
      },
      { 
        text: 'DPoll',
        value: 'dpoll',
        customJson: [],
        accounts: ['dpoll', 'dpoll.curation', 'dpoll.sponsors'],
        metadataTags: ['dpoll'],
        metadataAppNames: ['dpoll'],
        scotTokens: [],
        image: 'https://i.postimg.cc/Y934Sm7w/dpoll-logo.png'
      },
      { 
        text: 'Steem-plus',
        value: 'steem-plus',
        customJson: [],
        accounts: ['steem-plus', 'steem-plus-app', 'steemplus-pay', 'steemplus-bot"'],
        metadataTags: ['steem-plus'],
        metadataAppNames: ['steem-plus'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/steem-plus/avatar'
      },
      { 
        text: 'Waivio',
        value: 'waivio',
        customJson: [],
        accounts: ['waivio'],
        metadataTags: [],
        metadataAppNames: ['waivio'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/waivio/avatar'
      },
      { 
        text: 'Steeve',
        value: 'steeve',
        customJson: [],
        accounts: ['steeve', 'steevebot', 'steeveapp'],
        metadataTags: ['steeve'],
        metadataAppNames: ['steeve'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/steeveapp/avatar'
      },
      { 
        text: 'Busy',
        value: 'busy',
        customJson: [],
        accounts: ['busy.org', 'busy', 'busy.pay'],
        metadataTags: ['busy'],
        metadataAppNames: ['busy'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/busy.org/avatar'
      },
      { 
        text: 'Steempress',
        value: 'steempress',
        customJson: [],
        accounts: ['steempress', 'steempress-io'],
        metadataTags: ['steempress'],
        metadataAppNames: ['steempress'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/steempress/avatar'
      },
      { 
        text: 'APPICS',
        value: 'appics',
        customJson: [],
        accounts: ['appics'],
        metadataTags: ['appics'],
        metadataAppNames: ['appics'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/appics/avatar'
      },
      { 
        text: 'Orinoco',
        value: 'orinoco',
        customJson: [],
        accounts: ['orinoco'],
        metadataTags: ['orinoco'],
        metadataAppNames: ['orinoco'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/orinoco/avatar'
      },
      { 
        text: 'Nextcolony',
        value: 'nextcolony',
        customJson: ['nextcolony'],
        accounts: ['nextcolony'],
        metadataTags: ['nextcolony'],
        metadataAppNames: ['nextcolony'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/nextcolony/avatar'
      },
      { 
        text: 'Steem Hunt',
        value: 'steemhunt',
        customJson: ['sh_'],
        accounts: ['steemhunt'],
        metadataTags: ['steemhunt'],
        metadataAppNames: ['steemhunt'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/steemhunt/avatar'
      },
      { 
        text: 'Fundition',
        value: 'fundition',
        customJson: [],
        accounts: ['fundition'],
        metadataTags: ['fundition'],
        metadataAppNames: ['fundition'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/fundition/avatar'
      },
      { 
        text: 'Steempeak',
        value: 'steempeak',
        customJson: [],
        accounts: ['steempeak'],
        metadataTags: ['steempeak'],
        metadataAppNames: ['steempeak'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/steempeak/avatar'
      },
      { 
        text: 'Peak Monsters',
        value: 'peakmonsters',
        customJson: ['pm_'],
        accounts: ['peakmonsters', 'peakmonsters-kr', 'peakmonsters-cn', 'peakcredit', 'peakcredit-kr', 'peakcredit-cn'],
        metadataTags: ['peakmonsters'],
        metadataAppNames: ['peakmonsters'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/peakmonsters/avatar'
      },
      { 
        text: 'Drugwars',
        value: 'drugwars',
        customJson: ['drugwars', 'dw'],
        accounts: ['drugwars', 'drugwars-dealer'],
        metadataTags: ['drugwars'],
        metadataAppNames: ['drugwars'],
        scotTokens: ['DWD'],
        image: 'https://steemitimages.com/u/drugwars/avatar'
      },
      { 
        text: 'DTube',
        value: 'dtube',
        customJson: [],
        accounts: ['dtube', 'dtube.rewards'],
        metadataTags: ['dtube', 'video'],
        metadataAppNames: ['dtube'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/dtube/avatar'
      },
      { 
        text: 'Partiko',
        value: 'partiko',
        customJson: [],
        accounts: ['partiko'],
        metadataTags: ['partiko'],
        metadataAppNames: ['partiko'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/partiko/avatar'
      },
      { 
        text: 'Esteem',
        value: 'esteem',
        customJson: [],
        accounts: ['esteem', 'esteemapp'],
        metadataTags: ['esteem'],
        metadataAppNames: ['esteem'],
        scotTokens: ['ESTM'],
        image: 'https://steemitimages.com/u/esteemapp/avatar'
      },
      { 
        text: 'Tokenbb',
        value: 'tokenbb',
        customJson: [],
        accounts: ['tokenbb', 'forums.tokenbb', 'guest.tokenbb'],
        metadataTags: ['tokenbb'],
        metadataAppNames: ['tokenbb'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/tokenbb/avatar'
      },
      { 
        text: 'DSound',
        value: 'dsound',
        customJson: [],
        accounts: ['dsound'],
        metadataTags: ['dsound'],
        metadataAppNames: ['dsound'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/dsound/avatar'
      },
      { 
        text: '3Speak',
        value: 'threespeak',
        customJson: [],
        accounts: ['3speak', 'threespeak'],
        metadataTags: ['3speak', 'threespeak'],
        metadataAppNames: ['3speak', 'threespeak'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/threespeak/avatar'
      },
      { 
        text: 'Krypto Games',
        value: 'kryptogames',
        customJson: [],
        accounts: ['kryptogames'],
        metadataTags: ['kryptogames'],
        metadataAppNames: ['kryptogames'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/kryptogames/avatar'
      },
      { 
        text: 'Krypto Gamers',
        value: 'kryptogamers',
        customJson: [],
        accounts: ['kryptogamers'],
        metadataTags: ['kryptogamers'],
        metadataAppNames: ['kryptogamers'],
        scotTokens: ['GAMER'],
        image: 'https://steemitimages.com/u/kryptogamers/avatar'
      },
      {
        text: 'SteemSTEM',
        value: 'steemstem',
        customJson: [],
        accounts: ['steemstem', 'steemstem.io', 'steemstem.setup', 'steemstem.pay'],
        metadataTags: ['steemstem'],
        metadataAppNames: ['steemstem'],
        scotTokens: [],
        image:  'https://i.imgsafe.org/83/83038ca02a.jpeg'
      },
      { 
        text: 'Epicdice',
        value: 'epicdice',
        customJson: [],
        accounts: ['epicdice'],
        metadataTags: ['epicdice'],
        metadataAppNames: ['epicdice'],
        scotTokens: ['EPC'],
        image: 'https://steemitimages.com/u/epicdice/avatar'
      },
      { 
        text: 'Tasteem',
        value: 'tasteem', 
        customJson: [],
        accounts: ['tasteem'],
        metadataTags: ['tasteem'],
        metadataAppNames: ['tasteem'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/tasteem/avatar'
      },
      { 
        text: 'Utopian',
        value: 'utopian',
        customJson: [],
        accounts: ['utopian-io'],
        metadataTags: ['utopian', 'utopian-io'],
        metadataAppNames: ['utopian-io'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/utopian-io/avatar'
      },
      { 
        text: 'DClick',
        value: 'dclick',
        customJson: [],
        accounts: ['dclick'],
        metadataTags: ['dclick'],
        metadataAppNames: ['dclick'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/dclick/avatar'
      },
      { 
        text: 'Wherein',
        value: 'wherein',
        customJson: [],
        accounts: ['wherein'],
        metadataTags: ['wherein'],
        metadataAppNames: ['wherein'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/wherein/avatar'
      },
      { 
        text: 'Steepshot',
        value: 'steepshot',
        customJson: [],
        accounts: ['steepshot'],
        metadataTags: ['steepshot'],
        metadataAppNames: ['steepshot'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/steepshot/avatar'
      }
    ]
  },
  mutations: mutations,
  actions: actions,
  getters: getters
})
