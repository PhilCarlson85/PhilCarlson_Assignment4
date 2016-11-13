/*
 * example page 170
 */

var mongoose = require('mongoose');
var Not = mongoose.model('Notes');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//Need to get "ListAll working before moving on.

module.exports.notesListAll = function (req, res) {
    Not
        .find()
        .exec(function (err, note) {
            sendJsonResponse(res, 200, note);
        });
};

module.exports.notesRetrieveId = function (req, res) {
    Not
        .findById(req.params.id)
        .exec(function (err, note) {
            sendJsonResponse(res, 200, note);
        });
};

module.exports.notesCreate = function (req, res) {
    Not
        .create({
                name: req.body,
                address: req.body.address,
            }, function (err, note) {
                if (err) {
                    sendJsonResponse(res, 400, err);
                } else {
                    sendJsonResponse(res, 201, note);
                }
            }
        )
};

module.exports.notesDeleteOne = function (req, res) {
    var noteid = req.params.noteid;
    if (noteid) {
        Not
            .findByIdAndRemove(noteid)
            .exec(
                function(err, note) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message" : "No noteid"
        });
    }
};


module.exports.notesUpdateId = function (req, res) {
    Not
        .findById(req.params.id)
        .exec(
            function (err, note) {
                note.name = req.body.name;
                note.save(function(err, note) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, note)}
                    });
          }
     );
};
