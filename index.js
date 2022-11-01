document.querySelector("#confirm").addEventListener("click",()=>{
    if(document.querySelector("#month").value<=12 && document.querySelector("#month").value>0 && document.querySelector(".number").value.length===17 && Number(document.querySelector(".number").value) && Number(document.querySelector("#year").value) && Number(document.querySelector("#month").value)){
        document.querySelector("#first-4").innerHTML = document.querySelector(".number").value.slice(0,4)
        document.querySelector("#second-4").innerHTML = document.querySelector(".number").value.slice(4,8)
        document.querySelector("#third-4").innerHTML = document.querySelector(".number").value.slice(8,12)
        document.querySelector("#forth-4").innerHTML = document.querySelector(".number").value.slice(12,16)
        document.querySelector("#name").innerHTML = document.querySelector(".name").value
        document.querySelector("#mon").innerHTML = document.querySelector("#month").value
        document.querySelector("#ye").innerHTML = document.querySelector("#year").value
        document.querySelector(".cvc").innerHTML = document.querySelector("#cvc").value
        document.querySelector("#hintrr").classList.add("none")
        document.querySelector("#hintce").classList.add("none")
        document.querySelector("#hintre").classList.add("none")
        document.querySelector("#hintbr").classList.add("none")

        document.querySelector("form").classList.add("none")
        document.querySelector("footer").classList.remove("none")
        document.querySelector("footer").classList.add("footer")


    }else{
    document.querySelector("#hintrr").classList.remove("none")
    document.querySelector("#hintce").classList.remove("none")
    document.querySelector("#hintre").classList.remove("none")
    document.querySelector("#hintbr").classList.remove("none")
    }

    
})

document.querySelector("#continue").addEventListener("click",()=>{
    document.querySelector(".name").value=null
    document.querySelector("#month").value=null
    document.querySelector(".number").value=null
    document.querySelector("#year").value=null
    document.querySelector("#cvc").value=null
    document.querySelector("form").classList.remove("none")
    document.querySelector("footer").classList.add("none")
    document.querySelector("footer").classList.remove("footer")
})