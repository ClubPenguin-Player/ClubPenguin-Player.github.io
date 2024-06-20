
/*for(let i = 1; i<41; i++){
    console.log(i);
}*/

/*let contador = 0;

while(contador < 30){
    console.log(contador + 1);
    contador++;
}*/

/*let contador2 = 0;

do{
    console.log(contador2 +1);
    contador2++;
}
while(contador2 < 30);*/

/*let contador3 = 0;

while(contador3 < 30){
    if(contador3!== 20){
        console.log(contador3 +1);
        contador3++;
    }
    else{
        break;
    }
}*/

/*let contador4 = 0;
while(contador4 < 30){

    if(contador4 !== 15){
        number = contador4;
        console.log(number);   
        contador4++;   
    }
    else{
        contador4++; 
        continue;    
    }
}*/

let num;
num = prompt("Ingrese su número del 1 al 3");

switch(parseInt(num)){
    case 1:
        console.log("Has ingresado el numero 1");
        break;
        case 2:
            console.log("Has ingresado el numero 2");
        break;
        case 3:
            console.log("Has ingresado el numero 3");
        break;
        default:
            console.log("ERROR :]");
    
}
