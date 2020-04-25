class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}

class Cuadrado{
    constructor(base){
        this.base=base;
    }

    area(){
        return this.base*this.base;
    }
}

class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}

//Conectar con el html
const btn1=document.getElementById("btnRectangulo");

//Aqui debemos asociarle el comportamiento "click"
btn1.addEventListener('click',()=>{

    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    //pasar la info de text a numerico
    base=parseInt(base);
    altura=parseInt(altura);
    
    //ahora crearemos nuestro rectangulo
    let rect1=new Rectangulo (base,altura);

    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>RECTANGULO</p>";
    divRes.innerHTML+="<p>Base: " + rect1.base + " Altura: " + rect1.altura + "</p>";
    divRes.innerHTML+="<p>AREA = " + rect1.area() + "</p>";

    //divRes.innerHTML="<p>RECTANGULO -> Base: " + rect1.base + " Altura: " + rect1.altura + " AREA = " + rect1.area() + "</p>";
});

//boton cuadrado
const btn2=document.getElementById("btnCuadrado");
btn2.addEventListener('click',()=>{ //asociar el comportamiendo al boton

    let base=document.getElementById("base").value;

    //pasar la info de text a numerico
    base=parseInt(base);

    //crear la figura
    let cuad1 = new Cuadrado(base);
   
    //imprimir la info
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>CUADRADO</p>";
    divRes.innerHTML+="<p>Lado: " + cuad1.base + "</p>";
    divRes.innerHTML+="<p>AREA = " + cuad1.area() + "</p>";
});

//boton triangulo
const btn3=document.getElementById("btnTriangulo");
btn3.addEventListener('click',()=>{ //asociar el comportamiendo al boton

    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

    //pasar la info de text a numerico
    base=parseInt(base);
    altura=parseInt(altura);

    //crear la figura
    let tria1 = new Triangulo(base,altura);
   
    //imprimir la info
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>TRIANGULO</p>";
    divRes.innerHTML+="<p>Base: " + tria1.base + " Altura: " + tria1.altura + "</p>";
    divRes.innerHTML+="<p>AREA = " + tria1.area() + "</p>";
    //divRes.innerHTML="<p>TRIANGULO -> Base: " + tria1.base + " Altura: " + tria1.altura + " AREA = " + tria1.area() + "</p>";
    
});





