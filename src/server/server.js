import express from "express";

import React from "react";
import ReactDOMServer from "react-dom/server";

import path from "path";
import fs from "fs";

const app = express();

app.get("*", (req, res) => {
  res.send("hello");
});

app.listen(7001, () => {
  console.log("server is listening on port 7001");
});
