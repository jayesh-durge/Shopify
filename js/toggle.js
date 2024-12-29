let toggle=document.querySelector(".hambergur");
toggle.addEventListener("click", ()=>{
    if(document.querySelector(".toggle").classList.contains("show")){
        document.querySelector(".toggle").classList.remove("show");
    }
    else{
        document.querySelector(".toggle").classList.add("show");
    }
});