import { Injectable } from '@nestjs/common';
// import {User} from './user.interface';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  private readonly Users: User[] = [];

  findUsers() {
    return this.userModel.findAll();
  }

  addUser(user: CreateUserDto) {
    return this.userModel.create({...user});
  }

  async validateUser(username: string, password: string) {
  console.log('🔍 Validating user:', username, password);

  const user = await this.userModel.findOne({ where: { name: username } });

  if (!user) {
    console.log(' User not found');
    return null;
  }

  console.log(' User found:', user);

  if (user.password === password) {
    return user;
  }

  console.log(' Password mismatch');
  return null;
}

}
