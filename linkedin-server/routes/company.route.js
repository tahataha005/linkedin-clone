const { Router } = require("express");

const router = new Router();

const { addJob, getJobs } = require("../controllers/company.controller.js");
const companyMiddleware = require("../middlewares/company.middleware.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

router.get("/job", authMiddleware, addJob);
router.get("/jobs/:company_id", authMiddleware, companyMiddleware, getJobs);

module.exports = router;
