# Valezka Cortés

Sitio web de psicología y mediación familiar, creado con **Vite + React + TypeScript**.

## Cómo verlo en tu computador

1. Abre esta carpeta en la terminal.
2. Instala las dependencias, solo la primera vez:

```bash
npm install
```

3. Arranca el servidor de desarrollo:

```bash
npm run dev
```

4. Vite te va a mostrar una dirección, casi siempre `http://localhost:5173`. Ábrela en el navegador.

## Qué hace cada parte

- `index.html`: la hoja que el navegador carga primero. Aquí van el título, el idioma y las fuentes.
- `src/main.tsx`: enciende React y lo pinta dentro de `#root`.
- `src/App.tsx`: arma la página: header, secciones y el modal.
- `src/data/site.ts`: todos los textos, precios, horarios y artículos. **Si quieres cambiar un precio o una frase, empieza aquí.**
- `src/components/`: cada bloque visual de la web (hero, servicios, reserva, etc.).
- `src/index.css`: colores, tipografías y el diseño completo.

## Cómo publicar en GitHub

1. Crea un repositorio nuevo en GitHub (por ejemplo `valezka-cortes`).
2. En esta carpeta:

```bash
git init
git add .
git commit -m "Primera versión del sitio de Valezka Cortés"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/valezka-cortes.git
git push -u origin main
```

3. Para subirlo a GitHub Pages:
   - En el repositorio: **Settings → Pages**
   - Si usas un repo de proyecto (`usuario.github.io/nombre-repo/`), abre `vite.config.ts` y cambia `base` a `'/nombre-repo/'`.
   - Luego corre `npm run build`. La carpeta `dist` es lo que se publica.

## Cómo conectar un dominio propio

1. Compra el dominio (por ejemplo en [NIC Chile](https://www.nic.cl/) si quieres un `.cl`, o en Namecheap / Google Domains / Cloudflare).
2. Lo más simple para una web React es publicarla en **Cloudflare Pages** o **Netlify**: arrastras la carpeta `dist` o conectas el repo de GitHub.
3. En el panel del dominio, apunta un registro `CNAME` hacia la URL que te dé Cloudflare/Netlify.
4. Cuando el dominio esté activo, deja `base: '/'` en `vite.config.ts`.

La reserva de esta versión guarda la solicitud en el navegador y te deja enviarla por WhatsApp o correo. Más adelante se puede conectar a un backend o a Google Calendar.
