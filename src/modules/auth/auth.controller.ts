import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { InputLogin, OutputLogin } from 'src/interface/auth/auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() inputLogin: InputLogin): Promise<any | OutputLogin> {
    return await this.authService.Login(inputLogin);
  }
}
