let btn = document.querySelector(".btn");
let date = new Date();
let today = date.toLocaleString("en", { weekday: "long" });
console.dir(today);

btn.onclick = function () {
    btn.parentElement.remove();
    let divS = document.createElement("div");
    let img = document.createElement("img");
    img.style.width = "300px";
    document.body.append(divS);
    img.src = "search.webp";
    divS.append(img);
    divS.append("سيتم بحوث في موضوع");
    let loader = document.createElement("div");
    loader.className = "loader";
    divS.append(loader);
    let searching = new Audio("searching.mp3");
    searching.play();
    setTimeout(() => {
        searching.pause();
        let done = new Audio("done.mp3");
        done.play();
        loader.className = "done";
        loader.innerHTML = "👍";
    }, 7400);

    setTimeout(() => {
        if (today === "Thursday") {
            divS.remove();
            let div = document.createElement("div");
            div.append("Today is خميس✅✅✅");
            document.body.append(div);
            img.style.width = "300px";
            img.src = "yes.webp";
            div.append(img);
            let happy = new Audio("happy.mp3");
            happy.play();
        } else {
            divS.remove();
            let div = document.createElement("div");
            div.append("Today is not خميس❌❌❌");
            document.body.append(div);
            img.style.width = "300px";
            img.src = "no.gif";
            div.append(img);
            let no = new Audio("no.mp3");
            no.play();
        }
    }, 8000);
};
