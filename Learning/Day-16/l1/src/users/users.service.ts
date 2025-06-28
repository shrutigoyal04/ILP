import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users=[
        {
            "id": 1,
            "name": "John Doe",
            "email": "123@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "2342gmail.com",
            "role": "EMPLOYEE"
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "email": "345@gmail.com",
            "role": "ADMIN" 
        }    
    ]

    findAll(role?: 'INTERN' | 'EMPLOYEE' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    create(user: { name: string; email: string; role: 'INTERN' | 'EMPLOYEE' | 'ADMIN' }) {
        const userByHighestId = [...this.users].sort((a, b) => (b.id) - (a.id));
        const newUser = { id: userByHighestId[0].id +1, ...user };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, userUpdate: { name?: string; email?: string; role?: 'INTERN' | 'EMPLOYEE' | 'ADMIN' }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...userUpdate };
            }
            return user;
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
