import OtherRepository from '../repositories/other.repository';
import TestRepository from '../repositories/test.repository';
import TestService from '../services/test.service';
import Injector from './injector';
import FavoriteService from '../services/favorite.service'
import PfRepository from '../repositories/pf.repository';

export const di = new Injector();

// Test
di.registerRepository(TestRepository, new TestRepository());
di.registerRepository(OtherRepository, new OtherRepository());
di.registerService(
  TestService,
  new TestService(
    di.getRepository(TestRepository),
    di.getRepository(OtherRepository)
  )
);
di.registerRepository(PfRepository, new PfRepository());
di.registerService(
  FavoriteService,
  new FavoriteService(di.getRepository(PfRepository))
  
);
