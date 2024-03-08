import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InputLogin, OutputLogin } from 'src/interface/auth/auth.interface';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersService,
    private jwtService: JwtService,
  ) {}

  async Login(input: InputLogin): Promise<any | OutputLogin> {
    const userLogged = await this.userRepository.findByMail(input.email);
    if (!userLogged || userLogged.password != input.password) {
      throw new UnauthorizedException();
    }
    return {
      user: userLogged,
      token: await this.jwtService.signAsync({
        sub: userLogged.id,
        username: userLogged.email,
      }),
    };
  }
}
