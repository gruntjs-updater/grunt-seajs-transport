define(function (require, exports, module) {
    var $ = require('$'),
        base = require('base');

    out = {
        foo: function() {
            alert('foo');
        }
    };

    module.exports = out;
});
