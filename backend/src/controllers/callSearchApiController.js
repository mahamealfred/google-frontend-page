const axios=require("axios")
const API_KEY = process.env.GOOGLE_API_KEY;
const CX = process.env.GOOGLE_CX;
class callSearchController{
    static async search(req, res) {
        const { q } = req.query;
  try {
    const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
      params: {
        key: API_KEY,
        cx: CX,
        q,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching search results');
  }
   
    }
}
module.exports= callSearchController