function filterPokemon(){
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
}