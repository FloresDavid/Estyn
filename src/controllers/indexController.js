module.exports = {
    index : (req,res) => {
        
        return res.render('index')
    },
    productcart : (req,res) => {
        
        return res.render('productcart')
    },



}




/*app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"views","index.html")))
app.get("/productDetail",(req,res)=>res.sendFile(path.join(__dirname,"views","productDetail.html")))
app.get("/productCart",(req,res)=>res.sendFile(path.join(__dirname,"views","productCart.html")))
app.get("/login",(req,res)=>res.sendFile(path.join(__dirname,"views","login.html")))
app.get("/register",(req,res)=>res.sendFile(path.join(__dirname,"views","register.html")))*/