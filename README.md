<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Cauchy][cauchy-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Cauchy][cauchy-distribution] random variable is

<!-- <equation class="equation" label="eq:cauchy_cdf" align="center" raw="F(x; x_0,\gamma)=\frac{1}{\pi} \operatorname{arctan} \left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2}" alt="Cumulative distribution function for a Cauchy distribution."> -->

<div class="equation" align="center" data-raw-text="F(x; x_0,\gamma)=\frac{1}{\pi} \operatorname{arctan} \left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2}" data-equation="eq:cauchy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cauchy/logcdf/docs/img/equation_cauchy_cdf.svg" alt="Cumulative distribution function for a Cauchy distribution.">
    <br>
</div>

<!-- </equation> -->

where `x0` is the location parameter and `gamma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-cauchy-logcdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats-base-dists-cauchy-logcdf' );
```

#### logcdf( x, x0, gamma )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Cauchy][cauchy-distribution] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var y = logcdf( 4.0, 0.0, 2.0 );
// returns ~-0.16

y = logcdf( 1.0, 0.0, 2.0 );
// returns ~-0.435

y = logcdf( 1.0, 3.0, 2.0 );
// returns ~-1.386
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 2.0 );
// returns NaN

y = logcdf( 1.0, 2.0, NaN );
// returns NaN

y = logcdf( 1.0, NaN, 3.0 );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logcdf.factory( x0, gamma )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [Cauchy][cauchy-distribution] distribution with parameters  `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 10.0, 2.0 );

var y = mylogcdf( 10.0 );
// returns ~-0.693

y = mylogcdf( 12.0 );
// returns ~-0.288
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var logcdf = require( '@stdlib/stats-base-dists-cauchy-logcdf' );

var gamma;
var x0;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    x0 = randu() * 10.0;
    gamma = ( randu()*10.0 ) + EPS;
    y = logcdf( x, x0, gamma );
    console.log( 'x: %d, x0: %d, ??: %d, ln(F(x;x0,??)): %d', x, x0, gamma, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-cauchy-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-cauchy-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-cauchy-logcdf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-logcdf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-cauchy-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-cauchy-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-cauchy-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-cauchy-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-logcdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-logcdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-logcdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-cauchy-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-cauchy-logcdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

</section>

<!-- /.links -->
