
const db_User= process.env.DB_USER
const db_pass= process.env.DB_PASS


export default{
   
    port: 3000,
    dbUri:`mongodb+srv://${db_User}:${db_pass}@restfullapi.ftqmbal.mongodb.net/?retryWrites=true&w=majority`,
    env: "development",
}