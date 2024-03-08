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

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  findByMail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
