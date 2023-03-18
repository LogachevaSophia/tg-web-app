import axios from "axios";

class Server {
    _apiBase = "https://vps70590.xxvps.net:9050";

    getReSource = async (url) => {
        
        // if (!res.ok) {
        //   throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        // }
        // return await res.data;
        try{
            let res = await axios.get(url);

            return res.data;
        }
        catch (err){
            console.log(err);
        }
        
      };
    //   postReSource = async (url) => {
        

    //     try{
    //         let res = await axios.post(url);

    //     }
    //     catch (err){
    //         console.log(err);
    //     }
        
    //   };
    

    getSphere = async () =>{
        const res = this.getReSource(`${this._apiBase}/sphere`);
        return await res;
    }

    getCategory = async () =>{
        const res = this.getReSource(`${this._apiBase}/category`);
        return await res;
    }

    getAllItems = async () =>{
        const res = this.getReSource(`${this._apiBase}/allItems`);
        return await res;
    }

    getAllNetworks = async () =>{
        const res = this.getReSource(`${this._apiBase}/allNetworks`);
        return await res;
    }

    basketToServer = async (data) => {
        const res = await axios.post(`${this._apiBase}/basket`, null, {params:{
            my_data: data
        }})

    }

}

export default Server;