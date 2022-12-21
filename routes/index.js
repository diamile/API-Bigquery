const express = require("express");

const { getDataFromBigQuery } = require("../controllers/bigquery.controller");

const router = express.Router();

//router.post('/api/tweets', posTweets)

router.get("/api/bigquery", getDataFromBigQuery);

// router.delete('/api/tweets/:id',deletedTweets)

// router.put('/api/tweets/update',updateTweets);

module.exports = router;
