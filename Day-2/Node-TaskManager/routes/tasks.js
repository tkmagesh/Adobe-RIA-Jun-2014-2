var express = require('express');
var router = express.Router();

/* GET home page. */
var taskList = [
	{name : "Learn jQuery", isCompleted : false},
	{name : "Explore JavaScript", isCompleted : false},
	{name : "Master Angular", isCompleted : false},
	{name : "Attend JS Conference", isCompleted : false}
]
router.get('/', function(req, res) {
	setTimeout(function(){
		res.send(JSON.stringify(taskList));		
	},10000);
});

module.exports = router;