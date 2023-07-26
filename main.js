var favs = Array.from(document.querySelectorAll(".fa-heart"))
var plusbutns=Array.from(document.querySelectorAll(".fa-plus-circle"))
var minusbutns=Array.from(document.querySelectorAll(".fa-minus-circle"))
var trashbutton=Array.from(document.querySelectorAll(".fa-trash-alt"))
var card=Array.from(document.querySelectorAll(".card"))
 
for(let fav of favs){
    fav.addEventListener("click",function(){
            if (fav.style.color == "black"){
                fav.style.color = "red";
            }
            else{
                fav.style.color = "black";
            } 
        })
}
for(let plusbtn of plusbutns){
    plusbtn.addEventListener("click",function(){
        plusbtn.nextElementSibling.innerHTML++ ;
        total()

    })

}
for(let minusbtn of minusbutns){
    minusbtn.addEventListener("click",function(){
        minusbtn.previousElementSibling.innerHTML > 0 ?
        minusbtn.previousElementSibling.innerHTML -- : 
        null ;
        total()


    })
}
for(let i in trashbutton){
    trashbutton[i].addEventListener("click",function(){
        card[i].remove();
        total()
    })
}
function total(){
    let qte= Array.from(document.querySelectorAll(".qute"))
    let price=Array.from(document.querySelectorAll(".unitt-price"))
    let s = 0
    for (let i=0; i<price.length; i++){
        s = s + qte[i].innerHTML * price[i].innerHTML
    }
document.getElementById("total-price").innerHTML = s
}