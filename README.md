# Simple multi language

## Configuración y Uso de @albertdz/sml

### Instalación
```bash
npm i @albertdz/sml
```

### Configuración de Variables de Entorno
Antes de utilizar la librería, es necesario configurar algunas variables de entorno que serán utilizadas para su funcionamiento. A continuación se detallan las variables que necesitas configurar:

* `TYPE_FILE`: Este valor indica la extensión de donde se obtendrán los valores. Acepta los valores `csv`, `json` y `txt`. Se recomienda utilizar `txt` en producción (archivo encriptado con los valores de la traducción).

* `PATH_FILE`: Indica la ruta donde se encuentra el archivo `csv` o `json`.

* `CRYPT_KEY`: Llave para encriptar y desencriptar los datos del archivo `txt`.

.env
```bash
TYPE_FILE="txt"
PATH_FILE="C:/Users/Username/Desktop/Projects/My_app"
CRYPT_KEY="1234567890123456"
```

Además, es importante destacar que el archivo debe llamarse `lang.csv` o `lang.json` y seguir la siguiente estructura:

### Estructura del Archivo
lang.csv
```bash
property;es;en;... 
test;Prueba;Test;...
```

lang.json
```json
{
  "es": {
    "test": "Prueba"
  },
  "en": {
    "test": "Test"
  }
}
```

### Uso
Una vez que tienes configuradas las variables de entorno y preparado el archivo de traducción, puedes comenzar a utilizar la librería. Aquí te mostramos cómo hacerlo:
```javascript
import { text, createMinifyFromCsv, createMinifyFromJson } from "@albertdz/sml";

const value = text({ property: 'test', lang: 'en' });
createMinifyFromCsv(); // Crea el lang.txt a partir de un csv
createMinifyFromJson(); // Crea el lang.txt a partir de un json
```
Recuerda que el archivo `lang.txt` se crea de forma interna, por lo que se recomienda trabajar con él en producción. En el caso de desarrollo, puedes utilizar el archivo `lang.csv` o `lang.json`.

