function toLightDark(){
    var icon = document.getElementById("dark-light-button");
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
    }
}