export abstract class UserRepository {
    abstract createUser(name: string, email: string): Promise<any>;
}
