const axios = require("axios");
const url = require("../base_url/base_url")

module.exports ={
  async getUserForGit(req,res){ 
      try {
        const params = "jacob-dvlp";
        const {data} = await axios.get(url + params);

        const interfaceUser = {
          "Login user": data.login, 
          "Name user": data.name, 
          "Bio user": data.bio, 
          "Total repos": data.public_repos,
          "Location": data.location
        }
         res.status(200)
         .json({"response": interfaceUser }
        ),

        console.log(interfaceUser);
      } catch (error) {
        res.json({"error msg": error})
      }
     }}