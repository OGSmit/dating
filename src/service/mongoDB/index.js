import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb+srv://jackkerouac1613:R8QL3SXaGJpmBO9y@tinder.smyb7tb.mongodb.net/?retryWrites=true&w=majority&appName=Tinder')

'R8QL3SXaGJpmBO9y, jackkerouac1613, mongodb+srv://<username>:<password>@tinder.smyb7tb.mongodb.net/'

const start = async () => {
    try {
        await client.connect() 
    } catch (e) {
        console.log(e)
    }
}

start()