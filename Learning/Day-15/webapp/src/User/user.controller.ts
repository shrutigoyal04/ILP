import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService.addUser({id:1,name:"Shruti",email:"shru@gmail.com"})
  }   //dependency injection

  @Get()
  findall(){
    return this.userService.findUsers();
  }

  @Post()
  createUser(@Body() user:CreateUserDto){
   return this.userService.addUser({id:2,...user});
  }
  @Post(':id')
  createUserWithId(@Param('id') id:number,@Body() user:CreateUserDto){
   return this.userService.addUser({id,...user});
  }
}
