# JS Clp Utils

Librería para limpiar, formatear y generar valores a peso chileno.

## Contenido

- [Instalación](#instalación)
- [Cómo Usarlo](#cómo-usarlo)
    - [`ClpModel`](#clpmodel)
      - [Propiedades de ClpModel](#propiedades-de-clpmodel)
      - [Crear ClpModel](#crear-clpmodel)
    - [Funciones](#funciones)
      - [Limpiar string con peso chileno](#limpiar-string-con-peso-chileno)
      - [Formatear número a peso chileno](#formatear-número-a-peso-chileno)
- [Testing](#testing)

## Instalación

```bash
npm install --save @ftapiat/js-clp-utils
```

## Cómo usarlo

Puedes usar el modelo `ClpModel` para crear un valor de peso chileno, o puedes importar directamente las `funciones`:

### `ClpModel`

Representa a un Peso chileno.

#### Propiedades de ClpModel

Este RUT tiene 4 propiedades:
1. `value` Valor del peso, requerido en el constructor.
3. `formatted` Valor del peso formateado con puntos. Calculado automáticamente.
4. `formattedWithSign` Valor del peso con signo peso y puntos. Calculado automáticamente.

#### Crear ClpModel

- Puedes crear un `ClpModel` de la siguiente forma:
```js
import {ClpModel} from "@ftapia/js-clp-utils";

const clp = new ClpModel(100000);
clp.value; // 100000
clp.formatted; // "100.000"
clp.formattedWithSign; // "$100.000"
```
- También puedes crearlo usando un string:
```js
import {ClpModel} from "@ftapia/js-clp-utils";

const clp1 = ClpModel.fromString('100000');
const clp2 = ClpModel.fromString('100.000');
const clp3 = ClpModel.fromString('$100.000');
const clp4 = ClpModel.fromString('$100000');
const clp5 = ClpModel.fromString('$100000');
const clp6 = ClpModel.fromString('100.0.00'); // Esta función no reconoce los float, por lo que el resultado será un entero (100000).
const clp7 = ClpModel.fromString('abcde'); // ❌ Arrojará un error `TypeError`
```

### Funciones

Todas las características de `ClpModel` se subdividieron en varias funciones:

#### Limpiar string con peso chileno
```js
import {cleanNumber} from "@ftapia/js-clp-utils";

// Limpia el string de valores que no sean numéricos y retorna un `number`
const number = cleanNumber('19101178.3'); // '191011783'
const badNumber = cleanNumber('abcde'); // Esto arrojará un error `TypeError`
```

#### Formatear número a peso chileno

- Con puntos:
```js
import {addDotsToNumber} from "@ftapia/js-clp-utils";

const formattedWithDots = addDotsToNumber('191011783'); // '191.011.783'
```

- Con puntos y signo peso:
```js
import {addSignAndDotsToNumber} from "@ftapia/js-clp-utils";

const formattedWithSignAndDots = addSignAndDotsToNumber('191011783'); // '$191.011.783'
```

## Testing

```bash
npm install
npm test
```