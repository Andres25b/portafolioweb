const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// * =============================
// *  Habilitar la carpeta public
// * =============================
app.use(express.static(publicPath));

app.listen(port, () => {
	console.log(`Servidor corriendo en puerto ${port}`);
});
