var loginUser;
var listParent = document.getElementById("listParent")

window.addEventListener("load", function () {
    console.log("hello world ")
    var getUsers = JSON.parse(localStorage.getItem("users"))
    console.log(getUsers, "getUser")
    loginUser = getUsers

    
    var fullName = document.getElementById("fullName")
    console.log("fullName", fullName)
    if (fullName) {
       

    }
    if (listParent) {
        var getPosts = JSON.parse(localStorage.getItem("posts")) || []
        for (var value of getPosts) {
            listParent.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.desc}</p>
                <button class="btn btn-info">EDIT</button>
                <button class="btn btn-danger" onclick="deletePost(${value.id} , this)">DELETE</button>
            </div>
        </div>`
        }

    }

})

// post
function addPost() {
    console.log('add todo')
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")
    if (!title.value || !desc.value) {
        alert("Please enter values")
        return
    }


    var id;

    var getPosts = JSON.parse(localStorage.getItem("posts")) || []
    console.log('getPOsr', getPosts)
    if (getPosts.length > 0) {
        id = getPosts[0].id + 1
    } else {
        id = 1
    }


    var todoBox = `<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${desc.value}</p>

    <button class="btn btn-info">EDIT</button>
    <button class="btn btn-danger" onclick="deletePost(${id} , this)">DELETE</button>

</div>
</div>`

    listParent.innerHTML = todoBox + listParent.innerHTML

    var postObj = {
        id: id,
        title: title.value,
        desc: desc.value
    }
    getPosts.unshift(postObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

   






    title.value = ""
    desc.value = ""

}



function deletePost(id, e) {
    var getPosts = JSON.parse(localStorage.getItem("posts"))
  
    var numIndex = getPosts.findIndex(function (value) {
        console.log(value , 'value')
        if (value.id === id) return true
    })
    getPosts.splice(numIndex , 1)
    localStorage.setItem("posts", JSON.stringify(getPosts))
    e.parentNode.remove();

}
