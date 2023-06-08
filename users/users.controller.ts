import { Controller, Body, Post, Get, Param} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto)
  {
    return this.usersService.create(CreateUserDto)


  }

  @Get(':id')
  show(@Param('id') id: string)
  {
    return this.usersService.showById(+id)
  }
  

}
