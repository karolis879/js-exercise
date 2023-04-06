const vienas = 1;
const du = 2;
const trys = 3;

console.log (vienas);
console.log (du);
console.log (trys);

//-------------------------------

const pirmasSkaicius = 'vienetas';
const antrasSkaicius = 'dvejetas';
const treciasSkaicius = 'trejetas';

console.log(pirmasSkaicius)
console.log(antrasSkaicius)
console.log(treciasSkaicius)

//-------------------------

const pirmasSarasas = [1, 2, 3, 4, 5];
const antrasSarasas = [6, 7, 8, 9, 10];
const treciasSarasas = [11, 12, 13, 14, 15];

console.log(pirmasSarasas);
console.log(antrasSarasas);
console.log(treciasSarasas);

//---------------------------

const ketvirtasSarasas = ['vienas', 'du', 'trys', 'keturi', 'penki'];
const penktasSarasas = ['sesi', 'septyni', 'astuoni', 'devyni', 'desimt'];
const sestasSarasas = ['one', 'two', 'three', 'four', 'five'];

console.log(ketvirtasSarasas);
console.log(penktasSarasas);
console.log(sestasSarasas);

//--------------------------

console.clear()

const skaiciuSuma = vienas + du + trys;
console.log(skaiciuSuma);

//-------------------------

const zodziaiTarpas = pirmasSkaicius +' '+ antrasSkaicius +' '+ treciasSkaicius;
console.log(zodziaiTarpas)
console.log(`${pirmasSkaicius} ${antrasSkaicius} ${treciasSkaicius}`);

//-------------------------

const sarasuVertes = [0 - 1 + 2 - 3 + 4];

console.log(pirmasSarasas[sarasuVertes]);
console.log(antrasSarasas[sarasuVertes]);
console.log(treciasSarasas[sarasuVertes]);

//-------------------------

console.log(ketvirtasSarasas[4] + ', ', ketvirtasSarasas[3] + ', ', ketvirtasSarasas[2] + ', ', ketvirtasSarasas[1] + ', ', ketvirtasSarasas[0]);
console.log(penktasSarasas[4] + ', ', penktasSarasas[3] + ', ', penktasSarasas[2] + ', ', penktasSarasas[1] + ', ', penktasSarasas[0]);
console.log(sestasSarasas[4] + ', ', sestasSarasas[3] + ', ', sestasSarasas[2] + ', ', sestasSarasas[1] + ', ', sestasSarasas[0]);

//---Function------------

function tusciaFunkcija () {
    return false
}

console.log(tusciaFunkcija())

//-----------------------

function daugyba (nuo, iki) {
    const sandauga =  nuo * iki;
    return sandauga;
}

const skaicius1 = 2;
const skaicius2 = 3;
const skaicius3 = 4;

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

//------------------------

if (vienas > du) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (vienas < du) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (vienas === du) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (vienas !== du) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (vienas >= du) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (vienas <= du) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

//-------------------------------

const skaiciusIlgis1 = ('Skaiciaus kintamojo ilgis',pirmasSkaicius.length);
const skaiciusIlgis2 = ('Skaiciaus kintamojo ilgis',antrasSkaicius.length);
const skaiciusIlgis3 = ('Skaiciaus kintamojo ilgis',treciasSkaicius.length);

//-------------------------------

if (skaiciusIlgis1 > skaiciusIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (skaiciusIlgis1 < skaiciusIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (skaiciusIlgis1 === skaiciusIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (skaiciusIlgis1 !== skaiciusIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (skaiciusIlgis1 >= skaiciusIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (skaiciusIlgis1 <= skaiciusIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

//-----------------------------------

const sarasoIlgis1 = ('Sarašo ilgis',pirmasSarasas.length);
const sarasoIlgis2 = ('Sarašo ilgis',antrasSarasas.length);
const sarasoIlgis3 = ('Sarašo ilgis',treciasSarasas.length);

//----------------------------

if (sarasoIlgis1 > sarasoIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (sarasoIlgis1 < sarasoIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (sarasoIlgis1 === sarasoIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (sarasoIlgis1 !== sarasoIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (sarasoIlgis1 >= sarasoIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (sarasoIlgis1 <= sarasoIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

//FOR------------------------------

console.clear()

function sudetis (nuo, iki) {
let sum = 0;
    for (let i = nuo; i <= iki; i++) {
        sum += i
    }
    console.log(sum)
}

console.log(sudetis(0,0));
console.log(sudetis(0,4));
console.log(sudetis(574,815));
console.log(sudetis(-50,50));
console.log(sudetis(-70,30));

//--------------------------

const stringas = 'abcderf';

for (let i = stringas.length; i >= 0; i--) {
    console.log(stringas[i])
}

//-------------------------

console.clear()


function dalmuo (nuo, iki, dalyba) {
    let suma = [];
    for (let i = nuo; i <= iki; i++) {
    if (i % dalyba ===0) {
        suma.push(i)
    }
}
console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${dalyba} yra ${suma.length} vienetai.`)
}

console.log(dalmuo(0, 11, 3));
console.log(dalmuo(0, 11, 5));
console.log(dalmuo(0, 11, 7));

console.log(dalmuo(8, 31, 3));
console.log(dalmuo(8, 31, 5));
console.log(dalmuo(8, 31, 7));

console.log(dalmuo(-18, 18, 3));
console.log(dalmuo(-18, 18, 5));
console.log(dalmuo(-18, 18, 7));
