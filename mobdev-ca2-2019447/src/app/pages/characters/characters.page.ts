//Source: https://ionicframework.com/docs/api/infinite-scroll

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})

export class CharactersPage implements OnInit {

    // Variables declared
    offset = 0;
    characters = [];
    page = 0;

    constructor(private router: Router, private http: HttpClient, private api: ApiService) { }

    // Initialisation
    ngOnInit() {
        this.loadCharacters();
    }

    // Function to retrieve data from api and send value to offset
    loadCharacters(loadData = false) {
        if (loadData) {
            this.offset += 15;
        }

        // Retrieves data and saves it in an array
        this.api.getCharacters(this.offset).subscribe(data => {
            console.log('mydata_character:', data)
            this.characters = this.characters.concat(data);
        })
    }

    // Function to load data once an 'event' occurs (infinite scroll)
    loadData(event) {
        setTimeout(() => {
            event.target.complete(this.loadCharacters(event));

            // The 'event' will cease once characters' length is over 60
            if (this.characters.length > 60) {
                event.target.disabled = true;
            }
        }, 500);
    }

    // Retrieves characters' id by 'routing' to a new page (details)
    openDetails(character) {
        let characterId = character.char_id;
        console.log("Character_id: ", characterId);
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
}