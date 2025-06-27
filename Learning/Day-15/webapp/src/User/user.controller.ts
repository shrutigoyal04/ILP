import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}   //dependency injection

  @Get()
  async findall(){
    return await this.userService.findUsers();
  }

  @Post()
  async createUser(@Body() user:CreateUserDto){
   return await this.userService.addUser(user);
  }
  // @Post(':id')
  // async createUserWithId(@Param('id') id:string,@Body() user:CreateUserDto){
  //   const userWithId: CreateUserDto = { ...user, id };
  //  return await this.userService.addUser(userWithId);
  // }
  @UseGuards(AuthGuard('local'))
  @Post('auth')
  login(@Req() req): any{
  return req.user;
 }
}

  
