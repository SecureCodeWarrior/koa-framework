'use strict';

module.exports = exports = function(opt) {
  return opt.parser || require('koa-bodyparser')(opt);
};

exports.defaults = { parser: null, enabled: true };