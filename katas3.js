function showResults(res) {
    const katas = document.getElementById('katas3');
    const conteudo = document.createElement('p');
    conteudo.innerText = res;
    conteudo.style.background= 'rgba(197, 239, 255, 0.562)';
    katas.appendChild(conteudo);

}
const katas = document.getElementById('katas3');
const titulo = document.createElement('h1');
titulo.innerText = 'JS - KATAS 3';
katas.appendChild(titulo);

// function subTitle(tit) {
// const k1 = document.getElementById("k1");
// const p = document.createElement('p');
// p.innerText = tit
// k1.appendChild(p)
// }

function kata1() {
    
    array = [];
    for (i = 1 ; i <= 25; i++) {
     array.push(" "+i);
    }
    
showResults(array);
return array;
}
kata1();


function kata2() {
    array = [];
    for (i = 25 ; i >= 1; i--) {
    array.push(" "+i);
    }
    showResults(array);
    return array;
}
(kata2())

function kata3() {
    array = [];
    for (i = -1 ; i >= -25; i--) {
    array.push(" "+i);
    }
    showResults(array);
    return array;
}
(kata3())

function kata4() {
    array = [];
    for (i = -25 ; i <= -1; i++) {
    array.push(" "+i);
    }
    showResults(array);
    return array;
}
(kata4())



function kata5() {
    array = [];
    for (i = 25 ; i >= -25; i=i-2) {
    array.push(" "+i);
    }
    showResults(array);
    return array;
}
(kata5())


function kata6() {
    array = [];
    for (i = 3 ; i <= 99; i=i+3) {
    array.push(" "+i);
    }
    showResults(array);
    return array;
}
(kata6())

function kata7() {
    array = [];
    for (i = 7 ; i <= 98; i=i+7) {
    array.push(" "+i);
    }
    showResults(array);
    return array;
}
(kata7())

function kata8() {
    array = [];
    for (i = 99 ; i >= 3; i=i-1) {
    if (i % 7 === 0){
        array.push(" "+i);
    }
    if (i % 3 === 0){
        array.push(" "+i);
    }
    }
    showResults(array);
    return array;
}
(kata8())

function kata9() {
    array = [];
    for (i = 5 ; i <= 100; i=i+5) {
    if (i % 2 != 0) {
        array.push(" "+i);
    }
    }
    showResults(array);
    return array;
}
(kata9())

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata10() {
    array = [];
    for(i=0;i<=sampleArray.length-1;i++){
        array.push(" "+sampleArray[i]);
    }
    showResults(array);
    return sampleArray;
}
(kata10());

function kata11() {
    array = [];
    for(i=0;i<=sampleArray.length-1;i++){
        if (sampleArray[i] % 2 == 0) {
        array.push(" "+sampleArray[i]);}
    }
    showResults(array);
    return array;
}
(kata11());


function kata12() {
    array = [];
    for(i=0;i<=sampleArray.length-1;i++){
        if (sampleArray[i] % 2 != 0) {
        array.push(" "+sampleArray[i]);}
    }
    showResults(array);
    return array;
}
(kata12());

function kata13() {
    array = [];
    for(i=0;i<=sampleArray.length-1;i++){
        if (sampleArray[i] % 8 == 0) {
        array.push(" "+sampleArray[i]);}
    }
    showResults(array);
    return array;
}
(kata13());

function kata14() {
    array = [];
    for(i=0;i<=sampleArray.length-1;i++){
        array.push(" "+sampleArray[i]*sampleArray[i]);
    }
    showResults(array);
    return array;
}
(kata14());

function kata15() {
    sum = 0;
    for (i = 0 ; i <= 20; i++) {
     sum+=i;
    }
showResults(sum);
return sum;
}
kata15();

function kata16() {
    sum = 0;
    for(i=0;i<=sampleArray.length-1;i++){
    sum+=sampleArray[i];
    }
showResults(sum);
return sum;
}
kata16();

function kata17() {
    let min = 999
    for(i=0;i<=sampleArray.length-1;i++){
    if (sampleArray[i] < min)
    min = sampleArray[i];
    }
showResults(min);
return min;
}
kata17();


function kata18() {
    let max = 0
    for(i=0;i<=sampleArray.length-1;i++){
    if (sampleArray[i] > max)
    max = sampleArray[i];
    }
showResults(max);
return max;
}
kata18();


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
