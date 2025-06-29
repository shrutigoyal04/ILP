import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'EMPLOYEE' | 'ADMIN') {
        return this.usersService.findAll(role);
    }
    
    // @Get('interns')
    // findAllInterns() {
    //     return [];
    // }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() user:{name: string; email: string; role: 'INTERN' | 'EMPLOYEE' | 'ADMIN'}) {
        return this.usersService.create(user);
    }

    
    @Patch(':id')
    update(@Param("id",ParseIntPipe) id: number,@Body() userUpdate: {name?: string; email?: string; role?: 'INTERN' | 'EMPLOYEE' | 'ADMIN'}) {
        return this.usersService.update(id, userUpdate);
    }

    
    @Delete(':id')
    delete(@Param("id",ParseIntPipe) id: number) {
        this.usersService.delete(id);
    }

}
