let cuantoLevanta = parseFloat(prompt('Cuanto peso levantas en banco plano BRO?'));

if(cuantoLevanta <= 30){
    alert('A TOMAR LA SOPA...')
}else if(cuantoLevanta <= 45 && cuantoLevanta > 30){
    alert('MMM. Te falta, a seguir metiendole.')
}else if(cuantoLevanta <= 70 && cuantoLevanta > 45){
    alert('Segui asi REY!')
}else if(cuantoLevanta > 70){
    alert('para TORO. DEJAS AL RESTO DEL GYM SIN DISCOS. ESTAS ENORME.')
}