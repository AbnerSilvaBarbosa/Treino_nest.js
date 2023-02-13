import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserBody } from './dtos/create-user-body';
import { UserRepository } from './repositories/user-repository';

@Controller('say')
export class AppController {
    constructor(private userRepository: UserRepository) {}

    @Get('hello')
    getHello(): string {
        return 'Hello world';
    }

    @Post('create')
    async createUser(@Body() body: CreateUserBody) {
        const { name, email } = body;

        await this.userRepository.createUser(name, email);

        // const user = await this.prisma.user.create({
        //     data: {
        //         email: email,
        //         name: name,
        //     },
        // });
    }
}
