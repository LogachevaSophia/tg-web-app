class Server {
    _apiBase = "http://195.93.173.91:3002";

    getReSource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
      };
    

    getSphere = async () =>{
        const res = this.getReSource(`${this._apiBase}/sphere`);
        return await res;
    }


}

export default Server;