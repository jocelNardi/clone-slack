import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../application/users/dto/create-user.dto';
import { UpdateUserDto } from '../../application/users/dto/update-user.dto';
import { UserEntity } from 'src/domain/users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async testDatabaseConnection(): Promise<string> {
    try {
      await this.userRepository.count(); // Exemple de requête simple
      return 'Database connection successful';
    } catch (error) {
      return `Error connecting to database: ${error.message}`;
    }
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
