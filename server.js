const express = require("express");
const app = express();

const routes = require("./routes/index")

app.use(
    express.static("public", {
      setHeaders: (res, path) => {
        if (path.endsWith(".js")) {
          res.setHeader("Content-Type", "application/javascript");
        }
      },
    }),
);

app.use('/', routes);

app.listen(5000, () => {
    console.log("Servidor levantado");
})
