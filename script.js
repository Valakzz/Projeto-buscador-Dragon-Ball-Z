 async function buscar(){
    let url = "https://dragonball-api.com/api/characters?limit=58";
      
    
      let raceFilter = ""


      let race = document.querySelector("#race").value;
      let gender = document.getElementsByTagName("input");
      let genderfilter = ""
      console.log(gender)
      if(gender[1].checked){
        genderfilter = `&gender=`+ gender[1].value;
        
      }else if(gender[2].checked){
        genderfilter = `&gender=`+ gender[2].value;
      }

      if(race != ""){
        raceFilter = `&race=` + race;
           
    }
    url = url + raceFilter +  genderfilter;
 
     ;
      document.querySelector(".allUsers").innerHTML = "";
 let resposta = await fetch(url)
     let dados= await resposta.json();
      allCharacters = dados.items;
    
      if(dados.items){
        allCharacters = dados.items
      }else{
        allCharacters = dados
      }


      for(let  character of allCharacters){
        console.log(character.name);   
      //  console.log(character.race);   
     //   console.log(character.image);  
      //  console.log(character.ki);   
       // console.log('---------------------------')
        let divUser = document.createElement('div');
        divUser.classList.add('user');
         divUser.innerHTML = `  
           <div class="avatar">
                <img src="${character.image}" alt="">
            </div>
            <div class="data">
                <p>${character.name}</p>
                <p>
                    <span>${character.race} - ${character.gender}</span>
                </p>
                <p>
                    <span>Base KI:</span>
                    <span>${character.ki}</span>
                </p>
                <p>
                    <span>Total KI:</span>
                    <span>${character.maxKi}</span>
                </p>

                

                
            </div>
         `
         document.querySelector(".allUsers").appendChild(divUser);
      }
     
}