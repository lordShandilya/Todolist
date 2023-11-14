
let count = 0;

function removeTask(e){
    e.remove();
}

export function taskAdder(e, newTask){
    
    count++;
    let task = ` <li id="task${count}"> <input type="checkbox" id="completed"> <span>${newTask}</span> <button id="delete${count}">Complete</button> </li>`;
    e.innerHTML += task;

    completed = document.getElementById(`delete${count}`);
    completed.onclick = () =>{
        removeTask(task);
    }


    

}



