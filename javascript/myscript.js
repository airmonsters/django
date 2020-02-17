var myheader = document.querySelector("h1")

var color;
// console.log(Math.random() * 255)
myheader.style.color = "#" + (Math.floor(Math.random() * 255)).toString(16) + (Math.floor(Math.random() * 255)).toString(16) + (Math.floor(Math.random() * 255)).toString(16);
function getrandomcolor()
{
    for (var i = 0; i< 6; i++)
    {
        color = "#" + (Math.floor(Math.random() * 255)).toString(16) + (Math.floor(Math.random() * 255)).toString(16) + (Math.floor(Math.random() * 255)).toString(16);
    }

    return color
}

function setcolor()
{
    var newcolor = getrandomcolor();
    myheader.style.color = newcolor;
    console.log(newcolor)
}

setInterval("setcolor()", 500)

var headone = document.querySelector("#One")
var headtwo = document.querySelector("#Two")
var headthree = document.querySelector("#Three")

headone.addEventListener("mouseover", function(){
    headone.textContent = "Mouse currently over"
    headone.style.color = "red"
})

headone.addEventListener("mouseout", function(){
    headone.textContent = "Hover here"
    headone.style.color = "black"
})
