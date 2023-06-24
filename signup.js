window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginuser"))
    var userLogin = localStorage.getItem("loginuser")
    if (userLogin) {
        window.location.replace("./facebook.html")
    }

})


function signUp(e) {
    e.preventDefault();

    var fullName = document.querySelector('#fullName').value;
    var password = document.querySelector('#password').value;
    var email = document.querySelector('#email').value;
    var number = document.querySelector('#number').value;

    var obj = {
        fullName,
        password,
        email,
        number
    };

    var getUsers = JSON.parse(localStorage.getItem('users'));

    if (getUsers === null) {
        var arr = [];
        arr.push(obj);
        console.log('first user signup')
        localStorage.setItem('users', JSON.stringify(arr));
        alert('uer signup')
        window.location.href = "./index.html"
    } else {
        console.log('grtuseer ', getUsers)
        var findUser = getUsers.find(function (value) {
            console.log(value.email);
            if (value.email === email) {

                return true
            }
        })
        if (findUser === undefined) {
            getUsers.push(obj);
            localStorage.setItem('users', JSON.stringify(getUsers));
            alert('signup')
            window.location.href = "./index.html"
        } else {
            alert('email address already exisr')
        }

    }
}
