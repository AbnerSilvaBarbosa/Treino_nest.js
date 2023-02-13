import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
    @IsNotEmpty({ message: 'The name is required' })
    @Length(3, 108)
    name: string;

    @IsNotEmpty()
    email: string;
}
