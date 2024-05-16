let lists = document.getElementsByClassName("pull-down-list");

window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('mouseover',function(){
        pullDownButton.setAttribute('style',"background-color:blue;")
        console.log("乗せたときは青色")
    })
})

window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('mouseout',function(){
        pullDownButton.removeAttribute('style',"background-color:red;")
        console.log("外れた")
    })
})

window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('click',function(){
        pullDownButton.setAttribute('style',"background-color:green;")
        console.log("クリック")
    })
})
