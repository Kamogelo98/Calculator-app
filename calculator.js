let result =document.getElementById("inputext");
let resulttwo =document.getElementById("inputexttwo");

let calculate = (number)=>{
    result.value +=number;
}

function clr(){
  result.value =" ";
  resulttwo.value= " ";
}

function del(){
  result.value =result.value.slice(0,-1);
  resulttwo.value =resulttwo.value.slice(0,-10);
}


let Result=() =>{
     try{
       resulttwo.value = eval(result.value)
     }
     catch(err){
       alert("Error")
     }
}

