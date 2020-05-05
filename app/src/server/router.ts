import { Router as ExpressRouter } from 'express';
import indexController from './controllers/index';
import healthCheckController from './controllers/healthcheck';
import pidController from './controllers/pid';
import notFoundController from './controllers/notfound';

const router: ExpressRouter = ExpressRouter();

router
  .get('/', indexController)
  .get('/health', healthCheckController)
  .get('/pid', pidController)
  .get('*', notFoundController);

export default router;
