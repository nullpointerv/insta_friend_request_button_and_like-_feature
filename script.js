var content =document.querySelector("#content")
var heart =document.querySelector("i")
content.addEventListener("dblclick",function(){
    heart.style.transform="translate(-50%,-50%) scale(1)"
    heart.style.opacity=0.8;
setTimeout(function(){
     heart.style.opacity=0;

},1000);
setTimeout(function(){
    heart.style.transform="translate(-50%,-50%) scale(1)"


},1000);

});
