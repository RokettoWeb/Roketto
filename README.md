# Roketto

## Sobre el proyecto

Roketto es una empresa de desarrollo web. Este proyecto consiste en crear su página web corporativa para presentar la empresa, mostrar sus proyectos y facilitar el contacto con posibles clientes.

## Secciones de la web

- **Inicio:** presenta Roketto y explica qué hace la empresa.
- **Proyectos:** muestra una selección de trabajos y soluciones web desarrolladas por el equipo.
- **Equipo:** da a conocer a las personas que forman parte de Roketto y sus perfiles profesionales.
- **Contacto:** ofrece la información y los medios necesarios para que clientes y colaboradores puedan ponerse en contacto con la empresa.

## Integrantes

- Adrián Rodríguez
- Aimar Valiño
- Danner Balladares
- Wangzhan Xia
- Olatz González

## Objetivo

Crear una web clara, atractiva y fácil de navegar que transmita la identidad de Roketto y permita a los visitantes conocer sus servicios, proyectos y equipo.

## Licencia de iconos

Los iconos de LinkedIn, GitHub, email, Instagram, YouTube y X (`front/assets/linkedin.svg`, `github.svg`, `email.svg`, `instagram.svg`, `youtube.svg` y `x.svg`) son de [Bootstrap Icons](https://icons.getbootstrap.com/) y se usan bajo la [licencia MIT](https://github.com/twbs/icons/blob/main/LICENSE).

## Normas para los mensajes de commit

El título del commit (la primera línea del mensaje) tiene que:

- Tener **al menos 15 caracteres**.
- Usar solo **letras** (con tildes y ñ), **números**, **espacios** y estos signos: `. , : ; - ( ) ¿ ? ¡ !`

Ejemplos:

| Mensaje | ¿Vale? |
|---|---|
| `Añadir required al formulario` | ✅ |
| `¿Funciona el botón? ¡Sí!` | ✅ |
| `.` | ❌ Demasiado corto |
| `Arreglar <footer> y #iconos` | ❌ Lleva `<`, `>` y `#` |

**Activa la comprobación en tu ordenador** (una sola vez, dentro de la carpeta del proyecto):

```
git config core.hooksPath .githooks
```

A partir de ahí, git rechazará el commit si el mensaje no cumple las normas y te dirá por qué. Además, GitHub revisa los mensajes de cada Pull Request hacia `develop` o `main`: si alguno no cumple, la PR saldrá en rojo y no se podrá unir hasta corregirlo.
