import { Express, Router } from 'express';
import { di } from '../di';
import TestController from '../controllers/test.controller';
import TestService from '../services/test.service';
import FavoritesController from '../controllers/favorites.controller';
import FavoriteService from '../services/favorite.service';
import SavedController from '../controllers/saved.controller';
import SavedService from '../services/saved.service';

const router = Router();
const prefix = '/api';

export default (app: Express) => {
  app.use(
    prefix,
    new TestController(router, di.getService(TestService)).router
  );

  app.use(
    prefix,
    new FavoritesController(router, di.getService(FavoriteService)).router
  );

  app.use(
    prefix,
    new SavedController(router, di.getService(SavedService)).router
  );
};

