<template>
<div>
  <div class="container mt-0">
    <div class="row">
      <div class="col-lg-12">
        <h2>Steem Tribes List</h2>
        <div class="row mb-2">
          <div class="col-md-7">
          </div>
            <div class="col-md-4">
            <input type="search" v-model="tribeName" class="form-control" placeholder="Input tribe name" />
          </div>
          <div class="col-md-1">
            <b-form-select v-model="perPage" :options="pageOptions" @change="getTribesTokens"></b-form-select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-0">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
         <span
          v-if="!tribes.length"
          style="display: inline-block;
          width: 2rem;
          height: 2rem;
          vertical-align: text-bottom;
          border: .25em solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          -webkit-animation: spinner-border .75s linear infinite;
          animation: spinner-border .75s linear infinite;width: 2rem;
          height: 2rem;
          border-width: .3em;"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-lg-3 d-flex justify-content-center" v-for="(token, index) in tribes" :key="index">
          <div class="card card-icon-2 card-body shadow-3d hover-bg-primary-3 pb-2 rounded-0">
            <div class="d-flex justify-content-between">
              <div class="icon-round mb-3 mb-md-4 icon bg-primary-2">
                <img class="icon rounded" :src="`${metadata(token.symbol).icon ? metadata(token.symbol).icon : 'https://s3.amazonaws.com/steem-engine/images/icon_steem-engine_gradient.svg'}`">
              </div>
              <div class="text-small text-right mt-2">
                <span class="text-muted">#{{index}}</span><br/>
                <span>{{token.symbol}}</span>
              </div>
            </div>
            <div>
              <h6 class="font-weight-bold">{{token.name}}</h6>
              <p class="border-bottom mb-1 pb-1">{{((metadata(token.symbol).desc && metadata(token.symbol).desc.length > 100) ? (metadata(token.symbol).desc.slice(0, 100) + '..' ) : metadata(token.symbol).desc) || 'No description provided'}}</p>
              <span class="text-small">by <a :href="`https://steemit.com/@${token.issuer}`" class="font-weight-bold" target="_blank">@{{token.issuer}}</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'TribesList',
  data () {
    return {
      tribeName: '',
      perPage: 50,
      pageOptions: [50, 100, 500, 1000]
    }
  },
  computed: {
    tribes () {
      return this.$store.getters.tribesByName(this.tribeName)
    },
    metadata () {
      return this.$store.getters.tribeMetadata
    }
  },
  methods: {
    getTribesTokens () {
      this.$store.dispatch('getTribesTokens', this.perPage)
    }
  },
  created () {
    this.getTribesTokens ()
  }
}
</script>
<style scoped>
  .tribe-card {
    height: 200pt;
    border-color: rgb(74, 93, 158);
  }
  .tr-icon .icon{
    padding: 3pt;
  }
</style>
