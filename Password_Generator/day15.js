let pass=document.getElementById("pass");
let btn=document.getElementById("submit");
let range=document.getElementById("range");
let passlength=document.getElementById("passwordLength");
let char=document.getElementById("check1");
let num=document.getElementById("check2");
let copied=document.getElementById("copy");
let special='@#$&*/-+';
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower='abcdefghizklmnopqrstuvwxyz'
let number='0123456789'

btn.addEventListener("click", function(e){
    e.preventDefault();
    length()
    generate()
})

    copied.addEventListener("click",function(){
     navigator.clipboard.writeText(pass.value)
     copied.innerText="copied"
     copied.style.backgroundColor="orange"
     setTimeout(() => {
        copied.innerText="copy"
        copied.style.backgroundColor="white"
     }, 600);

    })
range.addEventListener("input", length)
function length() { 
passlength.innerHTML=range.value;
}
function generate(){
    pass.value=""
    let string=upper+lower;
  if(char.checked){
    string+=special
  }
  if(num.checked){
   string+=number
  }
  for(let i=0;i<range.value;i++){
    let index=Math.floor(Math.random()*string.length)
    pass.value+=string[index]
  }

}