<template>
<div class="container">
   <!-- <div class="row mb-3">
      <div class="col-md-6">
        <input type="text" v-debounce:600='fetchTransactionById' v-model="trxId" class="form-control input" placeholder="Put your search query">
      </div>
    </div> -->
     <section class="bg-primary-alt header-inner">
      <div class="container">
        <h5 class="text-center mb-5">Transaction #{{trxId}}</h5>
        <div class="alert alert-primary rounded-0" role="alert" v-if="!trx.operations">
          Ooops. Can't find your transaction. Please wait for a couple of minutes and try one more time.
        </div>
        <div class="col-md-9 offset-2" v-if="trx.operations">
          <div class="card rounded-0">
            <div class="card-body pb-1">
              <h5 class="card-title">Transaction details:</h5>
              <ul>
                <li><strong>Expiration - </strong><code>{{trx.expiration | moment("MM/DD/YY h:mm:ss a")}}</code></li>
                <li><strong>Extensions - </strong> <code>{{trx.extensions}}</code></li>
                <li><strong>Block number reference- </strong> <code>{{trx.ref_block_num}}</code></li>
                <li><strong>Block prefix - </strong> <code>{{trx.ref_block_prefix}}</code></li>
                <li><strong>Signatures - </strong> <code>{{trx.signatures}}</code></li>
                <li><strong>Transaction umber in a block - </strong> <code>{{trx.transaction_num}}</code></li>
              </ul>
            </div>
            <div class="card-body pt-0" v-for="op in trx.operations" :key="op.key">
              <h5 class="card-title">{{op.type}}:</h5>
              <ul class="card-text mb-2" v-for="(opValue, key) in op.value" :key="key">
                <li><strong>{{key}}</strong> - <code>{{opValue}}</code></li>
              </ul>
            </div>
            <div class="card-footer text-muted text-small font-weight-bold">
              <span>{{trx.timestamp | moment("MM/DD/YY h:mm a")}}</span>
              <span class="float-right">Block #{{trx.block_num}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'TransactionItem',
  props: ['trxId'],
  computed: {
    trx () {
      return this.$store.getters.transaction
    },
  },
  methods: {
    fetchTransactionById () {
      this.$store.dispatch('fetchTransactionById', this.trxId)
    }
  },
  created () {
    this.fetchTransactionById()
  }
}
</script>

<style>

</style>
