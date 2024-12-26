import connectMongoDB from './mongodb.ts';

const testConnection = async () => {
    await connectMongoDB();
};

testConnection();
