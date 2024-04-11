import { Router } from 'express';
import clientRouter from './client.route';
const routes = Router();

// define the base path and the router that's going to be called
routes.use('/', clientRouter);

// export the route
export default routes;