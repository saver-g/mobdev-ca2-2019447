import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})

export class CharacterDetailsPage implements OnInit {

    // Variables declared
    character: any;
    characterId = null;
    isLiked = false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    // Initialisation
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.character_id));
        })

        // Function to check whether character is marked as liked
        this.favouriteService.isLiked(this.characterId).then(isFav => {
            this.isLiked = isFav;
        })
    }

    // Function to unfavourite characters
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isLiked = true;
        });
    }

    // Function to favourite characters
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isLiked = false;
        });
    }
}
