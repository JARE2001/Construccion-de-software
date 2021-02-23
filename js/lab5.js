function validaPassword(){
    let pass,passC, spaces;
    pass = document.getElementById("password").value
    passC = document.getElementById("passwordConfirm").value
    for(let i = 0; i < pass.length ;i++){
        if(pass[i] == " ") spaces = true; 
    }
    
    if(pass != passC){
        alert("las contraseñas no son iguales")
    }
    else if (spaces) alert("la contraseña no puede contener espacios en blanco")
    else if ( pass.length < 8) alert("tu contraseña debe tener almenos 8 caracteres")
    else alert("contraseñas son correspondientes")
}

function aumentar(key){
    if (key == "f")cantidad =document.getElementById("falda");
    else if (key == "c")cantidad =document.getElementById("cazadora");
    cantidad.innerHTML = Number(cantidad.innerHTML)+1;
}
function disminuir(key){
    if (key == "f")cantidad =document.getElementById("falda");
    else if (key == "c")cantidad =document.getElementById("cazadora");
    if (cantidad.innerHTML > 0)
    cantidad.innerHTML = Number(cantidad.innerHTML)-1;
    else alert("no puedes comprar menos de 0 articulos")
}

function calcularTotal(){
    let cFaldas,cCazadora,total,sTF,sTC,subtotal;

    cFaldas = Number(document.getElementById("falda").innerHTML )
    cCazadora = Number(document.getElementById("cazadora").innerHTML )
    total = document.getElementById("Total")
    sTF=cFaldas*189;
    sTC = cCazadora*200;
    subtotal=sTF +sTC; 
    total.innerHTML = "<p onmousedown ='highlight(this)'>Cantidad Faldas: "+ cFaldas+"  Total faldas: "+sTF+"</p>";
    total.innerHTML +="<p onmousedown ='highlight(this)'>Cantidad Cazadoras: "+ cCazadora+"  Total cazadoras: "+sTC+"</p>";

    total.innerHTML += "Subtotal: "+ subtotal+ "<br><hr> ";
    total.innerHTML += "<p onmousemove ='descripcion(this)'>  IVA: "+ (subtotal*.16)+ " </p> <br><hr>";
    total.innerHTML += "Total: "+ (subtotal*.16 + subtotal);
} 

 function crecer(boton){
    if(boton.style.fontSize == "50px")
        boton.style.fontSize = "20px";
    else boton.style.fontSize = "50px";
 }

 function highlight(element){
    if(element.style.backgroundColor != "yellow")element.style.backgroundColor = "yellow";
    else element.style.backgroundColor = "";

 }

 function descripcion(element){
    element.innerHTML = "<div> El iva se calcula multiplicando el subtotal por .16</div>"
 }