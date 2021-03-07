import { UserRepo } from "./UserRepo";

export class GithubUser {
    username: string;
    name: string;
    avatar: string;
    repos: UserRepo[];
    totalRepos: number;
    followers: number;
    following: number;
    created: string;
    githubLink: string;


    constructor(username: string, name: string, avatar: string, repos: UserRepo[],
        totalRepos:number, followers: number, following: number, created: string, githubLink: string ) {
        this.username = username;
        this.name = name;
        this.avatar = avatar;
        this.repos = repos;
        this.totalRepos = totalRepos;
        this.followers = followers;
        this.following = following;
        this.created = created;
        this.githubLink = githubLink;
    }
}