
let rank = ""
let vitorias = 0
let derrotas = 3

// Loop que adiciona 6 ao número de vitórias, aumentando o saldo e consequentemente o ranking, permitindo que todos os diferentes ranks sejam printados no console
for (let i = 0; i < 20; i++){
  vitorias += 6
  rankCalculator(vitorias, derrotas)
  let saldo = rankCalculator(vitorias, derrotas)


  if (saldo < 10){
  rank = "Ferro"
  }  
   else if(saldo <= 20){
    rank = "Bronze"
    }
      else if(saldo <=50){
       rank = "Prata"
     }
       else if(saldo <= 80){
        rank = "Ouro"
       }
          else if(saldo <= 90){
           rank = "Diamante"
         }
           else if(saldo <= 100){
            rank = "Lendário"
           }
             else {
              rank = "Imortal"
             }
console.log("Seu saldo de vitórias foi de "+ saldo + ", então seu nível é "+ rank)            

}

function rankCalculator(vitorias , derrotas){

  return vitorias - derrotas;
}

