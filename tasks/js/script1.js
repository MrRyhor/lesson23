function getBackFromVacation() {
    const vacationDays = parseInt(document.getElementById('inp').value)
    const date = new Date()
    date.setDate(date.getDate() + vacationDays)
    document.querySelector('.result-date').innerText = `Вернуться: ${date.toLocaleDateString()}`   
}

document.getElementById('btn').onclick = getBackFromVacation