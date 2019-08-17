<template>
<section
    class="slice slice-lg vh-100 overflow-hidden">
    <div class="container h-100 d-flex align-items-center position-relative zindex-100">
      <div class="col">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <h6 class="h1 mb-5 font-weight-400">Page not found</h6>
            <router-link class="btn btn-light" to="/">
                Return home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style>

</style>
