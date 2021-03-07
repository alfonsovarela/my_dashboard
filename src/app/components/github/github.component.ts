import { Component, OnInit } from '@angular/core';
import { GithubUser } from 'src/app/models/GithubUser';
import { UserRepo } from 'src/app/models/UserRepo';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user: GithubUser;
  username = '';
  userDataLoaded = false;
  reposLoaded = false;
  isDataLoading = false;
  error = false;
  reposList: UserRepo[] = [];
  constructor(private _service: GithubService) { }

  ngOnInit() {
  }

  loadData() {
    this.isDataLoading = true;
    this.error = false;
    setTimeout( () => {
      this.getSearchedUserData();
      this.loadRepos();
      this.isDataLoading = false;
    }, 2000);
  }

  loadRepos() {
    this.reposLoaded = false;
    this.reposList = [];
    this._service.getReposFromUser(this.username).subscribe(data => {
      this.reposLoaded = true;
      data.forEach(repo => {
        const userRepo = new UserRepo(repo.full_name, repo.private, repo.description, repo.html_url);
        this.reposList.push(userRepo);
      });
    }, error => {
      this.error = true;
      console.log(error);
    });
    console.log(this.reposList);
  }

  getSearchedUserData() {
    this.user = null;
    this.userDataLoaded = false;
    this._service.getUserData(this.username).subscribe(data => {
      this.username = '';
      this.userDataLoaded = true;
      // console.log(data.name);
      this.user = new GithubUser(data.login, data.name, data.avatar_url,
        [], data.public_repos, data.followers, data.following, data.created_at, data.html_url);
        console.log(this.user);
    },error => {
      this.error = true;
      console.log(error);
    });
  }

}
