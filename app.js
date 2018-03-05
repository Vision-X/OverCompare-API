const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/overwatch", (request, response) => {
    queries.list().then(overwatch => {
        response.json({overwatch});
    }).catch(console.error);
});

app.get("/overwatch/:id", (request, response) => {
    queries.read(request.params.id).then(player => {
        player
            ? response.json({player})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/overwatch", (request, response) => {
    queries.create(request.body).then(player => {
        response.status(201).json({player});
    }).catch(console.error);
});

app.delete("/overwatch/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/overwatch/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(game => {
        response.json({player});
    }).catch(console.error);
});

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
