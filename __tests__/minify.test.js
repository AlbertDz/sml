/**
 * @fileoverview Minify test
 * @author Albert Diaz
 */

import { createMinifyFromCsv, createMinifyFromJson } from '../main.js';

describe('Minify', () => {
	it('should create a minify file from a csv', () => {
		createMinifyFromCsv();
	});

	it('should create a minify file from a json', () => {
		createMinifyFromJson();
	});
});
