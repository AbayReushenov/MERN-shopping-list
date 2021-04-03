const express = require('express');
const router = express.Router();

// DATA MODEL
const DataData = require('../../models/Data');

// @route  GET api/data
// @desc   Get All Data
// @access Public
router.get('/', (req, res) => {
  DataData.find()
    .sort({ date: -1 })
    .then((datadata) => res.json(datadata));
});

// @route  POST api/data
// @desc   Create a data
// @access Public

router.post('/', (req, res) => {
  const newData = new DataData({
    name: req.body.name,
  });
  newData.save().then((data) => res.json(data));
});

// @route  DELETE api/data/:id
// @desc   delete a post
// @access Public

router.delete('/:id', (req, res) => {
  DataData.findById(req.params.id)
    .then((oneid) => oneid.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
