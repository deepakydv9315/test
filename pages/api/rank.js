export default async function handler(req, res) {
    let msg;
    if (req.method === "GET") {

        msg = await getRank(req.body.id);
        res.status(200).json({ method: "GET" });
    } else if (req.method === "POST") {
        

        msg = await postRank(req.body.id);
        res.status(200).json({ method: "POST" });        
    } else if (req.method === "PUT") {

        msg = await putRank(req.body.id);
        res.status(200).json({ method: "PUT" });
    } else if (req.method === "DELETE") {

        msg = await deleteRank(req.body.id);
        res.status(200).json({ method: "DELETE" });
    } else {
        res.status(404).json({ method: "Not found" });
    }
}

// To Get Rank
async function getRank(data, res) {
    let sql;
}

// To Submit Rank
async function postRank(data, res) {
    let sql;
}
// To Update Rank
async function putRank(data, res) {
    let sql;
}
// To Delete Ranl
async function deleteRank(data, res) {
    let sql;
}
