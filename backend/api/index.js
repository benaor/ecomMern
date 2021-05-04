// Modules
const express = require("express");
const cors = require("cors");
const mongoDBClient = require("./mongoClient");
const { graphqlHTTP } = require("express-graphql");
const Products = require("./product");

const app = express();
const PORT = 8080;

// Use
app.use(cors());

// Home
app.get("/", (req, res) => {
  res.send("affichage");
});

// Get all products
app.get("/products", async (req, res) => {
  const products = await Products.find({});
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(err);
  }
});

// Get products by category
app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await Products.find({ category: category });
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(err);
  }
});

// GraphQL UI
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
  mongoDBClient.initialise();
});
