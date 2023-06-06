import express, { Application, Request, Response } from "express";
import crypto from 'crypto'
const port: number = 4000;
const app: Application = express();

interface iData {
  name?: string;
  id?: string;
  price?: number;
}

let dataSets: iData[] = [];

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "A GET-ALL Request",
      data: dataSets,
    });
  } catch (error) {
    throw error;
  }
});
app.get("/:par", (req: Request, res: Response) => {
  try {
    const { par } = req.params;

    let nData = dataSets.filter((el: any) => {
      return el.id === par;
    });

    return res.status(200).json({
      message: "A GET-ONE Request",
      data: nData,
    });
  } catch (error) {
    throw error;
  }
});
app.post("/create", (req: Request, res: Response) => {
  try {
    
    const {name, price} = req.body
    const ID = crypto.randomUUID()
    const upData = {id: ID, name, price}
    dataSets.push(upData)

    return res.status(200).json({
      message: "A POST Request",
      data: upData,
    });
  } catch (error) {
    throw error;
  }
});
import axios from 'axios'

app.get('/api/github', async(req: Request, res: Response)=>{
    try {
        const {name} = req.body;
        const url = 'https://api.github.com/users/'+name
        const mydata = await axios.get(url).then((res)=>{
            return res.data
        }).catch((error)=>{
            res.status(404).json({message: error})
        }).finally(()=>{
            
        })
        return res.status(200).json({
            message: 'API Call Successful',
            data: mydata
        })
        
    } catch (error) {
        res.status(404).json({message: error})
    }
    
})
app.get('/api/apis', async(req: Request, res: Response)=>{
    try {
        const {product} = req.body;
        console.log(product)
        const url = 'https://fakestoreapi.com/products/'+product
        const mydata = await axios.get(url).then((res)=>{
            return res.data
        }).catch((error)=>{
            res.status(404).json({message: error})
        }).finally(()=>{
            
        })
        return res.status(200).json({
            message: 'API Call Successful',
            data: mydata
        })
        
    } catch (error) {
        res.status(404).json({message: error})
    }
    
})

app.get('/api/weather', async(req: Request, res: Response)=>{
    try {
        const {key} = req.body;
        
        const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lagos?unitGroup=metric&key=8BZMC42B2UUKF7T9JE2LTDW6W&contentType=json"
        const mydata = await axios.get(url).then((res)=>{
            return res.data
        }).catch((error)=>{
            res.status(404).json({message: error})
        }).finally(()=>{
            
        })
        return res.status(200).json({
            message: 'API Call Successful',
            data: mydata
        })
        
    } catch (error) {
        res.status(404).json({message: error})
    }
    
})

app.patch("/:id", (req: Request, res: Response) => {
    try {
      const {id} = req.params
      const {name} = req.body
      let newdatA = dataSets.filter((el: any)=>{
        return el.id === id
      })
      newdatA[0].name = name

      return res.status(200).json({
        message: "A PATCH Request",
        data: newdatA,
      });
    } catch (error) {
      throw error;
    }
  });

app.delete("/:id", (req: Request, res: Response) => {
    try {
      const {id} = req.params
      let item = dataSets.filter((el: any)=>{
        return el.id === id
      })
      res.status(200).json({
        message: "A DELETE Request",
        data: item,
      });
      return dataSets = dataSets.filter((el: any)=>{
        return el.id != id
      })
      
    
      
    } catch (error) {
      throw error;
    }
  });

app.listen(port, () => {
  console.log("Running on", port);
});
