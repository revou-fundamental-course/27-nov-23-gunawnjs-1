function hitungLuas() {
    const answer = document.getElementById('dijawabLuas');
    const alasSegitiga = document.getElementById('alas').value;
    const tinggiSegitiga = document.getElementById('tinggi').value;
    const luas = 0.5 * alasSegitiga * tinggiSegitiga;

    return answer.innerHTML = `
        <p>L = 1/2 x a x t</p>
        <p>L = 1/2 x ${alasSegitiga} x ${tinggiSegitiga}</p>
        <p>L = ${luas}</p>
    `;
}

function resetLuasBtn(){
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('dijawabLuas').innerHTML = '';
}

function hitungKeliling(){
    const answer = document.getElementById('dijawabKeliling');
    const sisiA = document.getElementById('sisiA').value;
    const sisiB = document.getElementById('sisiB').value;
    const sisiC = document.getElementById('sisiC').value;
    
    const sides = ['sisiA', 'sisiB', 'sisiC'];
    
    let keliling = 0;

    for (const side of sides) {
        const inputValue = +document.getElementById(side).value;
        keliling += inputValue;
    }

    return answer.innerHTML = `
        <p>K = S1 + S2 + S3</p>
        <p>K = ${sisiA} + ${sisiB} + ${sisiC}</p>
        <p>K = ${keliling}</p>
    `;
}

function resetKelBtn(){
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('dijawabKeliling').innerHTML = '';
}
