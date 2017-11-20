import { Component, OnInit } from '@angular/core';
import {Category} from "../../client-container/model/model";

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {

  employes: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.employes.push(new Category(0, "Tous"));
    this.employes.push(new Category(1, "All"));
  }

}
