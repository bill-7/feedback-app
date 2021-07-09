import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  companyName: String = ""

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.companyName = params.companyName
    })
  }

}
