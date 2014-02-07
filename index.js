var util      = require('util'),
    Transform = require('stream').Transform;
util.inherits(Through, Transform);

function Through(options, func) {
    if (!(this instanceof Through)) {
        return new Through(options, func);   
    }
    if('function' === typeof options) {
        func = options;
        options = null;
    }
    this._func = func;
    Transform.call(this, options);
}

Through.prototype._transform = function(chunk, encoding, callback) {
    var that = this;
    this._func(chunk, encoding, function(chunk) {
        that.push(chunk);
        callback();
    });
};

module.exports = Through;