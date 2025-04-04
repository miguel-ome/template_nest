import { User } from '@app/entities/user/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
}
