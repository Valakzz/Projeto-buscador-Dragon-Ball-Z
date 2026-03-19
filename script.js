
async function buscar() {
  let url = "https://dragonball-api.com/api/characters?limit=58";
  let allCharacters = [];

  /* Pegando a raça */
  let race = document.querySelector("#race");
  let raceFilter = "";

  /* Pegando o gênero */
  let gender = document.getElementsByTagName("input");
  let genderFilter = "";
  console.log(gender);

  //Checando se o radio do homem foi selecionado
  if (gender[1].checked) genderFilter = "&gender=" + gender[1].value;
  if (gender[2].checked) genderFilter = "&gender=" + gender[2].value;

  if (race.value != "") raceFilter = "&race=" + race.value;

  url = url + raceFilter + genderFilter;

  let resposta = await fetch(url);
  let dados = await resposta.json();

  if (dados.items) {
    allCharacters = dados.items;
  } else {
    allCharacters = dados;
  }

     document.querySelector(".allUsers").innerHTML = "";
  
   

  for (let character of allCharacters) {
    // console.log(character.name);
    // console.log(character.race);
    // console.log(character.image);
    // console.log(character.ki);
    // console.log("----------------------------");

    let divUser = document.createElement("div");
    divUser.classList.add("user");

    divUser.innerHTML = `
        <div class="avatar">
          <img src="${character.image}" />
        </div>
        <div class="data">
          <p>${character.name}</p>
          <p>
            <span>${character.race} - ${character.gender}}</span>
          </p>
          <p>
            <span>Base KI:</span> <br />
            <span>${character.ki}</span>
          </p>
          <p>
            <span>Total KI:</span> <br />
            <span>${character.maxKi}</span>
          </p>
        </div>`;

    document.querySelector(".allUsers").appendChild(divUser);
  }

 
}
 function playMusic(){
    document.getElementById('musica').play()
  }


