import connectMongoDB from './mongodb';

const testConnection = async () => {
    await connectMongoDB();
};

testConnection();
