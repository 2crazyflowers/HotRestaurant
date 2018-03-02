var tableData = require('../data/table-data.js');

var waitingListData = require('../data/waitinglist-data.js');

module.exports = function(app) {
	//whenever the user goes to the api/tables url go ahead and display the tableData in json format
	app.get('/api/tables', function(req, res) {
		res.json(tableData);
	});

	//do the same for the api/waitinglist
	app.get('/api/waitlist', function(req, res) {
		res.json(waitingListData);
	});

	app.post('/api/tables', function(req, res) {
		if(tableData.length < 5) {
			console.log('app.post tables less than 5')
			tableData.push(req.body);
			res.json(true);

		}
		else {
			waitingListData.push(req.body);
			res.json(false);
		}
	});

	app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });
}