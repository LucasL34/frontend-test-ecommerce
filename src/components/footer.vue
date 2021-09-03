<template>
    <footer class="bd-footer bg-black text-white">
        <div class="col-12">
            <p class="py-4  fs-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem mollitia laboriosam ipsum! 
            </p>
        </div>
        <div class="container-fluid d-flex row mx-auto justify-content-around">
            <div class="col-sm-3 col-6 my-2 d-flex flex-column align-items-center">
                <h3 class="fs-3 fw-bold">
                    Vehiculos
                </h3>
                <div class="my-2">
                    <router-link class="text-white text-decoration-none a fs-5" to="/store">
                        Tienda
                    </router-link>
                </div>
                <div class="my-2">
                    <a class="text-white text-decoration-none a  fs-5" href="#">
                        Información legal
                    </a>
                </div>
            </div>
            <div class="col-sm-3 col-6 my-2  d-flex flex-column align-items-center">
                <h3 class="fs-3 fw-bold"> 
                    Nuestras empresas 
                </h3>
                <div class="my-2">
                    <a class="text-white text-decoration-none a fs-5" href="#">SimpliMuy</a>
                </div>
                <div class="my-2">
                    <a class="text-white text-decoration-none a fs-5" href="#">SimpliCar</a>
                </div>
            </div>
            <div class="col-sm-3 col-6 my-2  d-flex flex-column align-items-center">
                <h3 class="fs-3 fw-bold">
                    Ayuda al cliente
                </h3>
                <div class="my-2">
                    <a class="text-white text-decoration-none a fs-5" href="#">Información de contacto</a>
                </div>
            </div>
            <div class="col-sm-3 col-6 my-2 d-flex-column align-items-center justify-content-start">
                <h3 class="fs-3 fw-bold">
                    Social media 
                </h3>
                <div class="container-sm d-flex justify-content-around flex-wrap my-2">
                    <i class="bi bi-facebook mx-1 fs-5"></i>
                    <i class="bi bi-instagram mx-1 fs-5"></i>
                    <i class="bi bi-github mx-1 fs-5"></i>
                    <i class="bi bi-linkedin mx-1 fs-5"></i>
                </div>
            </div>
        </div>
        <div class="col-12 pt-2 px-2">
            <p class="text-center fs-6 m-0">
                © 2020. Todos los derechos reservados
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-site"
}
</script>

<style scoped>
    a:hover, .bi:hover{
        color: rgb(237,145,33) !important;
    }
</style>