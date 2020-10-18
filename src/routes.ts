import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/uploads';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//Rota = conjunto 
//Recurso = usuário

//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros

// GET = Buscar uma informação (Lista, Item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=lucas
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: Informações complexas

//index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;