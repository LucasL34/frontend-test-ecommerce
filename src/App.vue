<template>
  <div class="vh-100 d-flex flex-column justify-content-between">
      <router-view/>
      <footer-site />
  </div>
</template>

<script>
import footerSite from '@/components/footer'

export default {
  components: {
    footerSite
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #content{
    margin-top: 4rem;
  }
  .bg-orange{
    background-color: rgba(237, 145,33, .8);
  }
  .text-orange{
      color: rgb(237,145,33)
  }
  .btn{
    background-color: rgb(237,145,33) !important;
    border-color: rgb(237,145,33) !important;
  }
  .btn:hover{
    background-color: rgb(255,165,0) !important;
  }
</style>
