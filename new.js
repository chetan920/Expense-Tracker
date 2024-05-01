
  
const product = document.getElementById("product");
const price = document.getElementById("price");
const btn = document.getElementById("btn");
const taskbox = document.getElementById("taskbox");
const arr = [];

window.addEventListener("load",function(){
  if (localStorage.getItem("arr")) {
    const parsedArr = JSON.parse(localStorage.getItem("arr"));
    display(parsedArr);
  }
});
  
btn.addEventListener("click",function(){

  if(product.value == "" && price == ""){
      alert("enter something..!");
      return;
  }
        
  const obj ={
        expenceProduct:product.value,
        expencePrice:price.value,
  }
  if(localStorage.getItem("arr")){
          const parsedArr = JSON.parse(localStorage.getItem(arr));
          parsedArr.push(obj);
          display(parsedArr);
          localStorage.setItem("arr",JSON.stringify(parsedArr))
  } else{
         arr.push(obj);
         localStorage.setItem("arr",JSON.stringify(arr));
         display(arr);
  }
});

function display(arr){
       taskbox.innerHTML = "";
       for(let i = 0; i < arr.length; i++){
            taskbox.innerHTML += `<div class = "java bounce-in-top text-focus-in";>
                <h1>${arr[i].expenceProduct}</h1
                <h3>${arr[i].expencePrice}</h3>
                <i class="fa-solid fa-trash" onclick="dlt(${i})"></i>
                <i class="fa-solid fa-pen" onclick="update(${i})"></i>
            </div>`
       }
       product.value ="";
       price.value ="";
}

function dlt(i){
     const parsedArr = JSON.parse(localStorage.getItem("arr"));
     parsedArr.splice(i,1);
     display(parsedArr);
     localStorage.setItem("arr",JSON.stringify(parsedArr));
}
function update(i){
       
  const updatedExpName = prompt("enter new value",arr[i].expenceProduct);
  const updatedExprice = prompt("enter new value",arr[i].expencePrice);

  const updateobj ={
             expenceProduct:updatedExpName,
             expencePrice:updatedExprice,
  }
  const parsedArr = JSON.parse(localStorage.getItem("arr"));
   parsedArr.splice(i,1,updateobj);
   display(parsedArr);
   localStorage.setItem("arr",JSON.stringify(parsedArr))
}
