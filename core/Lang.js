/**
 * @fileoverview Lang class, get text from a file and create a minify file from a file with the text in json or csv format
 * @author Albert Diaz
 */

const { readFileSync, writeFileSync } = require('fs');
const Crypt = require('./Crypt');

class Lang {
	constructor() {
		this.typeFile = process.env.TYPE_FILE;
		this.pathFile = process.env.PATH_FILE;
		this.key = process.env.CRYPT_KEY;
	}

	getText(property, lang) {
		let typeFile = this.typeFile;
		const crypt = new Crypt();

		let file = readFileSync(`${this.pathFile}/lang.${typeFile}`, 'utf8');
		if (typeFile === 'txt') {
			file = crypt.decrypt(file, this.key);
			typeFile = 'json';
		}

		const dataLang = this.#_getDataLang(typeFile, file, lang);
		const value = dataLang ? (dataLang[property] ?? property) : property;

		return value;
	}

	createMinifyFile(typeFile) {
		const file = readFileSync(`${this.pathFile}/lang.${typeFile}`, 'utf8');
		const data = (typeFile === 'csv')
			? this.#_dataCsv(file)
			: this.#_dataJson(file);

		const crypt = new Crypt();
		const dataString = JSON.stringify(data);
		const encrypted = crypt.encrypt(dataString, this.key);
		writeFileSync(`${__dirname}/../lang.txt`, encrypted);
		return true;
	}

	#_getDataLang(typeFile, content, lang) {
		const data = (typeFile === 'csv')
			? this.#_dataCsv(content)
			: this.#_dataJson(content);

		return data[lang];
	}

	#_dataCsv(content) {
		const lines = content.split('\n');
    const languages = lines[0].replace('\r', '').split(';').slice(1);
    const data = {};

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].replace('\r', '').split(';');
      const propertyName = values[0];

      for (let j = 1; j < values.length; j++) {
        const language = languages[j - 1];
        if (!data[language]) {
          data[language] = {};
        }
        data[language][propertyName] = values[j];
      }
    }

    return data;
	}

	#_dataJson(content) {
		const data = JSON.parse(content);
		return data;
	}
}

module.exports = Lang;
