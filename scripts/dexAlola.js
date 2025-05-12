function chamarDexAlola(){
  console.log(`ola mundo`)
  
  const URL = 'https://pokeapi.co/api/v2/pokedex/original-alola';

async function chamarApi(){
  const resp = await fetch(URL);
  const container = document.getElementById("listagem-pokemon");
    
  if (resp.status === 200) {
    const obj = await resp.json();
    console.log(obj);   
    
    for (let i = 0; i<obj.pokemon_entries.length; i++) {
     const pokemonIds = obj.pokemon_entries[i];
     const pokemonNomes = obj.pokemon_entries[i].pokemon_species.name;
    // console.log(pokemonIds.entry_number);
    //console.log(    )
     
     const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card-conteudo">
          <h3>ID: ${pokemonIds.entry_number}</h3>
          <h2>Nome: ${pokemonNomes}</h2>
          
        </div>
      `;
      
    
      container.appendChild(card);

   }
  }
  
}
chamarApi();
}



