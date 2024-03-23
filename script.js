const notesContainer = document.querySelector(".notes-container");
const btn= document.getElementById("btn");

let notes= document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML= localStorage.getItem("notes");
}
showNotes();

function updatestorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

btn.addEventListener("click", ()=>{
    console.log("sd");
    let inputBox= document.createElement("p");
    let img= document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName=== "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }else if(e.target.tagName === "P"){
        notes= document.querySelectorAll(".input=box");
        notes.forEach(nt =>{
            nt.onkeyup= function(){
                updatestorage();
            }
        })
    }
});

document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})