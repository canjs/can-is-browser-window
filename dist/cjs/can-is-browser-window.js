/*can-is-browser-window@0.0.0#can-is-browser-window*/
module.exports = function () {
    return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof SimpleDOM === 'undefined';
};