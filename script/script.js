//Test if it's connected
// let test = "wahida is cool";
// console.log(test);

let tasks = JSON.parse(tasksToDo);
// console.table(tasks);

//print every to do task
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
        </div>
        `
    };
    let increase_amount = document.getElementsByClassName("amount");

    //for no-repeat for every index
    function increase_priority (index) {
            // change_color(index);
            if (tasks[index].priority != 5) {  
            tasks[index].priority++;
            change_color(index);
            document.getElementsByClassName("importance")[index].innerHTML = tasks[index].priority;
            }
    };
  //create function for the bg colors with if statements

            function change_color(x)  {
            if (tasks[x].priority == 0) {
                document.getElementById("prio").style.backgroundColor = "green";
            }else if (tasks[x].priority == 1) {
                document.getElementById("prio").style.backgroundColor = "green";
            }  
            else if (tasks[x].priority == 2) {
                document.getElementById("prio").style.backgroundColor = "yellow";
            } 
            else if (tasks[x].priority == 3) {
                document.getElementById("prio").style.backgroundColor = "yellow";
            } 
            else if (tasks[x].priority > 3 ) {
                document.getElementById("prio").style.backgroundColor = "red";
            } 
            else {
                document.getElementById("prio").style.backgroundColor = "red";
            }
    };

    for (let i = 0; i < increase_amount.length; i++) {
        increase_amount[i].addEventListener("click", function(){
            increase_priority(i);
        })
    };

    function sortByValue() {
        tasks.sort(((a, b) => a.priority - b.priority))
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
                </div>
                `
            };

    };

    document.getElementById("id").onclick = sortByValue;




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
