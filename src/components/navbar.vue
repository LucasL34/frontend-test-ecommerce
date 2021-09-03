<template>
    <nav
        id="main-navbar"
        class="navbar navbar-expand-lg navbar-light sm-bg-black bg-white fixed-top d-flex"
    >
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <router-link to="/" class="navbar-brand h-auto">
                <img 
                    :src="logo" 
                    id="logo" 
                    alt="Miss Dior logo" 
                    title="Home" 
                    class="img-fluid">
            </router-link>
            <div id="navbar" class="collapse navbar-collapse my-auto justify-content-between">
                <ul class="navbar-nav mt-auto">
                    <li class="nav-item">
                        <router-link to="/store" class="nav-link text py-0 fs-6"> Vehiculos </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link py-0 fs-6">
                            Descubre más de <i>Diss Dior</i>
                        </a>
                    </li>
                    <li class="nav-item me-auto"></li>
                </ul>
                <form 
                    class="form-control-md border-0 my-auto d-flex justify-content-center"
                    v-if="buscador === true"
                    @submit.prevent 
                >
                    <input
                        type="text"
                        class="form-control-sm border-0 w-100"
                        placeholder="Search"
                        @keyup.enter="filterCar"
                        id="filter"
                        v-model="filter"
                    />
                    <i 
                        :class="[ filter === '' ? 'bi bi-search my-auto mx-1' : 'bi bi-x-lg my-auto mx-1']"
                        @click="resetFilter"
                    ></i>
                </form>
            </div>
            <button
                class="navbar-toggler ms-auto me-3"
                type="button" id="toggler-btn"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</template>

<script>
import logo from '@/assets/miss_dior.png'

export default {
  name: 'nav-bar',
  props: {
      buscador: Boolean
  },
  data(){
    return {
      logo,
      filter: ''
    }
  },
  methods: {
    filterCar(){
        const slug = this.$route.path
        if (slug === '/') {
            window.location.href = `vehiculos/${this.filter}`
        }
    },
    resetFilter(){
        this.filter = ""
    }
  },
  watch: {
      filter(value){
          this.$emit("filtering", value)
      }
  }
}
</script>

<style scoped>
    #logo{
        width: 90%;
        height: 24px;
    }
    #filter{
        max-width: 500px;
    }
    .bi-x-lg{
        color: rgb(237,145,33);
        cursor: pointer;
    }
    #toggler-btn{
        border-color: rgba(0,0,0,.5) !important;
        border-width: 2px;
    }
</style>
