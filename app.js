



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
    if (userIndex !== null) {
        console.log('succsess fully login');
        alert('succsess fully login')
        window.location.replace('./facebook.html')
    } else {
        console.log('your email is not exist ');
        alert('your email is not exist')
    }

}



