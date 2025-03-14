interface IUser {
    id: number;
    name: string;
}

class User implements IUser {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    async getUser(): Promise<IUser> {
        return this;
    }
}

async function main() {
    const user1: User = new User(1, 'John');
    const user2: User = new User(2, 'Jane');

    console.log(await user1.getUser());
    console.log(await user2.getUser());
}

main().catch(console.error);
