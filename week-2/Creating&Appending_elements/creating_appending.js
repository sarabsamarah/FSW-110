//creating_appending

// var newListItem = document.createElement('li)')
// //newListItem.textContent = "Welcome to my JS site"
// var myList = document.getElementById('my-list')
// myList.appendChild(newListItem)
var newH = document.createElement('h1')
newH.textContent = 'Welcome To My JS Site'
document.body.appendChild(newH)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with JavaScript'
document.body.appendChild(newP)

var myOl = document.createElement('ol')
myOl.textContent = 'My Ordered List'
document.body.appendChild(myOl)

var newListItem = document.createElement('li')
newListItem.textContent = 'One'
myOl.appendChild(newListItem)

var newListItem = document.createElement('li')
newListItem.textContent = 'Two'
myOl.appendChild(newListItem)

var newListItem = document.createElement('li')
newListItem.textContent = 'Three'
myOl.appendChild(newListItem)



