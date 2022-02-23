app.component('pokemon-box', {
    props : {
      pokemon_list : {
        type : Array,
        required : true,
      },
      pokemon_filter : {
        type : String,
        required : false,
      }
    },

    data() {
      return {
        selected_pokemon : {},
      }
    },

    template:
    /*html*/
    `
    <!--les pokemon-->
    <div class="mt-4 PokemonsDiv">
        <!--row-->
        <div v-if="pokemon_list" class="p-3 row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
            <!--column-->
            <div v-for="(dict, index) in filtered_pokemons" :key=dict.id class="col pokemonbox">
                <div class="border bg-light p-3">
                    <img v-bind:src="dict.img_url" style="width: 300px; height: auto; padding:auto; margin:auto">
                    <p class="idpokemon"><em>#{{dict.id}}</em></p>
                    <p class="namepokemon">{{dict.name}}</p>
                    <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style="background-color:red;"
                    v-on:click="getPokemonDetails(dict.id,dict.name,dict.img_url,dict.url)"
                    >details
                    </button>
                    <!--details-->
                    <pokemon-details :selected_pokemon="selected_pokemon"></pokemon-details>
                </div>
            </div>
        </div>
    </div>
     `,
     methods : {
      getPokemonDetails(id,name,img_url,url){
        var self = this
        fetch(url)
        .then(function(response){
            return response.json()
        }).then(function(json_response){
            self.selected_pokemon['abilities'] = json_response['abilities']
            self.selected_pokemon['types'] = json_response['types']
            self.selected_pokemon['weight'] = json_response['weight']
            self.selected_pokemon['height'] = json_response['height']
            self.selected_pokemon['img_url'] =  img_url
            self.selected_pokemon['id'] =  id
            self.selected_pokemon['name'] =  name
            console.log(self.selected_pokemon)
        }).catch(function(err){
            console.log('error : ' + err.message)
            throw err 
        })
      }
     },
     computed:{
      filtered_pokemons(){
          if (this.pokemon_filter!=null){
            return this.pokemon_list.filter(p=>{
                return (p.name.toLowerCase().indexOf(this.pokemon_filter) > -1) || (p.id.toLowerCase().indexOf(this.pokemon_filter) > -1)
            })
          }else{
            return this.pokemon_list
          }

      }
  },


  })