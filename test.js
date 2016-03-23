var str2color = require("./");
var test = require("tape");

test('str2color', function (assert) {
    assert.plan(4);
    assert.strictEqual(str2color(), '#5A1000');
    assert.strictEqual(str2color(''), '#5A1000');
    assert.strictEqual(str2color(' '), '#5A1000');
    assert.strictEqual(str2color('hola'), '#212B78');
});
