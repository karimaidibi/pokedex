app.component('pokemon-details',{
    props : {
        selected_pokemon : {
            type : Object,
            required : true
        }
    },
    template : 
    /*html*/
    `

    <!-- Modal -->
    <div v-show="selected_pokemon" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{selected_pokemon.name}} #{{selected_pokemon.id}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img v-bind:src="selected_pokemon.img_url" >
            <br/>
            <strong>Form</strong>
            <ul>
            <li>height : {{selected_pokemon.height}}</li>
            <li>weight : {{selected_pokemon.weight}}</li>
            </ul>
            <strong>Abilities : </strong>
            <ul>
            <li v-for="ability in selected_pokemon.abilities">{{ability.ability.name}}</li>
            </ul>
            <strong>Types :</strong>
            <ul >
            <li v-for="type in selected_pokemon.types">{{type.type.name}}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `
    
})