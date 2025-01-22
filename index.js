var express = require("express")
var path = require("path")
var app = express()
var staticPath = path.join(__dirname,"public")
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.sendFile(path.join(staticPath,"index.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(staticPath,"about.html"))
})
app.listen(4000, ()=>{
    console.log("listening to the port 4000")

})
