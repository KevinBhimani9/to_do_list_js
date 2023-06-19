let data = [];
viewData();  
function add() {
    let task = document.getElementById('task').value;
    let name = document.getElementById('name').value;

    let obj = {
        taskid: Math.floor(Math.random() * 100),
        name: name,
        task: task,
    }
    if (localStorage.getItem('task') === null || localStorage.getItem('task') === undefined) {
        data.push(obj);
        localStorage.setItem('task', JSON.stringify(data));
    }
    else {
        let val = JSON.parse(localStorage.getItem('task'));
        val.push(obj);
        localStorage.setItem('task', JSON.stringify(val));
    }
    document.getElementById('name').value = "";
    document.getElementById('task').value = "";
    viewData();  
}
function viewData (){
    document.getElementById('editbtn').style.display = "none";
    let val = JSON.parse(localStorage.getItem('task'))
    let tbl = "";
    if ( val != null){
        val.map((v)=>{
            const{taskid, name , task }=v

            tbl +=`
            
                 <tr>
                 <td class="border-1 bg-light border-blue border-2  p-2">${name}</td> 
                 <td class="border-1 bg-light border-blue border-2  p-2">${task}</td> 
                 <td>
                    <button class="btn btn-light" type="button" onclick="editData(${taskid})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></button>
                    <button class="btn btn-light" type="button" onclick="deleteData(${taskid})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
                 </td> 
                 </tr>

                `
        })
        document.getElementById("record").innerHTML = tbl;
    }
}

function deleteData (id){
    let alldata = JSON.parse(localStorage.getItem('task'));
    let ans = alldata.filter((val)=>{
        return val.taskid != id
    })
    localStorage.setItem('task', JSON.stringify(ans));
    viewData();
}

function editData (id){

    document.getElementById('editbtn').style.display = "block";
    document.getElementById('addbtn').style.display = "none";

    let allData = JSON.parse(localStorage.getItem('task'));
    for (let i in allData){
        if(allData[i].taskid == id){
            document.getElementById('editid').value = allData[i].taskid
            document.getElementById('name').value = allData[i].name;
            document.getElementById('task').value = allData[i].task;
        }
    }
}
function edit (){

    let id = document.getElementById('editid').value;
    let name = document.getElementById('name').value;
    let task = document.getElementById('task').value;

    let allData = JSON.parse(localStorage.getItem('task'));
    for(let i in allData){
        if(allData[i].taskid = id){
            
            allData[i].name = name,
            allData[i].task = task
        }
        localStorage.setItem('task',JSON.stringify(allData))
    }
    alert("Task Successfully Upadated");
    document.getElementById('name').value = "";
    document.getElementById('task').value = "";
    viewData();
    document.getElementById('addbtn').style.display = "block";
    document.getElementById('editbtn').style.display = "none";

}

function clearAll(id){

    let allData = JSON.parse(localStorage.getItem('task'));
    for(let i in allData){
        if(allData[i].taskid != id){
            allData.splice(i);
        } 
    }
    localStorage.setItem('task',JSON.stringify(allData));
    alert("All Task will be deleted.!")
    viewData();
}