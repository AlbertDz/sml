/**
 * @fileoverview This file contains the test cases for the text function.
 * @author Albert Diaz
 */

import { text } from '../main.js';

describe('text', () => {
	it('sshould return the correct text based on the "property" field for the specified language', () => {
		const result = text('test', 'en');
		expect(result).toBe('Test');

		const result2 = text('test', 'es');
		expect(result2).toBe('Prueba');

		const result3 = text('test', 'fr');
		expect(result3).toBe('test');

		const result4 = text('other', 'en');
		expect(result4).toBe('other');
	});
});
