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
        image: 'https://pbs.twimg.com/profile_images/1240280499626684417/w_q7vezk_400x400.jpg'
      },
      { 
        text: 'TRIBES',
        value: 'tribes',
        customJson: [],
        accounts: ['sports', 'neoxian', 'one.life'],
        metadataTags: ['tribes', 'steemzzang', 'neoxag', 'sct', 'stem', 'weedcash', 'sports', 'leo', 'jahm', 'lifestyle'],
        metadataAppNames: ['weedcash', 'steemleo'],
        scotTokens: ['NEOXAG', 'CCC', 'LEO', 'GG', 'STEM', 'NATRL', 'SONIC', 'ACTNEARN',
        'ASS', 'ATTDUMMY', 'BATTLE', 'BLQ', 'BPC', 'CTP', 'DOLPHIN', 'ENG', 'INT', 'IV', 'JAHM', 'LIFESTYLE', 'LIV',
        'MARLIANS', 'MOT', 'NGA', 'RHB', 'SPACO', 'SPORTS', 'TMT', 'TUNES', 'UFM', 'WEED', 'BEER', 'LIFESTYLE'],
        image: 'https://s3.amazonaws.com/steem-engine/images/icon_steem-engine_gradient.svg'
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
        text: 'Splinterlands',
        value: 'splinterlands',
        customJson: ['sm_'],
        accounts: ['splinterlands', 'steemmonsters'],
        metadataTags: ['splinterlands', 'spt'],
        metadataAppNames: ['splinterlands', 'steemmonsters'],
        scotTokens: ['SPT', 'SMTT', 'ALPHA', 'BETA', 'SMPT', 'DEC'],
        image: 'https://hive.io/_nuxt/img/1b87617.png'
      },
      { 
        text: 'HiveStem',
        value: 'hivestem',
        customJson: [],
        accounts: ['hivestem'],
        metadataTags: ['hivestem', 'stem'],
        metadataAppNames: ['hivestem', 'stem'],
        scotTokens: ['STEM'],
        image: 'https://hive.io/_nuxt/img/c114906.svg'
      },
      { 
        text: 'Engrave',
        value: 'engrave',
        customJson: [],
        accounts: ['engrave', 'dblog'],
        metadataTags: ['engrave', 'dblog'],
        metadataAppNames: ['engrave', 'dblog'],
        scotTokens: [],
        image: 'https://pbs.twimg.com/profile_images/1084063368103817216/UlvXq_S0_400x400.jpg'
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
        image: 'https://hive.io/_nuxt/img/502bf78.png'
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
        text: 'HivePress',
        value: 'hivepress',
        customJson: [],
        accounts: ['steempress', 'steempress-io', 'hivepress'],
        metadataTags: ['steempress', 'hivepress'],
        metadataAppNames: ['steempress', 'hivepress'],
        scotTokens: [],
        image: 'https://hive.io/_nuxt/img/2360698.svg'
      },
      { 
        text: 'PeakD',
        value: 'peakd',
        customJson: [],
        accounts: ['steempeak', 'peakd'],
        metadataTags: ['steempeak', 'peakd'],
        metadataAppNames: ['steempeak', 'peakd'],
        scotTokens: [],
        image: 'https://hive.io/_nuxt/img/6b1cad3.svg'
      },
      { 
        text: 'ESteem',
        value: 'esteem',
        customJson: [],
        accounts: ['esteem', 'esteemapp'],
        metadataTags: ['esteem'],
        metadataAppNames: ['esteem'],
        scotTokens: ['ESTM'],
        image: 'https://hive.io/_nuxt/img/a47fd2a.svg'
      },
      { 
        text: '3Speak',
        value: 'threespeak',
        customJson: [],
        accounts: ['3speak', 'threespeak'],
        metadataTags: ['3speak', 'threespeak'],
        metadataAppNames: ['3speak', 'threespeak'],
        scotTokens: [],
        image: 'https://hive.io/_nuxt/img/52ad1fd.svg'
      },
      
      { 
        text: 'Nextcolony',
        value: 'nextcolony',
        customJson: ['nextcolony', 'tr_'],
        accounts: ['nextcolony'],
        metadataTags: ['nextcolony'],
        metadataAppNames: ['nextcolony'],
        scotTokens: [],
        image: 'https://steemitimages.com/u/nextcolony/avatar'
      },
    ]
  },
  mutations: mutations,
  actions: actions,
  getters: getters
})
