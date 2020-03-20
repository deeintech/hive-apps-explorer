<template>
<div class="container">
  <b-navbar class="navbar-light border-bottom-0" toggleable="lg" type="light" variant="faded">
    <b-navbar-brand><router-link to="/" class="navbar-brand">Hive Apps Explorer</router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="mr-0">
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link class="nav-link" to="/tribeslist">Tribes</router-link></b-nav-item>
        <b-nav-item><router-link class="nav-link" to="/about">About</router-link></b-nav-item>
        <b-nav-item class="nav-link" target="_blank" href="https://discord.gg/eXxA5BN">Support</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> 
</div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style>
</style>
