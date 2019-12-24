import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  info() {
    return 'Nguyễn Anh Văn (Full-Stack Developer)'
  }
}