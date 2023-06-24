window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginuser"))
    var userLogin = localStorage.getItem("loginuser")
    if (userLogin) {
        window.location.replace("./facebook.html")
    }

})





function login(e) {
    e.preventDefault();
    var loginEmail = document.querySelector('#loginEmail').value;
    var loginPassword = document.querySelector('#loginPassword').value;

    var getUsers = JSON.parse(localStorage.getItem('users'));
    console.log(getUsers)
    if (getUsers === null) {
        alert('your email is not exist')
        location.href = './signup.html'
    }
    var userIndex = getUsers.find(function (i) {

        if (i.email === loginEmail && i.password === loginPassword) return true

    })

    if (userIndex !== undefined) {
        console.log('succsess fully login');
        alert('succsess fully login')
        localStorage.setItem('loginuser', JSON.stringify(userIndex))
        window.location.replace('./facebook.html')
    } else {
        console.log('your email is not exist ');
        alert('your email is not exist')
        window.location.replace('./facebook.html')
    }

}



