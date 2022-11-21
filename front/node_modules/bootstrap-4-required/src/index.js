var jQuery = require('./js/jquery');
window.jQuery = window.$ = jQuery;

var popper = require('./js/popper');
window.popper = popper;

var bootstrap = require('./js/bootstrap');

require('./css/bootstrap.css');

const all = {
  jQuery,
  popper,
  bootstrap
}

export default all;
