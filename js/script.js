const qblock = document.querySelectorAll(".q-block");

/*for (let item of qblock)*/ 
 qblock.forEach(function (item) {
    item.addEventListener("click", function () {
        let question = document.querySelector(".question");
        let answer = document.querySelector(".answer");
        let pointer = document.querySelector(".pointer");

        if (!pointer.classList.contains("rotation")) {
            pointer.classList.add("rotation")
            answer.classList.remove("hide");
            question.style.fontWeight = "bolder";
        } else {
            pointer.classList.remove("rotation");
            answer.classList.add("hide");
            question.style.fontWeight = "normal";
        }
        
    }); 
 });
