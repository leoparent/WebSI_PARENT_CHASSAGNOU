import{profiles} from "../../../data/profile"

export default function handler(req,res){
    const {profileId}=req.query

    if(req.method ==='GET'){
    const profile = profiles.find(
        (profile)=> profile.id === parseInt(profileId)
        )
    res.status(200).json(profile)
    }else if(req.method === 'DELETE'){
    const deleteProfile = profiles.find(
        (profile)=> profile.id === parseInt(profileId)
    )
    const index = profiles.findIndex(
        (profile) => profile.id === parseInt(profileId)
    )
    profiles.splice(index,1)
    res.status(200).json(index)
    }else if(req.method ==='GET2'){
        const showprofile = profiles.find(
            (profile)=> profile.name === parseInt(profileId)
            )
        res.status(200).json(showprofile)
        }
}
