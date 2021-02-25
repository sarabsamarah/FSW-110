var image = document.createElement('img')
image.srcset= "https://defaultcustomheadersdata.files.wordpress.com/2016/07/succulents.jpg?resize=982,250";
document.body.appendChild(image)

var newH1 = document.createElement('h1')
newH1.textContent = 'The Gritty Yogi'
document.body.appendChild(newH1)

var a= document.createElement('a');
var link = document.createTextNode('Yogi Home');
a.appendChild(link);
a.href = "https://thegrittyyogi.wordpress.com/";
document.body.appendChild(a)
a.style.paddingRight = "10%";


var a= document.createElement('a');
var link = document.createTextNode('Essential Oils Article');
a.appendChild(link);
a.href = "https://thegrittyyogi.wordpress.com/2017/09/22/essential-oils-do-they-really-help/";
document.body.append(a)
a.style.paddingRight = "10%";


var a= document.createElement('a');
var link = document.createTextNode('Cooking and Asana');
a.appendChild(link);
a.href = "https://thegrittyyogi.wordpress.com/2017/02/07/great-home-practice-leads-to-great-cooking/";
document.body.append(a)
a.style.paddingRight = "10%";

var contentP = document.createElement('p')
contentP.textContent = 'Heal your gut with nourishing foods and invigorate your lifestyle with yoga and essential oils! Here are some tools to help start your journey:'
document.body.appendChild(contentP)

var myList = document.createElement('ul')
myList.textContent = 'Journey Tool Kit'
document.body.appendChild(myList)

var newListItem = document.createElement('li')
newListItem.textContent = 'Journal'
myList.appendChild(newListItem)
var newListItem = document.createElement('li')
newListItem.textContent = 'Healing Pantry'
myList.appendChild(newListItem)
var newListItem = document.createElement('li')
newListItem.textContent = 'Yoga Mat'
myList.appendChild(newListItem)
var newListItem = document.createElement('li')
newListItem.textContent = 'Moonstone'
myList.appendChild(newListItem)
var newListItem = document.createElement('li')
newListItem.textContent = 'Meditation Pillow'
myList.appendChild(newListItem)
var newListItem = document.createElement('li')
newListItem.textContent = 'An Open Heart'
myList.appendChild(newListItem)

var footer = document.createElement("footer")
footer.textContent = "Author: Sarab Samarah"
document.body.append(footer)




// var header = document.createElement(h1)
// header.textContent = 'The Gritty Yogi'
// document.body.appendChild(header)