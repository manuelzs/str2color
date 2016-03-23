var str2color = require("./");
var test = require("tape");

test('str2color', function (assert) {
    assert.plan(1);
    assert.strictEqual(str2color('foo'), '#FFCC00');
});
