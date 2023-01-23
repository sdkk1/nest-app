import { genSalt, hash } from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';

import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, status } = createUserDto;

    const salt = await genSalt();
    const hashPassword = await hash(password, salt);

    const user = this.create({
      username,
      password: hashPassword,
      status,
    });

    await this.save(user);

    return user;
  }
}
