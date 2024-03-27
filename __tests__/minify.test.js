/**
 * @fileoverview Minify test
 * @author Albert Diaz
 */

import { createCryptFromCsv, createCryptFromJson } from '../main.js';

describe('Minify', () => {
	it('should create a minify file from a csv', () => {
		createCryptFromCsv();
	});

	it('should create a minify file from a json', () => {
		createCryptFromJson();
	});
});
