import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year: any =0;
  month: any= 0;
  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    //receive data from url (parameter name of year and month)
    this.year = params.get('year');
    this.month = params.get('month');;

  }
  
  viewAll(){
    this.router.navigate(['/']);
  }
}
