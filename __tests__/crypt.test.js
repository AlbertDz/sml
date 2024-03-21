/**
 * @fileoverview Crypt test
 * @author Albert Diaz
 */

import Crypt from '../core/Crypt';

describe('Crypt', () => {
	it('should encrypt and decrypt a text', () => {
		const crypt = new Crypt();
		const key = 123;
		const text = '{"es":{"test":"Prueba"},"en":{"test":"Test"}}';
		const encrypted = crypt.encrypt(text, key);
		const decrypted = crypt.decrypt(encrypted, key);
		expect(decrypted).toBe(text);
	});
});
