# Roketto

## Sobre el proyecto

Roketto es una empresa de desarrollo web. Este proyecto consiste en crear su página web corporativa para presentar la empresa, mostrar sus proyectos y facilitar el contacto con posibles clientes.

Forma parte del **Reto 1 *Limpia el futuro / Etorkizuna garbitzen*** del C.F.G.S. Desarrollo de Aplicaciones Web (1.º DAW).

## Ver la web

👉 **https://olatzglez.github.io/Roketto/**

La web se publica con GitHub Pages a partir de la rama `develop` y se actualiza sola cada vez que se une un cambio a esa rama.

## Secciones de la web

- **Inicio** (español e inglés): presenta Roketto con un vídeo de fondo y da acceso al resto de secciones.
- **Equipo:** da a conocer a las personas que forman parte de Roketto y sus perfiles profesionales.
- **Proyectos:** muestra una selección de trabajos y soluciones web desarrolladas por el equipo.
- **Contacto:** formulario para que clientes y colaboradores puedan ponerse en contacto con la empresa.
- **Trabaja con nosotros** (español e inglés): vídeo de presentación en inglés y acceso a Contacto.
- **Páginas legales** (español e inglés): aviso legal, política de privacidad y política de cookies.

## Integrantes

- Adrián Rodríguez
- Aimar Valiño
- Danner Balladares
- Wangzhan Xia
- Olatz González

## Objetivo

Crear una web clara, atractiva y fácil de navegar que transmita la identidad de Roketto y permita a los visitantes conocer sus servicios, proyectos y equipo.

## Estructura del proyecto

```
Roketto/
├── index.html            Página de entrada: lleva a front/html/index.html
├── front/
│   ├── html/             Páginas de la web (una por sección, más las versiones en inglés)
│   ├── css/estilos.css   Hoja de estilos única de toda la web
│   ├── js/inicio.js      Vídeo de fondo de Inicio (respeta "reducir movimiento")
│   └── assets/           Imágenes, iconos y vídeo
├── docs/                 Informes diarios del trabajo de cada persona
├── .githooks/            Comprobación de los mensajes de commit
└── .github/              Reglas de revisión (CODEOWNERS) y GitHub Actions
```

Todas las rutas entre archivos son **relativas** (`../css/estilos.css`), así que la web funciona en GitHub Pages, en cualquier servidor y abriendo los HTML con doble clic.

## Cómo trabajamos

- **`main`**: versión final y estable.
- **`develop`**: donde se junta el trabajo de todos. Es la versión que se publica en la web.
- **Una rama por tarea**, creada a partir de `develop`. Al terminar, se abre una **Pull Request hacia `develop`**.
- `main` y `develop` están protegidas: solo se cambian mediante Pull Request y solo Olatz puede aprobarlas y unirlas.

## Accesibilidad

La web sigue las pautas **WCAG 2.2**:

- HTML semántico: `header`, `nav`, `main`, `footer`, `article`, títulos en orden y migas de pan dentro de `<nav>`.
- Textos alternativos en todas las imágenes y avisos ocultos para los enlaces que se abren en una pestaña nueva.
- Contraste suficiente en textos y botones, y foco visible al navegar con el teclado.
- Tamaño mínimo de 24 px en lo que se pulsa.
- El vídeo de fondo de Inicio no arranca si el sistema tiene activado "reducir movimiento".
- El vídeo de *Trabaja con nosotros* muestra los subtítulos por defecto.

## Uso de la IA

En este proyecto hemos usado herramientas de inteligencia artificial como apoyo y complemento a nuestro trabajo: para resolver dudas, revisar código y textos, y agilizar tareas de organización del repositorio. El diseño, el desarrollo y las decisiones del proyecto son del equipo, y todo lo generado con ayuda de la IA ha sido revisado por nosotros.

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
