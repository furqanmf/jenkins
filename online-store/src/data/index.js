import mongoose from 'mongoose';

// create the models
import '../models/products.js';
import '../models/user.js';

const connectionStr = `mongodb://localhost:27017/online-store`;

// connect() returns a Promise object
mongoose
    .connect(connectionStr)
    .then(() => {
        console.log(`connected to the DB`);
    })
    .catch(err => {
        console.log(err.message);
    });