let menuBtn = document.querySelector('.nav-toggle__panel');
let collapse = document.querySelector('.nav__collapse');
let menu = document.querySelector(".nav-icon");
let lines = menu.querySelectorAll(".line");
menuBtn.addEventListener('click', function () {
    if (collapse.classList.contains("show")) {
        collapse.classList.remove("show");
        collapse.style.maxHeight = null;
        lines[0].style.width = "30px";
        lines[1].style.width = "15px";
        lines[2].style.width = "20px";
    } else {
        collapse.classList.add("show");
        collapse.style.maxHeight = collapse.scrollHeight + "px";
        menu.children[0].style.width = "30px";
        menu.children[1].style.width = "30px";
        menu.children[2].style.width = "30px";
    }
});


//modal

let modalWindow = document.querySelector('.modal__window');
let activateBtn = document.querySelector('.btn-callback');
let btnClose    = document.querySelector('.modal__window--cancel');

function closeModal(){
    modalWindow.style.display = "none";
}

activateBtn.addEventListener('click',function(){
    document.body.style.overflow = "hidden";
    modalWindow.style.display = "block";
    document.querySelector('.modal__window--showing').style.display="block";
});

btnClose.addEventListener('click',function(){
    document.body.style.overflow = "visible";
    modalWindow.style.display = "none";
    document.querySelector('.modal__window--showing').style.display="none";
});