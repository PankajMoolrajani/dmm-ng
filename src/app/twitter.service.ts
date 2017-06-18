import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitterService {
  constructor(private http: Http) {}
  getJobs() {
    var jobs = {}
    console.log('Twitter Service Called !');
    return this.http.get('https://dmm-db.firebaseio.com/jobs.json')
    .map(
        (response: Response) => {
          var data = response.json();
          console.log(data);
          var jobs = [], item;

          for (var type in data) {
            //console.log(type);
              item = {};
              item.name = type;
              item.status = data[type]['status'];
              item.num_tasks = data[type]['tasks'].length;
              jobs.push(item);
          }
          console.log(jobs);
          return jobs;
        }

      )
  }

  getJobsStatus() {
    var dict_jobs = this.getJobs()
    for (var type in dict_jobs) {
      //console.log(type);
    }
    return dict_jobs;
  }
}
