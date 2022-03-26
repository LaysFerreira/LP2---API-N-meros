const express = require('express');
const morgan = require('morgan');

const num = require('./num.js');

const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.get('/util/number/:action', (req, res) => {
   const action = req.params.action;
   const input = req.query.input.split(',')
   .map((x) => Number(x));
   const nums = input

    const result = {
      action,
      input,
      output: num (action, nums),
    };
  
    res.json(result);
  });

app.listen(3000);