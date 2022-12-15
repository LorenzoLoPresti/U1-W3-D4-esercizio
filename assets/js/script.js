

// const insericiTask = (task) => {
//     console.log(task.key);
    
// }
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
    const elementoCliccato = event.target
    elementoCliccato.classList.toggle("selected")
}