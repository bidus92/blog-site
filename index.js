import express from "express";
import bodyParser from "body-parser"; 
import {fileURLToPath} from "url";
import {dirname} from "path";
import ejs from "ejs";


//initializes express framework within our Node Project
const app = express(); 

//tells express where to find our static files 
app.use(express.static("public")); 

//the local server(computer) port that will serve as the host of the website 
const port = 3000; 

//utilizes dirname function (from path middleware) to obtain information on a path name 
//fileURLtoPath key for "url" allows us to parse the filepath itself relative to an individual's system and input it.. 
//...to the ___dirname function that stores the path 
const ___dirname = dirname(fileURLToPath(import.meta.url));

//variable to substitute the body parser middleware to allow for parsing of site info
const theBody = bodyParser.urlencoded({extended: true});

//implement body-parser middleware in our express framework
app.use(theBody);

//GETS
app.get("/", (req, res)=>
{
    res.render(___dirname + "/views/partials/index.ejs");
});

app.get("/portfolio", (req, res)=>
{
    res.statusCode = 302;
    res.setHeader("Location", "https://bidus92.github.io/JB-Portfolio/");
    res.end(); 
});


app.get("/reviews", (req, res)=>
{
    res.render(___dirname + "/views/partials/reviews.ejs");
});

app.get("/reviews/f13-part-4", (req, res)=>
{
    res.render(___dirname + "/views/partials/reviews/f13.ejs");
});

app.get("/reviews/batman-forever", (req, res)=>
{
    res.render(___dirname + "/views/partials/reviews/batman.ejs");
});

app.get("/reviews/rots", (req, res)=>
{
    res.render(___dirname + "/views/partials/reviews/rots.ejs");
});

app.get("/reviews/goldeneye", (req, res)=>
{
    res.render(___dirname + "/views/partials/reviews/goldeneye.ejs");
});



//assign our port to the server to handle this node app/website; 
app.listen(port, ()=>
{
    console.log(`Listening on port ${port}`);
});