const express = require("express")
const yummlyRoute = express.Router();
const axios = require("axios")
require("dotenv").config()

const XRapidAPIKey = process.env.XRAPIDAPIKEY;
const XRapidAPIHOST = "yummly2.p.rapidapi.com";
const yummlyUrl = "https://yummly2.p.rapidapi.com"

yummlyRoute.get('/feeds/list', (req, res) => {
    const options = {
        method: 'GET',
        url: `${yummlyUrl}/feeds/list`,
        params: {limit: '24', start: '0'},
        headers: {
          'X-RapidAPI-Key': XRapidAPIKey,
          'X-RapidAPI-Host': XRapidAPIHOST
        }
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(400).send({ error: error });
    });
});

yummlyRoute.get('/feeds/auto-complete', (req, res) => {
    const { feed } = req.query;
    const options = {
        method: 'GET',
        url: `${yummlyUrl}/feeds/auto-complete`,
        params: {q: feed},
        headers: {
          'X-RapidAPI-Key': XRapidAPIKey,
          'X-RapidAPI-Host': XRapidAPIHOST
        }
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(400).send({ error: error });
    });
});

yummlyRoute.get('/feeds/search', (req, res) => {
    const { feed } = req.query;
    const options = {
        method: 'GET',
        url: `${yummlyUrl}/feeds/search`,
        params: {
          start: '0',
          maxResult: '18',
          maxTotalTimeInSeconds: '7200',
          q: feed,
          allowedAttribute: 'diet-lacto-vegetarian,diet-low-fodmap',
          FAT_KCALMax: '1000'
        },
        headers: {
          'X-RapidAPI-Key': XRapidAPIKey,
          'X-RapidAPI-Host': XRapidAPIHOST
        }
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(400).send({ error: error });
    });
});

yummlyRoute.get('/feeds/list-similarities', (req, res) => {
    const options = {
        method: 'GET',
        url: `${yummlyUrl}/feeds/list-similarities`,
        params: {
          limit: '18',
          start: '0',
          id: '15-Minute-Baked-Salmon-with-Lemon-9029477',
          apiFeedType: 'moreFrom',
          authorId: 'Yummly'
        },
        headers: {
          'X-RapidAPI-Key': XRapidAPIKey,
          'X-RapidAPI-Host': XRapidAPIHOST
        }
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(400).send({ error: error });
    });
});

yummlyRoute.get('/tags/list', (req, res) => {
    const options = {
        method: 'GET',
        url: `${yummlyUrl}/tags/list`,
        headers: {
          'X-RapidAPI-Key': XRapidAPIKey,
          'X-RapidAPI-Host': XRapidAPIHOST
        }
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(400).send({ error: error });
    });
});

yummlyRoute.get('/categories/list', (req, res) => {
    const options = {
        method: 'GET',
        url: `${yummlyUrl}/categories/list`,
        headers: {
          'X-RapidAPI-Key': XRapidAPIKey,
          'X-RapidAPI-Host': XRapidAPIHOST
        }
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(400).send({ error: error });
    });
});

yummlyRoute.get('/reviews/list', (req, res) => {
    const options = {
        method: 'GET',
        url: `${yummlyUrl}/reviews/list`,
        params: {offset: '0', globalId: 'a8d6747a-bfaa-46a7-92fb-892e3f76b264', limit: '20'},
        headers: {
          'X-RapidAPI-Key': XRapidAPIKey,
          'X-RapidAPI-Host': XRapidAPIHOST
        }
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(400).send({ error: error });
    });
});

module.exports = yummlyRoute;  