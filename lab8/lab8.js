
function escribe(text){
    const filesystem = require('fs');
    filesystem.writeFileSync('archivo.txt', text);

}

function promedio (arr){
    let result =0 , i;
    for( i = 0; i< arr.length; i++) {
        result += arr[i];
    }
    return result/arr.length;
}

function binarySearch( arr, n ) {
    let low = 0, high = arr.length-1, mid;
    while (low <= high){
        mid =  Math.floor((low + high) / 2);
        if (arr[mid] == n){
            return mid;
        }
        else if (n < arr[mid] ){
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}

escribe("JARE 2021")

console.log(promedio([2,2,3]))

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12],7))

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("hola desde el servidor");
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<html>");
    response.write('<head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Lab 1</title> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"> </head><body> <div class="container-md"> <h1 class="text-primary"> Lab1 </h1> <h2 class="text-primary">Sobre mi</h2> <div class="row"> <div class="col-sm"><img class="img-fluid" src="https://newfanzoneblog.files.wordpress.com/2016/08/ma-long-rio-2016-olympic-games-table-tennis-champion-ittf.jpg" alt="Ma long"></div><div class="col-sm">Me gusta mucho hacer deportes en especial futbol y tenis de mesa He tenido experiencia en el desarollo en modulos de bakcend de un ERP y he trabajado en el desarrollo de un videojuego 3D en unity Me siento listo para desarrollar una buena solucion al problema que se nos planteo me encataria ayudar en la gestion del proyecto y administracion de procesos de mi equipo asi como implementacion como fullstack Espero a travez de este curso poder llevar a la pratica nuestor conocimientos de requerimientos y desarrolo de software en especial me gustaria mejorar mis softskill necesarias para un buen proyecto que cumpla con las nesesidades reales del cliente</div></div></div><div class="container-md"> <p id="mi-nombre"> Jorge Alan Ramírez Elías &nbsp A01701350 &nbsp&nbsp <br>LinkedIn: &nbsp&nbsp <a href="https://www.linkedin.com/in/jorge-alan-ram%C3%ADrez-el%C3%ADas-69b2b7172/"> <img class="rounded-circle" src="https://media-exp1.licdn.com/dms/image/C5603AQFDUDku_gxY3A/profile-displayphoto-shrink_400_400/0/1613095871693?e=1618444800&v=beta&t=zVIB2flJGcKOLKwmsW8IYVTJuttckRHVixBSEdbcjAg" width="70" height="70" alt="LinkedIn logo" ></a></p><h2 class="text-primary" >Preguntas:</h2> <h4 class="text-info" > ¿Cuál es la diferencia entre Internet y la World Wide Web?</h4> <p> El concepto de internet es una red global de ordenadores mientras que la WWW es un sistema de informacion para el almacenamiento de la imformacion de las paginas web</p><h4 class="text-info" >¿Cuáles son las partes de un URL?</h4> <ol> <li>protocolo</li><li>subdominio</li><li>dominio</li></ol> <h4 class="text-info" >¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h4> <dl> <dt>GET:</dt> <dd>Se utiliza para sacar información de una fuente específica</dd> <dt>HEAD:</dt> <dd>Se utiliza para regresar solo la información contenida en el tag head </dd> <dt>POST:</dt> <dd>Se utiliza para enviar información a un recurso de el servidor</dd> <dt>PUT:</dt> <dd>Se utiliza para crer un nuevo recurso en el servidor con la informacion contenida en body en caso de ya existir lo replaza con el que acaba de crear</dd> <dt>PATCH:</dt> <dd>Se utiliza para hacer modificaciones a un recurso especifico en el servidor</dd> <dt>DELETE:</dt> <dd>Se utiliza para borrar un recurso especifico en el servidor</dd> </dl> <h4 class="text-info" >¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</h4> <p> Se utilizaria el metodo post sin embargo esto no es seguro y es po esto que debe uliizarse algoritmos de encritacion o protocolo https</p><h4 class="text-info" >¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h4> <p>GET</p><h4 class="text-info" >Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h4> <p>significa que la rquest fue exitosa</p><h4 class="text-info" >¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</h4> <p>no, porque esta accediendo a algo que no deberia</p><h4 class="text-info" >¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h4> <p>si, porque este error indica un error de el lado del servidor es decir del lado del codigo completamente ajeno al usuario</p><h4 class="text-info" >¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</h4> <p>ya no se recomienda su uso por cuestiones de soporte</p><h4 class="text-info" >¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</h4> <ul> <li>Que html5 está dividido en capas lo cual introduce nuevas tecnologías para el fromato de una página como css</li><li>En html5 se introduce un nuevo atributo para la etiqueta: <br>< meta>: < meta charset=”UTF-8″></li></ul> <h4 class="text-info" >¿Qué componentes de estructura y estilo tiene una tabla?</h4> <p>table row,table header ,table data etiquetas semanticas: table head, table body,table footer </p><h4 class="text-info" >¿Cuáles son los principales controles de una forma HTML5?</h4> <p>Los principales controles son button , label,legend, input</p><h4 class="text-info" >¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas)</h4> <p>Mi navegador (Chrome Dev 88.0.4324.150 on Windows 10) recibió una calificación de 476/555 es especialmente deficiente en la categoría peer by peer con 22/45 puntos</p><h3>Sobre el ciclo de vida y desarrollo de los sistemas de información:</h3> <h4 class="text-info" >¿Cuál es el ciclo de vida de los sistemas de información?</h4> <ol> <li>Fase de planificación: <br>Se define el alcance del proyecto y se decide como será implementado</li><li>Fase de análisis: <br>Se analizan las necesidades del cliente y se establecen requisitos</li><li>Fase de diseño: <br>Se identifican posibles soluciones y se escoge la mejor</li><li>Fase de desarrollo: <br>Desarrollo de requerimientos funcionales</li><li>Fase de integración y periodo de pruebas: <br>Se valida el software</li><li>Fase de implementación: <br>Se instalan todas las herramientas para que el cliente pueda usarlas</li><li>Fase de mantenimiento; <br>Soporte y corrección de bugs (errores)</li></ol> <h4 class="text-info" >¿Cuál es el ciclo de desarrollo de sistemas de información?</h4> <ol> <li>Planeacion</li><li>Definir los requisitos</li><li>El diseño y prototipado</li><li>Fase de desarrollo y pruebas</li><li>Despliege</li><li>Soporte</li><li>Disposicion</li></ol> <hr> </div><div class="container-md"> <h2 class="text-primary" id="titulo"> Preguntas: </h2> <h4 class="text-info" > Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </h4> <p>En general es mejor evitar el uso de esta palabra reservada almenos de que se use para pruebas temporales</p><h4 class="text-info" >Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</h4> <p>es importante cuidar la posicion y tamaño de la imagen para que se ajustena decuadamente a la pagina</p><h4 class="text-info" >Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</h4> <p> la mejor alternativa es utilizar px pue es una unidad estandarizada o % pues es una medida dependiende del dispositivo </p><h4 class="text-info" >¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</h4> <p>Pq es un documento mucho mas ligero y rapido de parsear para los navegadores</p></div><footer> <p class="container-sm"> Made usig <a class="link-success" href="https://code.visualstudio.com/">VS code</a> as editor</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt=""> </footer> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script> <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script></body>')
    response.write("</html>");
    response.end();
});

server.listen(3000);

