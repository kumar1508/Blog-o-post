import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb+srv://kr1508:kite1508@cluster0.bjfcipp.mongodb.net/test'
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;