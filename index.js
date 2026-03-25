import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  res.json({ msg: "Baba ji and huzur is always there to help us" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});