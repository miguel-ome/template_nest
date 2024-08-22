import { User } from '@app/entities/user/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findUserById(idUser: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
}
