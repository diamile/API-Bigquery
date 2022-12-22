const { getData } = require("../services/bigquery.service");
const { BigQuery } = require("@google-cloud/bigquery");
const path = require("path");

const options = {
  keyFilename: path.join(__dirname, "../cloud/config.json"),
  projectId: "clear-vision-372315",
};

exports.getDataFromBigQuery = async (req, res, next) => {
  const bigqueryClient = new BigQuery(options);

  const sqlQuery =
    "SELECT licenses.license AS license,count(*) AS total FROM `bigquery-public-data.github_repos.sample_repos` AS repo INNER JOIN `bigquery-public-data.github_repos.licenses` AS licenses ON repo.repo_name = licenses.repo_name GROUP BY license ORDER BY total DESC LIMIT 5";

  const query = {
    query: sqlQuery,
    location: "US",
  };
  //const [rows] = await bigqueryClient.query(query);
  const [job] = await bigqueryClient.createQueryJob(query);

  const [rows] = await job.getQueryResults();

  return res.json(rows);
};

exports.getLanguageFromBigQuery = async (req, res, next) => {
  const bigqueryClient = new BigQuery(options);

  const sqlQuery =
    "SELECT arr.name AS LANGUAGE,sum(arr.bytes) AS total_bytes FROM `bigquery-public-data.github_repos.languages`,UNNEST(LANGUAGE) arr GROUP BY LANGUAGE ORDER BY total_bytes DESC LIMIT 10";

  const query = {
    query: sqlQuery,
    location: "US",
  };
  //const [rows] = await bigqueryClient.query(query);
  const [job] = await bigqueryClient.createQueryJob(query);

  const [rows] = await job.getQueryResults();

  return res.json(rows);
};
