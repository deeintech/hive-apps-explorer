<template>
  <div id="app">
    <!-- <b-alert show dismissible id="vote" variant="secondary">
      <span dismissable>Developed by <a href="https://peakd.com/@dmitrydao" target="_blank" class="font-weight-bold">@dmitrydao</a>. To support the project, please <a href="https://peakd.com/witnesses" target="_blank" class="font-weight-bold">vote for his witness.</a></span>
    </b-alert> -->
    <Header v-if='$route.name!="notFound"'/>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/views/Header.vue'

export default {
  components: {
    Header
  },
  methods: {
    fetchLatestBlock () {
      this.$store.dispatch('fetchLatestBlock')
    }
  },
  created () {
    this.fetchLatestBlock()
  }
}
</script>
<style>
#vote{
  background: #ededee;
  border: none;
  border-bottom: 1px solid #d4d3d3;
  text-align: center;
  border-radius: 0;
  margin: 0;
}
</style>
