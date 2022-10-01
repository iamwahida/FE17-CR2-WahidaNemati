//Test if it's connected
// let test = "wahida is cool";
// console.log(test);
 
let tasks = JSON.parse(tasksToDo);
console.table(tasks);

//print every toDo task
for (let toDo of tasks) {
    document.getElementById("merlin").innerHTML +=  
        `<div class = "card border border-dark shadow-lg p-3 mb-5 bg-body rounded pb-3">
        <i class="fa fa-bookmark" id ="mark"></i>
        <p id ="blueTaskbutton">Task</p>
        <img src="images/${toDo.image}" width="100%" height = "50%">
        <br><br>
            <div class="text-center">
                <h6>${toDo.taskName}</h6>
                <p>${toDo.description}</p>
            </div>
            <hr class = "text-dark">
            <input class="amount" id = "prio2" type="submit" value = "&#9888 Priority Level: "> 
            <br>
                <p class="importance" id ="prio">${toDo.priority}</p>
            <hr>
            <div class="d-flex justify-content-end gap-3"> 
            <input class = "bg-danger text-light p-1 border border-danger rounded-3" type="button" value="&#9940 Delete">
            <input class= "bg-success text-light p-1 border border-success rounded-3" type="button" value="&#9989 Done">
            </div>
        </div>
        `
    };

let increase_amount = document.getElementsByClassName("amount");
// var element = document.getElementsByClassName("importance");
console.log(increase_amount.length);

//for no-repeat for every index
    function increase_priority (index) {
        if (tasks[index].priority != 5) {
            tasks[index].priority++;
            // change_color(index);
            document.getElementsByClassName("importance")[index].innerHTML = tasks[index].priority;
        }
};   

 //create function for the bg colors with if statements
    function change_color(index) {
        if (tasks[index].priority == 0) {
            document.getElementsByClassName("importance")[index].style.backgroundColor = "green";
        }else if (tasks[index].priority == 1) {
            document.getElementsByClassName("importance")[index].style.backgroundColor = "green";
        }  
        else if (tasks[index].priority == 2) {
            document.getElementsByClassName("importance")[index].style.backgroundColor = "yellow";
        } 
        else if (tasks[index].priority == 3) {
            document.getElementsByClassName("importance")[index].style.backgroundColor = "yellow";
        } 
        else if (tasks[index].priority > 3 ) {
            document.getElementsByClassName("importance")[index].style.backgroundColor = "red";
        } 
        else {
            document.getElementsByClassName("importance")[index].style.backgroundColor = "red";
        }
        document.getElementsByClassName("importance")[index].innerHTML = tasks[index].priority;
    };  

    //for each card
    for (let i = 0; i < increase_amount.length; i++) {
        increase_amount[i].addEventListener("click", function(){
            increase_priority(i); 
            change_color(i);
        })
    };

 document.getElementById("click").onclick = sortByValue;
    //sort
    function sortByValue() {
        tasks.sort(((a, b) => b.priority - a.priority))
        document.getElementById("merlin").innerHTML ="";
        
        for (let toDo of tasks) {
            document.getElementById("merlin").innerHTML +=  
                `<div class = "card border border-dark pb-3">
                <i class="fa fa-bookmark" id ="mark"></i>
                <p id ="blueTaskbutton">Task</p>
                <img src="images/${toDo.image}" width="100%" height = "50%">
                <br>
                    <div class="text-center">
                        <h6>${toDo.taskName}</h6>
                        <p>${toDo.description}</p>
                    </div>
                    <hr class = "text-dark">
                    <input class="amount" id = "prio2" type="submit" value="Priority Level:"> 
                    <br>
                        <p class="importance" id ="prio">${toDo.priority}</p>
                    <hr>
                    <div><input id ="delete" type="button" value="Delete"> <input id ="done" type="button" value="Done"></div>
                </div>
                `
            };

            let newamount = document.getElementsByClassName("amount");
            for (let i = 0; i < newamount.length; i++) {
                newamount[i].addEventListener("click", function(){
                    increase_priority(i); 
                    change_color(i);
                })
            };

    };

   



    // // for each index
    // document.getElementsByClassName("amount")[0].onclick = function(){
    //     tasks[0].priority++;
    //     document.getElementsByClassName("importance")[index].innerHTML = tasks[index].priority;
    // }

    // function change_color (index) {
//     if (tasks[index].priority < 1) {
//         tasks[index].priority++;
//         classElement ="green";
//         document.getElementsByClassName("importance")[index].innerHTML = tasks[index].priority;
//         } 
//         else if (tasks[index].priority > 2 && tasks[index].priority < 3){
//         tasks[index].priority++;
//         classElement ="yellow"
//         document.getElementsByClassName("importance")[index].innerHTML = tasks[index].priority;
//         } else {
            
//         classElement ="red";
//         document.getElementsByClassName("importance")[index].innerHTML = tasks[index].priority;
//         }
// };
