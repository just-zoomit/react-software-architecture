import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { Home } from "./src/pages/Home";

const app = express();
app.use(express.static("./build", { index: false }));

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <>
      <h1>Server-Side Rendering Example</h1>

      <Home />
    </>
  );

  return res.send(`
    <!DOCTYPE html>
    <html>
        <body>
            <div id="root">${reactApp}</div>
        </body>
    </html>
`);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
