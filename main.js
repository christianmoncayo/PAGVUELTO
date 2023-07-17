class Numeros{
    limpiar(){
      document.getElementById('num').value = ""  
      document.getElementById('multi').value = ""  
      document.getElementById('resp').textContent = ""
      document.getElementById('cost').textContent = ""    
    }
    vuelto(){
        let precio = parseFloat(document.getElementById("precio").value);
        let cantidad = parseInt(document.getElementById("Cantidad").value);
        let pago = parseInt(document.getElementById("pago").value);
        let costoInput = document.getElementById("costo");
        let resp = document.getElementById("resp");
      
        let costo = precio * cantidad;
        let costoT = 0;
      
        let ivaCheckbox = document.getElementById("iva");
        let iva = 0;
      
        if (ivaCheckbox.checked) {
          iva = costo * 0.12;
          costoT = costo + iva;
        } else {
          costoT = costo 
        }
      
        let vuelto = pago - costoT;
        resp.textContent = "Vuelto: " + vuelto.toFixed(2);
      
        costoInput.value = costoT.toFixed(2);
    }
    multiplo(){
       let num = document.getElementById('num').value 
       let mul = document.getElementById('multi').value
       num = parseInt(num) 
       mul = parseInt(mul) 
       let resp = document.getElementById('resp') 
       if (num % mul == 0) {
          resp.textContent = `${mul} Es multiplo de ${num}`
       } else {
         resp.textContent = `${mul} No es multiplo de ${num}`
       }
    //    console.log(num,num.id,num.value)
    //    console.log(mul)
    //    console.log(resp)
    //    console.log(resp.textContent)
    
    }
    Divisores(){
        let divisores=[]
        let num = document.getElementById('num').value 
        num = parseInt(num) 
        let resp = document.getElementById('resp') 
        for(let i=1; i< num; i++) {
             if(num % i ==0){
                divisores.push(i)
                resp.textContent = "Los divisores de " + num + " son: " + divisores.join(", ")
             }
        } 
    }
    sumaDivisores(){
        let divisor=0
        let num = document.getElementById('num').value 
        num = parseInt(num) 
        let resp = document.getElementById('resp')
        for (let i=1; i<num; i++){
            if(num % i ==0){
                divisor+=i //divisor=divisor+i
                resp.textContent = "La suma de los divisores de " + num + " es: " + divisor
            }
        }
    }
    cantidadDivisores(){
        let cantdiv=0
        let num = document.getElementById('num').value 
        num = parseInt(num) 
        let resp = document.getElementById('resp')
        for(let i=1; i<num; i++){
            if(num % i ==0){
             cantdiv=cantdiv+1
             resp.textContent = "La cantidad de los divisores de " + num + " es: " + cantdiv
            }
        }
    }
    Perfecto(){
        let sumaper=0
        let num = document.getElementById('num').value 
        num = parseInt(num) 
        let resp = document.getElementById('resp')
        for(let i=1; i<num; i++){
if(num % i==0){
    sumaper=sumaper+i
}
if(sumaper==num){
    resp.textContent = num + " Es perfecto"
}
else{
    resp.textContent = num + " No es perfecto"
}
        }
    }
    amigo(){
        let suma1=0
        let suma2=0
        let num1 = document.getElementById('num1').value 
        num1 = parseInt(num1)
        let num2 = document.getElementById('num2').value 
        num2 = parseInt(num2) 
        let resp = document.getElementById('resp')
        for(let i=1; i<num1;i++){
            if(num1 % i ==0){
                suma1=suma1+i
            }
        }
        for(let i=1; i<num2;i++){
            if(num2 % i ==0){
                suma2=suma2+i
            }
        }
        if(suma1==num2 && suma2==num1){
            resp.textContent = " LOS NUMEROS " + num1 + " Y " + num2 + " SON AMIGOS "
        }else{
            resp.textContent = " LOS NUMEROS " + num1 + " Y " + num2 + " NO SON AMIGOS "
        }


    }
    primo(){
        let divisor=0
        let num = document.getElementById('num').value 
        num = parseInt(num) 
        let resp = document.getElementById('resp')
        for(let i=1; i<=num; i++){
if(num % i==0){
    divisor=divisor+1
}
if(divisor==2){
    resp.textContent = num + " Es primo"
}
else{
    resp.textContent = num + " No es primo"
}
        }
    }
   primogemelo(){
    let div1=0
    let div2=0
    let num1 = document.getElementById('num1').value 
    num1 = parseInt(num1) 
    let num2 = document.getElementById('num2').value 
    num2 = parseInt(num2) 
    let resp = document.getElementById('resp')
    for(let i=1; i<=num1; i++){
     if(num1 % i==0){
         div1=div1+1
}
   }
   for(let i=1; i<=num2; i++){
    if(num2 % i==0){
        div2=div2+1
}
  }
  if(div1==div2){
    resp.textContent = " LOS NUMEROS " + num1 + " Y " + num2 + " SON PRIMOS GEMELOS "
}else{
    resp.textContent = " LOS NUMEROS " + num1 + " Y " + num2 + " NO SON PRIMOS GEMELOS "
  }
}
numeroinvertido(){
    let num = parseInt(document.getElementById("num").value)
    let resp = document.getElementById('resp')
      let numInvertido = 0
      
      while (num > 0) {
        numInvertido = numInvertido * 10 + (num % 10)
        num = Math.floor(num / 10)
        resp.textContent = " SU NUMERO INVERTIDO ES : " + numInvertido
      }
}
cantidadDigito(){
   
    let num = document.getElementById('num').value 
    let resp = document.getElementById('resp')
   let cantidigito= parseInt(num.length)
    resp.textContent = " El numeros tiene : " + cantidigito + " digitos "
}
factorial(){
    let num = document.getElementById('num').value 
    let resp = document.getElementById('resp')
    let factorial=1
    if(num>=0){
        for(let i=1; i<=num; i++){
        factorial*=i 
        }
        resp.textContent = " el factorial de " + num + " es: " + factorial
    }else{
    resp.textContent = " El numero ingresado no es valido " 
    }
}
exponente(){
    let num=document.getElementById("num").value
    let expo=document.getElementById("expo").value
    let resp=document.getElementById("resp")
    let resultado=1
    for(let i =0; i<expo ; i++){
        resultado=resultado*num  
    resp.textContent=`el resultado es ${resultado}`
}
}
tablamultiplicar(){
    let num=document.getElementById("num").value
    num=parseInt(num)
    let resp=document.getElementById("resp")
    let resultado = []
    let multi=0
    for(let i =1 ; i<=12; i++){
        multi=num*i
        resultado+=num+"x"+i+"="+multi+ `\n`
    }
    resp.textContent=`${resultado}`
}
    

    Fibonaci(){
      let numfibonaci = [0, 1]
      let num = document.getElementById('num').value 
      num = parseInt(num) 
      let resp = document.getElementById('resp')
       for (let i = 2; i < num; i++) {
        numfibonaci[i] = numfibonaci[i - 1] + numfibonaci[i - 2]
      }

      resp.textContent = "La serie de Fibonacci para el número " + num + " es: " + numfibonaci.slice(0, num + 1).join(', ')

    } 
    //     let num= document.getElementById('num').value 
//     let resp = document.getElementById('resp')
//     let a=0,b=1,c=1,cont=3
//     while (cont < num){
//         a=b;b=c;c = a+b
//         resp.textContent =c
//         cont=cont +1
//        }s
}
const numero = new Numeros()
//numero.multiplo()