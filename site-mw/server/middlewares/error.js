const error = function (req, res, next) {
    res.status(404).render('pages/error');
}

module.exports = error;