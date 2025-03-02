document.addEventListener("DOMContentLoaded", () => {
    const elByID = (id) => {
        return document.getElementById(id);
    }
    const elByCls = (Class) => {
        return document.querySelector(`.${Class}`);
    }

    //get all element
    const pendingTask = elByID("pendingTask");
    const completeTask = elByID("completeTask");
    const History = elByCls("logBody");
    const randomColor = elByID("randomColor");
    const clearHistory = elByID("clearHistry");
    const currentDate = elByID("currentDate");

    //set current date
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('En-US', options).replace(',', '');
    currentDate.innerText = formattedDate;

    document.querySelectorAll(".boardBody button").forEach((button) => {
        button.addEventListener("click", (event) => {

            let selectedBtn = event.target;
            //changing task numbers
            pendingTask.innerText -= 1;
            let totalCompleteTask = parseInt(completeTask.innerText) + 1;
            completeTask.innerText = totalCompleteTask;

            // add completed task to log history
            const parent = button.closest(".bodyContent");
            const taskHeading = parent.querySelector("#taskHeader").innerText;
            const log = document.createElement("p");
            log.innerText = `You have completed the task ${taskHeading} at ${new Date().toLocaleTimeString()}`;
            History.appendChild(log);

            // appear alert
            alert("Board Updated Successfully");

            //disabled button
            selectedBtn.setAttribute("disabled", "true");
            selectedBtn.style.opacity = 0.5;

            // final alert
            if (pendingTask.innerText == 0) {
                alert("Congrats!!! You have completed all the current task...");
            }
        })

    })
    //clear history and reset all
    clearHistory.addEventListener("click", () => {
        History.innerHTML = "";
        document.querySelectorAll(".boardBody button").forEach((button) => {
            completeTask.innerText = 23;
            pendingTask.innerText = 6;
            button.style.opacity = 1;
            button.removeAttribute("disabled");
        })
    })

    // random color generator
    randomColor.addEventListener("click", () => {
        let hexColor = '';
        for (let i = 0; i < 6; i++) {
            const randomDigit = Math.floor(Math.random() * 16);
            hexColor += randomDigit.toString(16);
        }
        document.body.style.backgroundColor = "#" + hexColor;
    })
})
