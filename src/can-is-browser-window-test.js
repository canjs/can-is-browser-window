import QUnit from 'steal-qunit';
import plugin from './can-is-browser-window';

QUnit.module('can-is-browser-window');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the can-is-browser-window plugin');
});
