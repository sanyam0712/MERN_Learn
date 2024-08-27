const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index');

const dbConnect = async() => {
    try{
    const conn =await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log(`Datbase connected to host: ${conn.connection.host}`);

}catch (error) {
    console.error('Error:', error);
}
}
module.exports= dbConnect;
