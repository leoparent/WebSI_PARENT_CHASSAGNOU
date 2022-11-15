import{profiles} from "../../../data/profile"
const { dbClients } = require("../../../data/profile");


export default function handler(req,res)
{
    if(req.method === 'GET')
    {
    res.status(200).json(profiles)
     }else if(req.method === 'POST')
    {
        const profile = req.body.profile
        const newProfile ={
            id: Date.now(),
            password: profile,
            name: profile 
        }
        profiles.push(newProfile)
        res.status(201).json(newProfile)
    }else if(req.method === 'CONNECT')
    {
        var b=0
        for (var i = 0; i < dbClients.client.length; i++) {
            if(req.body.name===dbClients.profiles[i].name && req.body.password===dbClients.profiles[i].password)
            {
                console.log("Tu es bien dans notre database")
                b=1;
                return b;
            }
        }
        if(b==0)
        {
            console.log("On te connait pas")
        }
     res.status(202).json(profiles);
    }
}