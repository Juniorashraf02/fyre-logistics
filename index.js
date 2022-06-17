document.getElementById("btn-one").addEventListener("click", function(e){
    document.getElementById("form-one").style.left="-900px";
    document.getElementById("form-two").style.left="100px";
    document.getElementById("active-icon-phone").style.cssText="background-color: #BDAC4B; border-radius: 50%; padding: 10px 8px 10px 15px; width: 5%; "
});

document.getElementById("btn-two").addEventListener("click", function(e) {
    document.getElementById("form-one").style.left="-900px";
    document.getElementById("form-two").style.left="-800px";
    document.getElementById("form-three").style.left="100px";
    document.getElementById("active-icon-delivery").style.cssText="background-color: #BDAC4B; border-radius: 50%; padding: 10px 8px 6px 15px; width: 7%; "
});