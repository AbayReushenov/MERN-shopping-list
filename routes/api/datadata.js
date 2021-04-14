const express = require('express');
const router = express.Router();
const authentication = require('../../middleware/auth');

// DATA MODEL
const DataData = require('../../models/Data');

// @route  GET api/data
// @desc   Get All Data
// @access Public
router.get('/', (req, res) => {
  DataData.find()
    .sort({ date: -1 })
    .then((datadata) => res.status(200).json(datadata))
    .catch((err) => res.status(400).json({ msg: err.message }));
});

// @route  POST api/data
// @desc   Create a data
// @access Private

router.post('/', authentication, (req, res) => {
  const newData = new DataData({
    name: req.body.name,
  });
  newData.save().then((data) => res.json(data));
});

// @route  DELETE api/data/:id
// @desc   delete a post
// @access Private

router.delete('/:id', authentication, (req, res) => {
  DataData.findById(req.params.id)
    .then((oneid) => oneid.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
