<template>
    <div class="card col-sm-3 m-2 px-2 border-0 shadow border-0 rounded d-flex flex-column justify-content-between">
        <ul class="list-group list-group-flush justify-content-between flex-wrap">
            <li class="list-group-item border-0 p-0 position-relative">
                <img 
                    :src="api_img + '/' +data.gallery[i_img].medium"
                    :alt="data.name+ ' from ' +data.year"
                    class="img-fluid"
                    @mouseenter="dynamicPhoto"
                    @mouseleave="resetPhoto"
                >
                <i 
                    :class="`bi bi-heart-fill px-2 py-1 ms-auto border-0 rounded like ${ like === true ? 'like-on' : ''} position-absolute start-90`"
                    @click="setLike"
                ></i>
            </li>
            <li class="list-group-item border-0">
                <span class="text-wrap">
                    {{ data.name }} {{data.model}} ({{data.year}})
                </span>
            </li>
            <li class="list-group-item border-0"> 
                Precio desde: <b> ${{data.amount}} </b>
            </li>
            <li class="list-group-item border-0 row bg-transparent">
                <router-link :to="{ name: 'Car', params: { name: data.slug, id: data.id }}">
                    <button class="btn btn-primary">
                        Mas detalles
                    </button>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name: "card-item",
    data(){
        return{
            like: false,
            api_img: process.env.VUE_APP_STATIC_BASE,
            i_img: 0
        }
    },
    props:{
        data: Object
        
    },
    //created(){ console.log(this.data)},
    methods: {
        setLike(){
            this.like = !this.like
        },
        resetPhoto(){
            this.i_img = 0
        },
        dynamicPhoto(){
            const max = this.data.gallery.length - 1,
                interval = 1000
            var initial = 0

            setInterval(() => {
                if(initial < max){
                    initial += 1
                    this.i_img = initial
                }else{
                    this.resetPhoto() 
                }
            }, interval);
        }
    }
}
</script>

<style scoped>
    .start-90{
        left: 90% !important;
    }
    .like{
        color: #000;
        transition: 250ms
    }
    .like-on{
        color: rgb(237, 145,33);
    }
    .like-on:hover{
        color: rgb(196, 196, 196)
    }
    .like:hover:not(.like-on){
        color: rgba(237, 145,33,.75);
    }

    img[class|="img"]:hover{
        cursor: pointer;
    }
</style>