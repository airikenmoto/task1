function pullDown(){
let lists = document.getElementsByClassName("pull-down-list");
    const pullDownButton = document.getElementById("lists");
    const pullDownParents = document.getElementById("pull-down");
    const pullDownChild = document.querySelectorAll(".pull-down-list");
    const pullDownChildren = document.getElementById("list1");
    const currentList = this.document.getElementById("current-list");

    pullDownButton.addEventListener('mouseover',function(){
        this.setAttribute('style',"background-color:blue;")
        console.log("乗せたときは青色")
    })

    pullDownButton.addEventListener('mouseout',function(){
        this.removeAttribute('style',"background-color:red;")
        console.log("外れた")
    })

    pullDownButton.addEventListener('click',function(){
    if (pullDownParents.getAttribute("style")=="display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style","display:block;")
    console.log("表示")
    }
    })

   pullDownChild.forEach(function(list){
    list.addEventListener("click", function(){
        const value = list.innerHTML
        currentList.innerHTML = value ;
        console.log(value);
    })
})
    pullDownChildren.addEventListener('click',function(){
         console.log(location.href="https://github.com/airikenmoto/task1.git") 
   })
   }
window.addEventListener('load',pullDown)