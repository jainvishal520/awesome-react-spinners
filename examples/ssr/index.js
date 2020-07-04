// We will CJS syntax as here no build process.. no transpilation in place
const { createElement } = require('react');
const { Ellipsis } = require('react-css-spinners');
const express = require('express');
const { renderToString } = require('react-dom/server');
const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const html = renderToString(createElement(Ellipsis));
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        ${html}
    </body>
    </html>`);
});

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
