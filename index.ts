import express, { Application } from "express"

const port : number = 3344;
const app: Application = express();

app.use(express.json());

app.listen(port, () => {
    console.log("server is now on");
    
});