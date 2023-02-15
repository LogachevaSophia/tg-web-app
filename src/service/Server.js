import axios from "axios";

class Server {
    _apiBase = "http://195.93.173.91:3002";

    getReSource = async (url) => {
        
        // if (!res.ok) {
        //   throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        // }
        // return await res.data;
        try{
            let res = await axios.get(url);
            console.log(res.data);
            return res.data;
        }
        catch (err){
            console.log(err);
        }
        
      };
    

    getSphere = async () =>{
        const res = this.getReSource(`${this._apiBase}/sphere`);
        return await res;
    }


}

export default Server;