var Task = require('../models/task').Task; 

exports.FindByQuery = function(req, res) {
    var query = req.query
        //res.send(query['name']);
        Task.findOne(query['name'], function(err, doc) {
            if(!err && doc) {
                res.json(200, doc);
            } else if(err) {
                res.json(500, { message: "Error loading task." + err});
            } else {
                res.json(404, { message: "Task not found."});
            }
        });
        //res.end(JSON.stringify(query));
    }