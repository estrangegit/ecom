import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    template: `<div class="container">
    <h1>Page Not Found.</h1>
             <div>
                <button class="btn btn-primary" (click)="goBack()">Go Back</button>
             </div>
             </div>`
})
export class PageNotFoundComponent {

    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();
    }
}
