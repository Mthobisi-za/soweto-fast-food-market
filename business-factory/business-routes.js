module.exports = function Business(pool) {
    function registerBusiness(req, res) {
        res.render('newbusiness')
    }
    return {
        registerBusiness
    }
}