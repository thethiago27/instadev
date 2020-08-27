import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GithubService} from '../github.service';
import {GithubProfile} from '../github.profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

   userInfos = [];
   followers: GithubProfile[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService,
  ) { }

  getInfos(): void {
    this.githubService.getGithubProfile(this.activatedRoute.snapshot.params.username).subscribe(
      githubService => this.userInfos.push(githubService)
    );
  }

  getFollowers(): void {
    this.githubService.getFollowers(this.activatedRoute.snapshot.params.username).subscribe(
      githubService => this.followers = githubService
    );
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  close(): void {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  ngOnInit(): void {
    this.getInfos();
  }

}
