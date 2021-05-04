const mongooose = require("mongoose");

const URI =
  "mongodb+srv://admin:admin@cluster-ecommern.6swee.mongodb.net/ecommern?retryWrites=true&w=majority";

const mongoDBClient = {
  initialise: () => {
    try {
      const client = mongooose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      client.then(() => console.log("successfully connected to database"));
    } catch (error) {
      throw Error(error);
    }
  },
};

module.exports = mongoDBClient;
