const insericiTask = (event) => {
        const inserito = document.getElementById('form-list').value    
        if (event.key === 'Enter') {
            if (inserito === '') {   
            } else {
            const newTask = document.createElement('div')
            newTask.classList.add('template')
            newTask.innerText = inserito
            newTask.onclick = selezionaTask
            document.getElementById('list').appendChild(newTask)
            document.getElementById('form-list').value = ''
            }
        }
}

function selezionaTask (event) {
    const taskSelezionato = event.target
    taskSelezionato.classList.toggle("selected")
}

const elimina = () => {
    const padre = document.getElementById('list')
    const elementiDaRimuovere = document.querySelectorAll('.selected')
    elementiDaRimuovere.forEach((element) => padre.removeChild(element))
}