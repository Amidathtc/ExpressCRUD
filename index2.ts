import express, { Application, Request, Response } from "express"

interface iData {
    name?: string;
    price? : number;
    id? : string;
}

const dataSet: iData [] = [];
const port : number = 3000;
const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response =>{
    try{
        return res.status(200).json({
            message: "This is just a welcome page",
            data: dataSet
        });  
        } catch (error) {
            throw error;
        }
         }); 

         app.listen (port, () =>{
            console.log("server is up and running");
            
         });