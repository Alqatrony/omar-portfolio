const toggle = document.getElementById('menu-toggle');
const button2 = document.getElementById('BUTTON-2');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    document.getElementById('Group_12').classList.toggle('active');
    setTimeout(function() {
        button2.classList.toggle('active');
    }, 300);
}


