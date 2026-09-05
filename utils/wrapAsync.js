function wrapAsync(fn) { //wrapped around a route handler
    return function(req, res, next)
    {
        fn(req, res, next).catch(next); //runs the asynchronous function in route
    };
};

module.exports = wrapAsync;