const { Router } = require("express");

const router = new Router();

const { addJob, getJobs } = require("../controllers/company.controller.js");

router.get("/job", addJob);
router.get("/jobs/:company_id", getJobs);

module.exports = router;
