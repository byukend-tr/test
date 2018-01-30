import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-bloodsearch',
  templateUrl: './bloodsearch.component.html',
  styleUrls: ['./bloodsearch.component.css']
})
export class BloodsearchComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.getNotCurrentLoggedIn();
    
  }

  ngOnInit() {
  }

}
