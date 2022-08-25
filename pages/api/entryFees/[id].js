import excuteQuery from "../../../config/db.js";

export default async function handler(req, res) {
    if(req.method === 'GET') {
      // Get [id]
      const {id} = req.query;
      
      // Get Entry Fees
      const entryFees = await getEntryFees(id, res);


      res.status(200).json({entryFees : entryFees });
    }
}
  
async function getEntryFees(id, res) {
    const sql = "SELECT entryFees FROM contest WHERE contestID = ?";

    const result = await excuteQuery({ query: sql, values: id });

    if(result.length > 0) {
        return result[0].entryFees;
    } else {
        return "No Data Found"
    }
}

