import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import {GithubRepos} from '../github.repos';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.sass']
})
export class ReposComponent implements OnInit {

  userRepos: GithubRepos[];

  constructor(
    private githubService: GithubService,
    private activatedRoute: ActivatedRoute,
  ) { }

  getRepos(): void {
    this.githubService.getGithubRepos(this.activatedRoute.snapshot.params.username)
      .subscribe(githubService => this.userRepos = githubService);
  }

  ngOnInit(): void {
    this.getRepos();
  }

}
