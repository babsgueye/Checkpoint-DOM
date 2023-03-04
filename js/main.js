
var poubelle1 = document.getElementById("poubelle1")
poubelle1.addEventListener('click', function(){
    poubelle1.parentElement.parentElement.remove();
})
var poubelle2 = document.getElementById("poubelle2")
poubelle2.addEventListener('click', function(){
    poubelle2.parentElement.parentElement.remove();
})
var poubelle3 = document.getElementById("poubelle3")
poubelle3.addEventListener('click', function(){
    poubelle3.parentElement.parentElement.remove();
})
var poubelle4 = document.getElementById("poubelle4")
poubelle4.addEventListener('click', function(){
    poubelle4.parentElement.parentElement.remove();
})
var poubelle5 = document.getElementById("poubelle5")
poubelle5.addEventListener('click', function(){
    poubelle5.parentElement.parentElement.remove();
})

var element = document.querySelectorAll("#article")
console.log(element);
for(let i = 0; i < element.length; i++){
    let price = element[i].children[1].children[0].innerText
    let prix = +price;
    let btnplus = element[i].children[2].children[1].children[0]
    let quant = element[i].children[2].children[1].children[1]
    let quantite = parseInt(quant.innerText)
    let btnmoins = element[i].children[2].children[1].children[2]
    let somme = element[i].children[3].children[0]
    let aime = element[i].children[2].children[0]
    btnplus.addEventListener('click', function(){
        quantite++;
        quant.innerHTML = quantite;
        somme.innerHTML = quantite*prix;
    })
    btnmoins.addEventListener('click', function(){
        if(quantite<=0){
            quantite = quantite;
        }else{
            quantite--;
        }
        quant.innerHTML = quantite;
        somme.innerHTML = quantite*prix;
    })
    aime.addEventListener('click', function(){
        if(aime.style.color = "brown"){
            aime.style.color = "blue";
        }else{
            aime.style.color = "brown"
        }
    })
    let somTotale = document.getElementById("somTotale")
    let somTotal = +somTotale
    function sommation(){
        let somTotal = 0;
        for( let i=0; i < element.length; i++){
            somme.innerHTML[i]=quantite*prix[i];
            somTotal == somTotal+parseInt(somme.innerHTML[i]);
        } return somTotal;
    } somTotale.innerHTML = somTotal
}
    
    
    

