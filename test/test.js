/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var tape = require( 'tape' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var noop = require( '@stdlib/utils-noop' );
var isSquareMatrix = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSquareMatrix, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a 2-dimensional ndarray having equal dimensions', function test( t ) {
	var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	t.equal( isSquareMatrix( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a 2-dimensional ndarray-like object having equal dimensions', function test( t ) {
	var arr = {
		'data': [ 0, 0, 0, 0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'ndims': 2,
		'dtype': 'generic',
		'length': 4,
		'flags': {},
		'get': noop,
		'set': noop
	};

	t.equal( isSquareMatrix( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a 2-dimensional ndarray not having equal dimensions', function test( t ) {
	var arr = ndarray( 'generic', [ 0, 0, 0, 0, 0, 0 ], [ 3, 2 ], [ 2, 1 ], 0, 'row-major' );
	t.equal( isSquareMatrix( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a 2-dimensional ndarray-like object not having equal dimensions', function test( t ) {
	var arr = {
		'data': [ 0, 0, 0, 0, 0, 0 ],
		'shape': [ 3, 2 ],
		'strides': [ 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'ndims': 2,
		'dtype': 'generic',
		'length': 6,
		'flags': {},
		'get': noop,
		'set': noop
	};

	t.equal( isSquareMatrix( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a 2-dimensional ndarray-like object', function test( t ) {
	var values;
	var arr;
	var i;

	arr = ndarray( 'generic', [ 0, 0, 0 ], [ 3, 1, 1 ], [ 1, 1, 1 ], 0, 'row-major' );

	values = [
		arr,
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isSquareMatrix( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
