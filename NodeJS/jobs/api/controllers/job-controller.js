'use strict';

//Eu que criei
const User = require('../models/job-model');
const router = require('../router');

router.get('/jobs', (req, res) => {
  res.write(JSON.stringify(Jobs.get()));
  res.end();
});
