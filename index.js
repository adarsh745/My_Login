const express = require('express'); 
const collection=require("./config")
const bcrypt=require("bcrypt")
const session = require("express-session");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static('images'))
// app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to render the portfolio (using EJS)

app.get('/login', (req, res) => 
    {
  res.render('login',{errorMessage:''});
    });

app.get('/signup',(req,res)=>
{
    res.render('signup')
})



app.post("/signup", async (req,res)=>
{
    const data=
    {
        name: req.body.username,
        password: req.body.password
    }
    
   

    const usercheck=await collection.findOne({name:data.name});
    if(usercheck)
    {
        res.send("User name is already exist")

    }else{
        // res.render("login")
        const s=10;
        const hashpasword=await bcrypt.hash(data.password,s)
        data.password=hashpasword
        const userData=await collection.insertMany(data)
        
       
    }
    // console.log(userData)
});

app.post("/login",async (req,res)=>
{
    try{
        const check= await collection.findOne({name:req.body.username})
        console.log(check)
        if(!check)
        {
            res.send("Ur not rigesterd at")
        }
        const isposwordmatch=await bcrypt.compare(req.body.password,check.password)
        if(isposwordmatch)
        {
            res.render("protfolio");
        }else
        {
            res.render('login', { errorMessage: 'Wrong password.' });
        }
       

    }catch{(
        res.send("wrong details")
    )}
    
})


app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send("Error logging out");
        }
        res.redirect("/login"); // Redirect to login after logout
    });
});


app.listen(1000, () =>
{

    
        console.log('Server is running on port 1000 ');

    
  
})

 