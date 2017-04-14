/*can-is-browser-window@0.0.0#can-is-browser-window*/
define(function (require, exports, module) {
    (function (global) {
        module.exports = function () {
            return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof SimpleDOM === 'undefined';
        };
    }(function () {
        return this;
    }()));
});