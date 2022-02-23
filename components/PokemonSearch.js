app.component('pokemon-search',{

    data(){
        return{
            searchPokemon : ''
        }
    },

    template : 
    /*html*/
    `
    <div class="searchDivision">
        <h3 style="padding-top:10px">search by name or number</h3>
        <div class="d-flex justify-content-center" style="padding-bottom:15px;">
            <div class="p2 ">
                <input class="form-control" id="searchPokemon" v-model="searchPokemon" placeholder="Chercher...">
            </div>
            <div class="p2 mt-1">
                <i style="margin-left:10px;" class="bi bi-search"></i>
            </div>                   
        </div>
    </div>
    `,
    methods: {
        filterUpdate(){
            const searchPokemon = this.searchPokemon
            console.log(searchPokemon)
            this.$emit('filter-updated',searchPokemon)
        }
    },
    watch : {
        searchPokemon(searchPokemon){
            console.log(searchPokemon)
            this.$emit('filter-updated',searchPokemon)
        }
    }

})