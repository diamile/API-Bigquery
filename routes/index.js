const express = require("express");

const {
  getDataFromBigQuery,
  getLanguageFromBigQuery,
} = require("../controllers/bigquery.controller");

const router = express.Router();

router.get("/api/bigquery", getDataFromBigQuery);
router.get("/api/language", getLanguageFromBigQuery);

module.exports = router;
