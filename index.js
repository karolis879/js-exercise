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

function daugyba (a, b) {
    const sandauga =  a * b;
    return sandauga;
}

const skaicius1 = 2;
const skaicius2 = 3;
const skaicius3 = 4;

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
