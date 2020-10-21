const vardi = ['Anna', 'Maija', 'Jānis', 'Zane', 'Mikus'];
const balvas = ['ledusskapi', 'Tosteris', 'foto', 'Dators'];
const naudaKopa = 1000000;

let uzvaretajuSkaits = 3;

let rindas = document.querySelector('.rindas');
// rindas.innerHTML = 'Aiaiaia';

function randFunc(maxCipars) {
    let random1 = Math.floor(Math.random() * maxCipars);
    return random1;
}

function izlozet() {
    rindas.innerHTML = '';

    for (let i = 0; i < uzvaretajuSkaits; i++) {

        let rand = randFunc(vardi.length);

        // let rand = Math.random() * vardi.length;
        // rand = Math.floor(rand);

        let uzvaretajs = vardi[rand];
        console.log(vardi[uzvaretajs]);

        rindas.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${uzvaretajs}</td>
        </tr>    
        `;
    }
} // beidzas izlozet()


