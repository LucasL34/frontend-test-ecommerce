<template>
  <nav-bar :buscador="true" @filtering="search"/>
  <div class="container-fluid px-0" id="content">
    <div class="container-fluid bg-orange py-3 my-3">
      <h2 class="h1 fw-bold text-white">
        ¿Listo para tu auto nuevo?
      </h2>
    </div>
    <div class="container-fluid h-vh-75">
        <form class="container-sm d-flex row mx-auto justify-content-around mb-3">
          <div class="form-control-sm d-flex col-sm-6">
            <select class="form-select mx-2 mw-50" id="fuel">
              <option selected v-show="false"> Fuel </option>
              <option value="nafta">Nafta</option>
              <option value="nafta">Gas</option>
              <option value="nafta">Electrico</option>
            </select>

            <select 
              class="form-select mx-2"
              id="model"
              v-if="cars"
            >
              <option selected v-show="false"> Model </option>
              <option 
                v-for="(car, i) in cars"
                :key="i"
                v-text="car.model"
                :value="car.model"
              ></option>
            </select>
          </div>
          <div class="form-control-sm col-sm-3 px-3">
              <div class="input-group ms-auto" id="price-container">
                <span 
                    class="input-group-text" 
                    id="basic-addon1" 
                    v-text="'$'"
                />
                <select class="form-select" id="price">
                    <option selected v-show="false"> Precio </option>
                    <option value="10000">10.000</option>
                    <option value="20000">20.000</option>
                    <option value="30000">30.000</option>
                </select>
            </div>
          </div>
        </form>
        <div 
          v-if="cars"
          class="container-lg"
        >
            <div 
              v-if="filtered().length > 0" 
              class="container-fluid d-flex row mx-auto py-2 justify-content-around gx-4"
            >
                <card-item 
                  v-for="(car, i) in filtered()"
                  :key="i"
                  :data="car" 
                />
            </div>
            <div v-else class="container-lg vh-50">
              <p class="h2"> Sin resultados :( </p>
              <img :src="ErrorImg" alt="404 not found" class="rounded w-50">
            </div>
        </div>
        <div v-else class="container-lg vh-50">
          <p> Loading... </p>
        </div>
      </div>
  </div>
</template>

<script>
import cardItem from '@/components/card'
import navBar from '@/components/navbar'
import ErrorImg from "@/assets/error-1.png"

import axios from "axios"

export default {
  name: "cars",
  data(){
    return {
      cars: null,
      filter: '',
      ErrorImg
    }
  },
  components:{
      cardItem,
      navBar
  },
  methods:{
      search(value){
          this.filter = value 
      },
      filtered(){
          const value = this.filter

          if(value === '' || !value) return this.cars

          return this.cars.filter( item => {
              return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 
          })
      }
  },
  async mounted(){
    const config = {
          headers: {
              Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456"
            }
        },
      url = process.env.VUE_APP_API
    
    const res = await axios.get(url, config)

    this.cars = res.data.results
  }

}
</script>

<style scoped>
  .mw-50{
      max-width: 50%;
  }
</style>