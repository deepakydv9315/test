import mysql from "serverless-mysql";

 
const db = mysql({
  config: {
    host:
      process.env.MYSQL_HOST || "sg2plzcpnl490050.prod.sin2.secureserver.net",
    port: process.env.MYSQL_PORT || "3306",
    database: process.env.MYSQL_DATABASE || "quizy_app",
    user: process.env.MYSQL_USER || "om_quizy",
    password: process.env.MYSQL_PASSWORD || "OmQuizy@123",
  },
});
 

/*
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST || "s567.use6.mysecurecloudhost.com",
    port: process.env.MYSQL_PORT || "3306" ,
    database: process.env.MYSQL_DATABASE || "apayquiz_quiz" ,
    user: process.env.MYSQL_USER || "apayquiz_quiz",
    password: process.env.MYSQL_PASSWORD || "apayquiz@quiz_123"
  }
});
*/

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values); // query is a string

    db.end(); // close the connection

    return results; // return the results
  } catch (error) {

    return { error };
  }
}
