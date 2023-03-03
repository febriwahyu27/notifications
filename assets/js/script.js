const newNotif = document.querySelector(".new");
const num = document.querySelector(".num");
const mark = document.querySelector("#mark");
const notif = document.querySelectorAll("#notif");

mark.addEventListener("click", function(){
    for( var i = 0; i < notif.length; i++ ){
        notif[i].classList.remove('new');
        notif[i].classList.remove('icon');
        const readAll = notif.length - notif.length;
        num.innerHTML = readAll;
    }
})
