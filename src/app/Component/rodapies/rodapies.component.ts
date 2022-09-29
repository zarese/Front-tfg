import { Component, OnInit } from '@angular/core';
import { Rodapies } from 'src/app/Models/Rodapies.interface';
import { RodapiesService } from 'src/app/Service/rodapies.service';

@Component({
  selector: 'app-rodapies',
  templateUrl: './rodapies.component.html',
  styleUrls: ['./rodapies.component.css']
})
export class RodapiesComponent implements OnInit {
  rodapiess!: Rodapies[];
  constructor(private rodapiesSrv: RodapiesService) { }

  ngOnInit(): void {
    this.listarodapies();
  }
  listarodapies() {
    this.rodapiesSrv.selectRodapies()
    .subscribe(res => {
      console.log(res);

      this.rodapiess = Object.values(res)})

}

}
