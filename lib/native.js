/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the logarithm of the cumulative distribution function (logCDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {number} x0 - location parameter
* @param {PositiveNumber} gamma - scale parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 4.0, 0.0, 2.0 );
* // returns ~-0.16
*
* @example
* var y = logcdf( 1.0, 0.0, 2.0 );
* // returns ~-0.435
*
* @example
* var y = logcdf( 1.0, 3.0, 2.0 );
* // returns ~-1.386
*
* @example
* var y = logcdf( NaN, 0.0, 2.0 );
* // returns NaN
*
* @example
* var y = logcdf( 1.0, 2.0, NaN );
* // returns NaN
*
* @example
* var y = logcdf( 1.0, NaN, 3.0 );
* // returns NaN
*/
function logcdf( x, x0, gamma ) {
	return addon( x, x0, gamma );
}


// EXPORTS //

module.exports = logcdf;
