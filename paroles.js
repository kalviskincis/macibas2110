let vardiIpasibas = ["Sarkanais", "Plakanais", "Optimistiskais", "Lieliskais", "Slepenais", "Kantainais", "Smagais", "Aukstais", "Neredzamais", "Galaktiskais"]
let vardiLietvardi = ["Rupucis", "Pekausis", "Projektors", "Mikumauss", "Autobuss", "Kabelis", "Skapis", "Zilonis", "Suns", "Redaktors"]
let vardiDarbibas = ["Lido", "Lec", "Skrien", "Nav", "Ir", "Pazudis", "Aizmieg", "Dejo", "Izolejas", "Svin"]

let aizstatKo = ["a", "s", "i"]
let aizstatAr = ["@", "$", "!"]

let rindas = document.querySelector('.rindas');

// console.log(cikParoles, ciparuSkaits);

function nr(maxCipars) {
    let numurs = Math.floor(Math.random() * maxCipars);
    return numurs;
}

function aizstat(va) {
    if (va.includes("a")) {
        va = va.replace("a", "@");
    }
    if (va.includes("s")) {
        va = va.replace("s", "$")
    }
    

    if (va.includes("i")) {
        va = va.replace("i", "!")
    }

    return va;

}

function generet() {

    let cikParoles = document.getElementById("paroluSkaits").value;
    let ciparuSkaits = document.getElementById("ciparuSkaits").value;
    let ieklautVardu = document.getElementById("ieklaut").value;

    rindas.innerHTML = '';

    for (let i = 0; i < cikParoles; i++) {
        let ipasiba = vardiIpasibas[nr(vardiIpasibas.length)];
        let vards = vardiLietvardi[nr(vardiLietvardi.length)];
        let darbiba = vardiDarbibas[nr(vardiIpasibas.length)];
        let cipars = genereSkaitli(ciparuSkaits);
        if (ieklautVardu.length > 0) {
            vards += ieklautVardu;
        }
        ipasiba = aizstat(ipasiba);
        vards = aizstat(vards);
        darbiba = aizstat(darbiba);



        let parole = ipasiba + vards + darbiba + cipars;
        // console.log(ipasiba + vards + darbiba + cipars);

        rindas.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${parole}</td>
        </tr>    
        `;
    }
}


function genereSkaitli(cik) {
    let sk = String();
    for (let i = 0; i < cik; i++) {
        sk += Math.floor(Math.random() * 10);
    }
    return sk;
}



