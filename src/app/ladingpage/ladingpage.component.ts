import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ladingpage',
  templateUrl: './ladingpage.component.html',
  styleUrl: './ladingpage.component.css'
})
export class LadingpageComponent {

  constructor(private _router: Router){}

  onRedirect(path: string){
    this._router.navigate([path]);
  }
}
