import axios from 'axios'
import express, { Application, Request, Response } from 'express'

const port:number = 4300;

interface iData{
    name? : string,
}

const dataSets : iData[] = []

const app:Application = express();                    

app.get('/api/github', async(req: Request, res: Response)=>{
    try {
        const {name} = req.body;
        const url = 'https://api.github.com/users/'+name
        const mydata = await axios.get(url).then((res)=>{
            return res.data
        })
        return res.status(200).json({
            message: 'API Call Successful',
            data: mydata
        })
    } catch (error) {
        throw error
    }
    
})

app.listen(port, ()=>{
    console.log('Listening on', port);
    
})