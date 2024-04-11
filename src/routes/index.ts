import { Router } from 'express';
import router from "./client.route";
const routes = Router();

// define the base path and the router that's going to be called
routes.use('/', router);

// export the route
export default routes;