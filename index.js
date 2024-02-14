import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const response = await axios.get(`${API_URL}/random`);
  const secret = response.data;
  res.render("index.ejs", secret);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
