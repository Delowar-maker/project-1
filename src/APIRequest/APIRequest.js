import axios from "axios";

const BaseURL="https://basic-blog.teamrabbil.com/api"

export async function postCategories() {

    let res = await axios.get(BaseURL+"/post-categories");
    
    if(res.status===200){
        
        return res.data;
    }
    else{
        return []
    }

}