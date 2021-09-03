<template>
    <nav-bar :buscador="false"/>
    <div id="content">
        <div class="container-fluid bg-orange text-black py-2 d-flex" id="volver">
            <router-link 
                to="/store" 
                class="text-decoration-none text-white fs-4 px-1"
                
            >
                <b class="bi bi-arrow-left"></b>
                Volver a la tienda
            </router-link>
            <span class="fs-4">  / {{ name }} / </span>  
            <span class="fs-4">
                enviar cotización por mail
            </span>
        </div>
        <div v-if="car" class="container-lg row mt-5 mx-auto">
            <div class="col-sm-6">
                <div class="w-100">
                    <h1 class="h1 text-dark"> {{ car.name }} {{ car.model }} </h1> 
                </div>
                <div class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel" id="car-ousel">
                    <div class="carousel-inner">
                        <div 
                            v-for="(image, i) in car.gallery"
                            :key="i"
                            :class="[ i < 1 ? 'carousel-item active' : 'carousel-item']"
                        >
                            <img :src="`${baseStatic}/${image.large}`" class="d-block w-100" :alt="car.name">
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#car-ousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#car-ousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="container-sm row d-flex mx-auto mb-4">
                    <div class="col-sm-6 text-start my-1">
                        <b class="bi bi-wrench"></b>
                        {{ car.detail.characteristics.body }}
                    </div>
                    <div class="col-sm-6 text-start my-1">
                        <b class="bi bi-battery-full"></b>
                        {{ car.detail.characteristics.gas_type }}
                    </div>
                    <div class="col-sm-6 text-start my-1">
                        <b class="bi bi-speedometer2"></b>
                        {{ car.detail.characteristics.engine }}
                    </div>
                    <div class="col-sm-6 text-start my-1">
                        <b class="bi bi-book"></b>
                        {{ car.detail.characteristics.warranty }}
                    </div>
                </div>
                <div class="container-fluid mb-5">
                    <b role="button" class="text-center text-orange " @click="showTable"> Ver todas las caracteristicas </b>
                </div>
            </div>
            <div class="col-sm-6 d-flex align-items-center">
                <form class="form-control form-control-lg border-0 mb-auto">
                    <h1 class="h1"> Ingresa tus datos </h1>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo enim cupiditate odit ut sequi corporis iure dolores aliquid inventore.
                    </p>
                    <div class="input-group input-group-lg mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Nombre y apellido"
                            aria-label="Username" aria-describedby="basic-addon1"
                        >
                        <span class="input-group-text" id="basic-addon1">
                            <span class="bi bi-person-fill" />
                        </span>
                    </div>

                    <div class="input-group input-group-lg mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Correo electronico"
                            aria-label="Username" aria-describedby="basic-addon1"
                        >
                        <span class="input-group-text" id="basic-addon1">
                            <span class="bi bi-envelope" />
                        </span>
                    </div>

                    <div class="input-group input-group-lg mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Telefono"
                            aria-label="Username" aria-describedby="basic-addon1"
                        >
                        <span class="input-group-text" id="basic-addon1">
                            <span class="bi bi-telephone-fill" />
                        </span>
                    </div>

                    <button class="btn my-2"> Enviar formulario </button>
                </form>
            </div>
        </div>
        <div v-else class="container-fluid my-5">
            <p class="text-center text-dark"> Loading... </p>
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navbar'
import axios from 'axios'

export default {
    name: 'car',
    data(){
        return{
            name: this.$route.params.name,
            id: this.$route.params.id, 
            baseStatic: process.env.VUE_APP_STATIC_BASE,
            car: null
        }
    },
    components: {
        navBar
    },
    methods: {
        showTable(){}
    },
    async mounted(){
        const config = {
            methods: {
                Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456"
            }
        }, url = `${process.env.VUE_APP_API}/${this.id}`

        const res = await axios.get(url, config)

        this.car =  res.data 
    }
}

</script>

<style scoped>
    @media screen and (max-width: 600px){
        div#volver > span{
            display: none;
        }
    }
</style>