function passwordVal() {
    var password = document.getElementById('pass').value;
    var passwordConf = document.getElementById('pass_').value;
    if (!(password === passwordConf)) {
        alert("Пароль и подтверждение пароля не равны!")
    } else window.location.reload();
}
