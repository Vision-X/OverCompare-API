const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const queriesPros = require('./queries-pros');

app.use(bodyParser.json());

//saved players data

app.get("/saved_players", (request, response) => {
    queries.list().then(saved_players => {
        response.json({saved_players});
    }).catch(console.error);
});

app.get("/saved_players/:id", (request, response) => {
    queries.read(request.params.id).then(player => {
        player
            ? response.json({player})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/saved_players", (request, response) => {
    queries.create(request.body).then(player => {
        response.status(201).json({player});
    }).catch(console.error);
});

app.delete("/saved_players/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/saved_players/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(game => {
        response.json({player});
    }).catch(console.error);
});

// top pros data

app.get("/top_pros", (request, response) => {
    queriesPros.list().then(top_pros => {
        response.json({top_pros});
    }).catch(console.error);
});

app.get("/top_pros/:id", (request, response) => {
    queriesPros.read(request.params.id).then(player => {
        player
            ? response.json({player})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/top_pros", (request, response) => {
    queriesPros.create(request.body).then(player => {
        response.status(201).json({player});
    }).catch(console.error);
});

app.delete("/top_pros/:id", (request, response) => {
    queriesPros.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/top_pros/:id", (request, response) => {
    queriesPros.update(request.params.id, request.body).then(game => {
        response.json({player});
    }).catch(console.error);
});

app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;
