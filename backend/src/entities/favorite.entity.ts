import BaseEntity from './base.entity';

export default class FavoriteEntity extends BaseEntity {
  user_id: string;
  room_id: string;

  constructor(data: FavoriteEntity) {
    super(data.id || '');
    this.user_id = data.user_id;
    this.room_id = data.room_id;
  }
}
