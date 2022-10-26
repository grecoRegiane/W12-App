import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  nome = JSON.parse(localStorage.getItem("W12Project_nome") || '{}');
  email =JSON.parse(localStorage.getItem("W12Project_email") || '{}');

  ngOnInit() {
  }
}
