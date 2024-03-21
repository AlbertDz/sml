/**
 * @fileoverview Crypt class, encrypt and decrypt text with a key
 * @author Albert Diaz
 */

class Crypt {
	encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ key);
    }

    return result;
	}

	decrypt(text, key) {
		let result = '';
		for (let i = 0; i < text.length; i++) {
			result += String.fromCharCode(text.charCodeAt(i) ^ key);
		}

		return result;
	}
}

module.exports = Crypt;
