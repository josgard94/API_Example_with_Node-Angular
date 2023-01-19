import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/services/version/version.service';
@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})

export class VersionComponent implements OnInit {
  versionNumber:any

  constructor(private versionSvc: VersionService) { }
  
  ngOnInit(): void {
    this.getVersion()
  }

  async getVersion(){
    this.versionSvc.getVersion().subscribe( (res) =>{
       console.log(res)
       this.versionNumber = res.version 
    })
  }
}
