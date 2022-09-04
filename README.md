![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Rieserferner-Ahrn Nature Park, Italy.
<span>Photo by <a href="https://unsplash.com/@eberhardgross?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">eberhard grossgasteiger</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

# Tarea: Clases
El objetivo de esta tarea es poner en práctica los conceptos básicos relacionados con la programación orientada a objetos:

- Clase
- Objeto
- Método
- Atributo
- Método constructor

## Requerimientos funcionales

1. (50 Puntos) Programar la clase `Calculator`. Deberá incluir los siguientes:
     - Atributos
       - `Number value` el valor que actualmente tiene la calculadora
     - Métodos
       - (10 puntos) `constructor()` inicializa `value` con cero.
       - (10 puntos) `add(amount)` actualiza el contenido de `value` sumando `amount` y regresa el `value` actualizado.
       - (10 puntos) `multiply(amount)`actualiza el contenido de `value` multiplicando por `amount` y regresa el `value` actualizado.
       - (10 puntos) `power(number)` actualiza el contenido de `value` elevando a la `number` potencia y regresa el `value` actualizado.
       - (10 puntos) `reset()` re-establece  `value` a cero y regresa el `value` actualizado.

2. (50 Puntos) Programar la clase `Range`. Deberá incluir los siguientes:
   - Atributos
     - `Number start` el valor de inicio del rango
     - `Number end` el valor final del rango
   - Métodos
     - (10 puntos) `constructor()` recibe como parámetro los valores iniciales para `start` y `end`.
     - (10 puntos) `getAllNumbers()` regresa un vector con todos los valores que se encuentran en el rango desde `start` hasta `end`.
     - (10 puntos) `getAllNumbersInverted()`regresa un vector con todos los valores que se encuentran en el rango pero en orden inverso desde `end` hasta `start`
     - (10 puntos) `getAllEven()` regresa un vector con todos los valores pares que se encuentran en el rango desde `start` hasta `end`
     - (10 puntos) `getSum()` regresa la suma de todos los números contenidos en el rango desde `start` hasta `end`.

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
