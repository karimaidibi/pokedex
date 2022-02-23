const app = Vue.createApp({
    data() {
        return {
            pokemon_list: [],
            pokemon_filter : null

        }
    },

    methods : {
        padLeadingZeros(num, size) {
            var s = num+"";
            while (s.length < size) s = "0" + s;
            return s;
        },
        updateFilter(searchPokemon){
            this.pokemon_filter = searchPokemon
        }
    },

    created(){
            var self = this
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=800&offset=0'
            fetch(url)
            .then(function(response){
                return response.json()
            }).then(function(json_response){
                self.pokemon_list = json_response['results']
                for (index in self.pokemon_list){ 
                    let reg = self.pokemon_list[index]['url'].match(/https:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)/)
                    let id_pokemon = reg[1]
                    let number_img = id_pokemon
                    let num_img_with_zeros = 0
                    num_img_with_zeros = self.padLeadingZeros(number_img,3)
                    self.pokemon_list[index]['id'] = id_pokemon
                    self.pokemon_list[index]['img_url'] = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+num_img_with_zeros+'.png'
                }
            }).catch(function(err){
                console.log('error : ' + err.message)
                throw err
            })
    }
})
