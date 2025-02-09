let addButton=document.getElementById(`adding`);
let input=document.getElementById(`input`);
let tasks=document.getElementById(`tasks`);

addButton.addEventListener(`click`, function(){
    let taskText =input.value.trim();
    if(taskText===''){
        alert('Cannot be empty!');
        return;
    }
    let taskItem=document.createElement('li');

    let taskContent=document.createElement('span');
    taskContent.textContent=taskText;

    let done=document.createElement('input');
    done.className = 'doneButton';
    done.type = 'checkbox';

    let deleting=document.createElement('button');
    deleting.textContent='bin';
    deleting.className = 'deletingButton';

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleting);
    taskItem.appendChild(done);

    tasks.appendChild(taskItem);
    input.value='';

    deleting.addEventListener('click', function(){
        taskItem.remove();
    });

    done.addEventListener('change', function(){
        if(done.checked){
            taskContent.style.textDecoration='line-through';
        }else{
            taskContent.style.textDecoration='none';
        }
    });





});


















