const express = require('express');
const dbConnect = require('./Database/index');
const{PORT} = require('./config/index');
const router = require('./routes/index');
const erroeHandler = require('./middlwares/errorHandler');
const app = express();


app.use(router);
dbConnect();
app.use(erroeHandler);

app.listen(PORT, () => {console.log(`Backend is running on port: ${PORT}`);
});

