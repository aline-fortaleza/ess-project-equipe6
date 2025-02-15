import PFEntity from '../entities/pf.entity';
import TestEntity from '../entities/test.entity';

export default class Database {
  data: { [key: string]: any[] };
  private static instance: Database;

  private constructor() {
    this.data = {};
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  static reset() {
    Database.instance = new Database();
  }

  static seed() {
    Database.getInstance().data = {
      tests: [
        new TestEntity({
          id: '89ecc32a-aec7-4b71-adfd-03287e4ca74f',
          name: 'Test Seed',
        }),
      ],
      pfs: [
        new PFEntity({
          id: '12732',
          user_id: '1',
          name: 'bia',
          birth_date: new Date(2000, 0, 9),
          cpf: '28173891',
          phone: '98171-2882',
          favorites: ['12', '22', '32'],
          savedRooms:  ['12', '222', '32'],
        }),
      ],
    };
  }
}
