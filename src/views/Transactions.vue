<template>
     <div>
       <div class="container position-relative mt-0">
        <!-- Search -->
        <div class="row mb-2">
          <div class="col-md-12">
            <b-tabs pills
              active-nav-item-class="font-weight-bold"
              v-model="tabIndex">
              <b-tab v-for="(d, index) in dapps" :key="d.key" :title-link-class="linkClass(index)" @click="onDappChange(d.value)" :title="d.text"></b-tab>
            </b-tabs>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-md-6">
            <div class="input-group bg-primary-light p-1">
              <input type="number" v-debounce:600='fetchBlockById' v-model="blockId" class="form-control input" placeholder="Put your search query" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <span class="input-group-text rounded-0" id="basic-addon2">block #</span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <b-alert show variant="primary" class="rounded-0"><a href="https://steemit.com/steem/@dmitrydao/transaction-details-for-app-devs-30-tribes-is-added" target="_blank">New update. Community feedback needed!</a></b-alert>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="alert alert-primary rounded-0" role="alert" v-if="totalTransactions === 0">
          Ooops. Can't find any transactions for your app
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-3 d-flex justify-content-center" v-for="trx in transactions" :key="trx.key">
              <div class="card card-icon-2 card-body shadow-3d hover-bg-primary-3 pb-2 justify-content-center rounded-0">
                  <div class="d-flex justify-content-between">
                    <div class="icon-round mb-3 mb-md-4 icon bg-primary-2">
                      <img class="icon rounded" :src="`${dappImage(dapp)}`">
                    </div>
                    <div class="text-small text-right mt-2">
                      <span class="text-muted">{{trx.expiration | moment("MM/DD/YY h:mm a")}}</span><br/>
                      <router-link :to="`/trx/${trx.transaction_id}`"><span>Id #{{trx.transaction_id.slice(0, 11)}}</span></router-link>
                    </div>
                  </div>
                  <div v-for="op in trx.operations" :key="op.key">
                    <div class="mb-2">
                      <span v-if="op[0] === 'custom_json'" class="mr-1"><a :href='`https://steemit.com/@${(op[1].required_posting_auths[0] || op[1].required_auths[0])}`' target="_blank">@{{op[1].required_posting_auths[0] || op[1].required_auths[0]}}</a></span>
                      <span v-html="dappInfo(op[1].id || op[0], trx.transaction_id)"></span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
     </div>
</template>

<script>
export default {
  name: 'Transactions',
  data () {
    return {
      dapp: 'all',
      tabIndex: 0
    }
  },
  computed: {
    block () {
      return this.$store.getters.block
    },
    blockId: {
      get () {
        return this.$store.state.blockId
      },
      set (blockId) {
        this.$store.commit('SET_LATEST_BLOCK_ID', blockId)
      }
    },
    transactions () {
      return this.$store.getters.dappsTransactions(this.dapp)
    },
    totalTransactions () {
      return this.$store.getters.totalTransactions(this.dapp)
    },
    dappImage () {
      return this.$store.getters.dappImage
    },
    dappInfo () {
      return this.$store.getters.dappInfo
    },
    dapps () {
      return this.$store.getters.dapps
    }
  },
  methods: {
    fetchBlockById (blockId) {
      this.$store.dispatch('fetchBlockById', blockId)
    },
    // fetchPreviousBlock () {
    //   this.blockId = parseInt(this.blockId) - 1
    //   this.fetchBlockById(this.blockId)
    // },
    // fetchNextBlock () {
    //   this.blockId = parseInt(this.blockId) + 1
    //   this.fetchBlockById(this.blockId)
    // },
    fetchDapps () {
      this.$store.dispatch('fetchDapps', this.dapp)
    },
    onDappChange (name) {
      this.dapp = name
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['mr-1 mb-1 text-white rounded-0 app']
      } else {
        return ['bg-light text-dark mr-1 mb-1 rounded-0 app']
      }
    }
  },
  created () {
    this.fetchDapps()
  }
}
</script>

<style>
.app{
  border: 1.2pt solid #eeeeee;
}
</style>
