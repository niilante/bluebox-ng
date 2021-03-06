/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>
            Sergio García <s3rgio.gr@gmail.com>
            Aan Wahyu <cacaddv@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const bruter = require('../../../lib/bruterCreds');
const auth = require('../../../lib/protocols/ssh').auth;
const optsComm = require('../../../cfg/commonOpts/bruteCred');


module.exports.desc = 'SSH credentials brute force.';


// To avoid to repeat them in all modules from "brute/creds".
module.exports.opts = optsComm;


module.exports.impl = (opts = {}) => bruter(opts.rhost, auth, opts);
