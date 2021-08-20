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

# Median

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Triangular][triangular-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_median" align="center" raw="\operatorname{Median}\left( X \right) = \begin{cases}a+{\sqrt {\frac {(b-a)(c-a)}{2}}}&{\text{ for }}c\geq {\frac {a+b}{2}}\\[6pt]b-{\sqrt {\frac {(b-a)(b-c)}{2}}}&{\text{ for }}c\leq {\frac{a+b}{2}}\end{cases}" alt="Median for a triangular distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = \begin{cases}a+{\sqrt {\frac {(b-a)(c-a)}{2}}}&amp;{\text{ for }}c\geq {\frac {a+b}{2}}\\[6pt]b-{\sqrt {\frac {(b-a)(b-c)}{2}}}&amp;{\text{ for }}c\leq {\frac{a+b}{2}}\end{cases}" data-equation="eq:triangular_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/median/docs/img/equation_triangular_median.svg" alt="Median for a triangular distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit and `c` is the mode.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-triangular-median
```

</section>

<section class="usage">

## Usage

```javascript
var median = require( '@stdlib/stats-base-dists-triangular-median' );
```

#### median( a, b, c )

Returns the [median][median] of a [triangular][triangular-distribution] distribution with parameters `a` (minimum support), `b` (maximum support), and `c` (mode).

```javascript
var v = median( 0.0, 1.0, 0.8 );
// returns ~0.632

v = median( 4.0, 12.0, 5.0 );
// returns ~6.708

v = median( 2.0, 8.0, 5.0 );
// returns 5.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = median( NaN, 4.0, 2.0 );
// returns NaN

v = median( 0.0, NaN, 2.0 );
// returns NaN

v = median( 0.0, 4.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = median( 1.0, 0.0, 1.5 );
// returns NaN

y = median( 0.0, 1.0, -1.0 );
// returns NaN

y = median( 0.0, -1.0, 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var median = require( '@stdlib/stats-base-dists-triangular-median' );

var a;
var b;
var c;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a;
    c = ( randu()*( b-a ) ) + a;
    v = median( a, b, c );
    console.log( 'a: %d, b: %d, c: %d, Median(X;a,b,c): %d', a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular-median.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular-median

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular-median/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular-median/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular-median/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular-median?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular-median.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular-median/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-triangular-median/main/LICENSE

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
