const app = Vue.createApp({
    data() {
        return {
            pokemon_list: [],
            selected_pokemon : {},
        }
    },

    methods : {
        padLeadingZeros(num, size) {
            var s = num+"";
            while (s.length < size) s = "0" + s;
            return s;
        },
        filterPokemon(){
            const box = document.querySelectorAll('div.pokemonbox')
            const input = document.getElementById('searchPokemon')
            const filter = input.value.toLowerCase()
            for(let i = 0; i<box.length;i++){
                let name = box[i].querySelector('p.namepokemon')
                let id = box[i].querySelector('p.idpokemon')
                if (name && id){
                    let id_value = id.textContent || id.innertext
                    let name_value = name.textContent || name.innertext
                    if ((id_value.toLowerCase().indexOf(filter) > -1) || (name_value.toLowerCase().indexOf(filter) > -1)){
                        box[i].style.display="";
                    }else {
                        box[i].style.display = "none";
                    }
                }
            }
        },
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

    created(){
            var self = this
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
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
