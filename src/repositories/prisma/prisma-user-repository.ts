import { PrismaService } from './../../database/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../user-repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) {}

    async createUser(name: string, email: string): Promise<any> {
        const result = await this.prisma.user.create({
            data: {
                name,
                email,
            },
        });

        return result;
    }
}
