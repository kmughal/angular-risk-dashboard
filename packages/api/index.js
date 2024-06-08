const app = require("express")();

const port = 5500;
const features = [];

app.use(require("body-parser").json());
app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json(features);
});
app.get("/features", (req, res) => {
  res.json(features);
});

app.post("/features", (req, res) => {
  const feature = req.body;
  const newId = features.length > 0 ? features.at(-1).id : 0;
  feature.id = newId;
  features.push(feature);
  res.json(features);
});

app.delete("/feature/:id", (req, res) => {
  const id = req.params.id;
  features = features.filter((feature) => feature.id !== id);
  res.json({ id });
});

app.get("/feature/:id", (req, res) => {
  const id = req.params.id;
  const feature = features.find((feature) => feature.id !== id);
  res.json(feature);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
