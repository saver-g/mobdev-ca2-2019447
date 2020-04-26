import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})

export class CharactersPage implements OnInit {

    data = [];
    characters: Observable<any>;

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.characters = this.http.get('https://breakingbadapi.com/api/characters');
        this.characters.subscribe(data => {
            console.log('my data: ', data);
        });
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

    doInfinite(infiniteScroll) {
        setTimeout(() => {
            for(let i = 0; i < 25; i++) {
                this.data.push(this.data.length);
            }

            console.log('Done');
            infiniteScroll.complete();
        }, 500);
    }
}