var fs = require("fs");
function refresh(){
    fs.readdir("D:/a/ele1/emoticons/", (err,files) => {
        if (err){
            console.log(err)
        }
        // console.log(files)
        var emos = document.getElementsByClassName("emoticons")[0]
        
        for (var i=0;i<files.length;i++){
            // console.log(files[i])
            var aimg = document.createElement("img")
            aimg.setAttribute("src", "emoticons/"+files[i])
            aimg.setAttribute("alt", "err")

            var aframe = document.createElement("div")
            aframe.setAttribute("class", "imgframe")
            aframe.setAttribute("onClick", "imgClicked(this)")
            aframe.appendChild(aimg)

            emos.appendChild(aframe)
        }
    })
    
}
refresh()