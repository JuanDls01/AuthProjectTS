import "reflect-metadata"
import { AppDataSource } from "./src/db";
import app from "./src/app";

const main = async () => {
    try {
        await AppDataSource.initialize();
        // console.log('token', require('crypto').randomBytes(64).toString('hex'))
        console.log('Conected db');
        app.listen(3001, function() {
            console.log('App is listening on port 3001!')
        });
    } catch (err) {
        console.log(err)
    }   
}

main();