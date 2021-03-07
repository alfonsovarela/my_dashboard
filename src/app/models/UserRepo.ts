export class UserRepo {
    fullName: string;
    isPrivate: boolean;
    description: string;
    link: string;

    constructor(fullName: string, isPrivate: boolean, description: string, link: string) {
        this.fullName = fullName;
        this.isPrivate = isPrivate;
        this.description = description;
        this.link = link;
    }
}