
var loginUser;
var listParent = document.getElementById("listParent")

window.addEventListener("load", function () {
    console.log("hello world ")
    var getUsers = JSON.parse(localStorage.getItem("users"))
    console.log(getUsers, "getUser")
    loginUser = getUsers

// console.log(loginUser.fullName)
    var fullName = document.getElementById("fullName")
    console.log("fullName", fullName)
    if (fullName) {
        // fullName.innerText = "WELCOME" + " " + loginUser.fullName

    }
    if (listParent) {
        var getPosts = JSON.parse(localStorage.getItem("posts"))
        for (var value of getPosts) {
            listParent.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.desc}</p>
                <button class="btn btn-info">EDIT</button>
                <button class="btn btn-danger">DELETE</button>
            </div>
        </div>`
        }

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




// post
function addPost() {
    console.log('add todo')
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")
if(!title.value || !desc.value){
    alert("Please enter values")
    return
}

var todoBox = `<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${desc.value}</p>

    <button class="btn btn-info">EDIT</button>
    <button class="btn btn-danger">DELETE</button>

</div>
</div>`
// console.log(todoBox, "todoBox")
listParent.innerHTML += todoBox

var postObj = {
    title: title.value,
    desc: desc.value
}


var getPosts = JSON.parse(localStorage.getItem("posts"))
console.log("getPosts", getPosts)

if (getPosts == null) {
    var array = []
    array.push(postObj)
    localStorage.setItem("posts", JSON.stringify(array))

} else {
    getPosts.unshift(postObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

}

title.value = ""
desc.value = ""

}




