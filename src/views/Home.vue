<template>
  <nav-bar :buscador="false" />
  <div 
    class="container-xxl px-0 position-relative"
    id="content"
    >
      <div class="container-sm position-absolute translate-middle-y top-50 d-flex flex-column w-auto">
          <h1 class="h1 fw-bold text-orange text-start"> Merece la pena pagar por la libertad </h1>
          <p class="fs-3 text-black text-wrap mx-auto text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo enim cupiditate odit ut sequi corporis iure dolores aliquid inventore, rerum ab nesciunt.
          </p>
          <router-link to="/store" class="me-auto">
            <button class="btn btn-primary px-2">
                Ingresa para ver más autos
                <i class="bi bi-caret-right-fill"></i>
            </button>
          </router-link>
      </div>
      <img :src="banner" alt="Banner" class="img-fluid">
  </div>
</template>

<script>
import banner from '@/assets/banner-cars.jpg'
import navBar from '../components/navbar'

export default {
  name: 'Home',
  data(){
      return {
        banner
      }
  },
  components: {
      navBar
  }
}

</script>

<style scoped>

  @media screen and (max-width: 800px) and (min-height: 1000px){
      #content{
          min-height: 50vh;
          margin: auto 0;
      }
      img[class|="img"]{
          display: none;
      }
  }

  @media screen and (max-width: 480px) {
      #content{
          min-height: 60vh;
      }
      img[class|="img"]{
          display: none;
      }
  }
</style>