import express from 'express';
import cors from 'cors';
import routes from './routes'
import path from 'path'

//Request params: identificaçao de recursos
//query params: utilizar para filtros, e paginaçao
//request body: parametros para criaçao/atualizaçao
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);