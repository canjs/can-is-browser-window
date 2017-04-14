var QUnit = require('steal-qunit');
var isBrowserWindow = require('./can-is-browser-window');

QUnit.module("can-is-browser-window");

QUnit.test("basics", function(){
	equal(typeof isBrowserWindow(), "boolean");
});
