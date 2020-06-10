const mongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`;
let mongodb;

function connect(callback) {
  mongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) => {
    mongodb = client.db(process.env.DB_NAME);
    callback();
  });
}

function get() {
  return mongodb;
}

function close() {
  mongodb.close();
}

module.exports = {
  connect,
  get,
  close,
};
