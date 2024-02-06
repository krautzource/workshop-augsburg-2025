console.log(new Date());
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
});
md.use(require('markdown-it-attrs'));
const anchor = require('markdown-it-anchor');
md.use(require('markdown-it-header-sections'), {
    html: true,
    linkify: true,
    typographer: true
}).use(anchor, {
    permalink: anchor.permalink.headerLink()
});
const fs = require('fs');
const filenames = ['./teil1/1-orientierung', './teil1/2-impulsvortrag']
filenames.forEach(filename => {
    const slides = md.render(fs.readFileSync(`${filename}/slides.md`).toString())


    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${filename.split('/').pop().toUpperCase()} | Workshop: Erstellung und Aufbereitung von barrierefreien Lehrinhalten aus LaTeX für das Web</title>
    <style>
    *,*::before,*::after {box-sizing: border-box;}* {margin: 0;}html,body {height: 100%;max-width: 100%;min-height: 100dvh;line-height: 1.5;-webkit-font-smoothing: antialiased;}img,video,svg {display: block;max-width: 100%;}p,h1,h2,h3,h4,h5,h6 {overflow-wrap: break-word;}/* end "reset" */a,a:visited {color: #3498db;}a:hover,a:focus,a:active {color: #1b557b;text-decoration-skip-ink: auto;}html {font-size: calc(1rem + 1vw);}p {font-size: 1em;margin-bottom: 1.3em;font-weight: 450;}h1,h2,h3,h4 {margin-bottom: 0.5em;font-weight: 500;line-height: 1.42;}h1 {font-size: calc(1rem + 1vw);}h2 {font-size: calc(1.45rem + 1.29vw);}@font-face {font-display: swap;font-family: 'Dosis';src: url('./Dosis-VariableFont_wght.woff2') format('woff2');font-weight: 1 999;}body {color: #444;font-family: "Dosis", Helvetica, sans-serif;font-weight: 300;}h1,h2,h3 {margin-top: 1em;border-bottom: 2px solid lightgray;padding-bottom: 0.5em;text-align: right;}blockquote {border-left: 8px solid lightblue;padding-left: 1em;}.slider {-ms-scroll-snap-type: x mandatory;scroll-snap-type: x mandatory;display: -webkit-box;display: flex;overflow-x: scroll;}.slider>section {min-width: 100vw;min-height: 100vh;padding-inline: 10vw;scroll-snap-align: start;position: relative;height: 100%;border: 2px solid #3498db;}video {width: auto;max-height: 33vh}video:focus {max-height: 60vh;}
    </style>
    </head>
    <body>
    ${slides}
    <script>
    const sl = document.querySelector('section');
    sl.classList.add('slider');
    // wrap first pieces in wrapper as subsection
    const s = document.createElement('section');
    document.querySelectorAll('.slider > *:not(section)').forEach(n => s.appendChild(n));
    sl.insertAdjacentElement('afterbegin', s);
    </script>
    </body>
    </html>
    `;

    fs.writeFileSync(`${filename}/index.html`, html);

})
