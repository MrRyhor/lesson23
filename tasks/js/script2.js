function isProductFitForUse() {
    const date = new Date(document.getElementById('inp1').value)
    const expDays = parseInt(document.getElementById('inp2').value)
    const expDate = new Date(date.setDate(date.getDate() + expDays))
    if (new Date() > expDate) document.querySelector('.result-date').innerText = 'Продукт просрочен'
    else document.querySelector('.result-date').innerText = 'Продукт годен'
}

document.getElementById('btn').onclick = isProductFitForUse