let lists = document.getElementsByClassName("pull-down-list");

window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('mouseover',function(){
        this.setAttribute('style',"background-color:blue;")
        console.log("乗せたときは青色")
    })
})

window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('mouseout',function(){
        this.removeAttribute('style',"background-color:red;")
        console.log("外れた")
    })
})


window.addEventListener('load',function(){
const pullDownButton = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");
pullDownButton.addEventListener('click',function(){
    if (pullDownParents.getAttribute("style")=="display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style","display:block;")
    console.log("表示")
    }
    })
})
