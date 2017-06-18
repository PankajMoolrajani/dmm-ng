import { Component, OnInit } from '@angular/core';

import { TwitterService } from './../twitter.service';

@Component({
  selector: 'app-middle-box',
  templateUrl: './middle-box.component.html',
  styleUrls: ['./middle-box.component.css']
})

export class MiddleBoxComponent implements OnInit {
  private jobs: any[];
  private isLoading: boolean = false;

  constructor(private twitterService: TwitterService) {}
  ngOnInit() {
    this.isLoading = true;
    this.twitterService.getJobsStatus()
    .subscribe((jobs: any[]) => {
        this.jobs = jobs,
        this.isLoading = false;
      },
      (error: any[]) => console.log('Error: ' + error),
      () => console.log('Completed')
    );
  }
}
