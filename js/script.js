
function Borrar(boton,item){
    boton.innerHTML="Borrar";
    boton.onclick = () =>{
    item.innerHTML ="";
    boton.innerHTML ="Run";
    }
}

function generaTabla(boton){
   let  num = Number(prompt("Dame un numero","Valor por defecto"));
   let tabla = document.getElementById("generaTabla");
   for(let cont = 1; cont <= num; cont ++){
    tabla.innerHTML += "<tr> <td>" + cont +"</td> <td>"+  Math.pow(cont,2) +"</td><td>"+ Math.pow(cont,3) +"</td></tr>";
   }
   Borrar(boton, tabla);
}

function randomSum(boton){
    let timer = new Date();
    let a = 0,b  = 0;
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    let start = timer.getSeconds();
    let  num = Number(prompt("Dame la suma  de  " + a + " + " + b,"pon aqui el resustado de la suma"));
    timer2 = new Date();
    let end = timer2.getSeconds();
    let  text = document.getElementById("randomSum");
    if (num  == (a + b)) text.innerHTML = "Correcto";
    else text.innerHTML = "Tu respuesta es incorrecta";
    text.innerHTML += "<br> te tomo "+ (end -start)+" segundos dar una respuesta";
    Borrar(boton, text);
}
function contador(boton,arr){
    let zeros = 0,positivos = 0,negativos = 0;
    let output = document.getElementById("contador");
    for(let i = 0; i< arr.length;i++){
        if (arr[i] == 0) zeros++;
        else if (arr[i] < 0) negativos++;
        else positivos ++;
    }
    output.innerHTML = "zeros: "+ zeros+" negativos: "+negativos+ " positivos: "+ positivos;
    Borrar(boton,output);
}

function promedios(boton,matrix){
    let average = 0,output = document.getElementById("promedios");
    output.innerHTML = "[";
    for(let i = 0; i< matrix.length; i++){
        for(let j = 0; j< matrix.length; j++){
            average += matrix[i][j];
        }  
        if(i<matrix.length-1)output.innerHTML += " "+average/matrix.length +",";
        else output.innerHTML += " "+average/matrix.length ;
        average = 0;
    }
    output.innerHTML += "]"; 
    Borrar(boton,output);
}
function inverso(boton,num){
    let output = document.getElementById("inverso");
    let arr = Array.from(num.toString()), cadena="";
    console.log(arr);
    for(let i = arr.length-1; i >= 0;i--){
        cadena+=arr[i];
    }
    output.innerHTML = cadena;
    Borrar(boton,output);
}
function bubbleSort(boton,arr){
    let aux;
    let output = document.getElementById("bubbleSort");
    for(let i = arr.length; i>0;i--){
        for(let j = 0;j< arr.length;j++){
            if(arr[j]>arr[j+1]){
                aux = arr[j];
                arr[j] = arr [j+1];
                arr[j+1] = aux;
            }
        }
    }
    output.innerHTML= arr;
    Borrar(boton,output);
}