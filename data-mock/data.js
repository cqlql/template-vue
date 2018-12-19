var express = require('express')
var router = express.Router()
var multer = require('multer')
var upload = multer({ dest: 'e:/uploads/' })

router.get('/GetMessage', function (req, res) {
  res.send({
    'status': 200,
    'message': 'ok',
    'result': {}
  })
})

router.post('/file', upload.single('file'), function (req, res) {
  res.send({
    'status': 200,
    'message': 'ok',
    'result': {}
  })
})

module.exports = router
