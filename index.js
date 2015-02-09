/*!
 * helper-require <https://github.com/jonschlinkert/helper-require>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (name) {
  if (arguments.length > 1) {
    var args = [].slice.call(arguments, 1);
    var fn = require(name);
    return fn.apply(fn, args);
  }
  return require(name);
};
