const error = (err, req, res, next) => {

    res.status(404).json("Sometging went Wrong")
}

module.exports = error;