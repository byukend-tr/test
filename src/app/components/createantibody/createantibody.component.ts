import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-createantibody',
  templateUrl: './createantibody.component.html',
  styleUrls: ['./createantibody.component.css']
})
export class CreateantibodyComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.getNotCurrentLoggedIn();
  }

  ngOnInit() {
  }

}
