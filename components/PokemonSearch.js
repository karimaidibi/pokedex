app.component('pokemon-search',{

    template : 
    /*html*/
    `
    <div class="searchDivision">
        <h3 style="padding-top:10px">search by name or number</h3>
        <div class="d-flex justify-content-center" style="padding-bottom:15px;">
            <div class="p2 ">
                <input class="form-control" id="searchPokemon"  placeholder="Chercher...">
            </div>
            <div class="p2 mt-1">
            <button v-on:click="filterPokemon" style="margin-left:10px; background-color: white;">
                <i class="bi bi-search"></i>
            </button>
            </div>                   
        </div>
    </div>
    `,
    methods: {
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
    }
})