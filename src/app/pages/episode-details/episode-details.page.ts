import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})

export class EpisodeDetailsPage implements OnInit {

    // Variables declared
    episode: any;
    episodeId = null;
    isFavourite = false;
    characters = [];

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    // Initialisation
    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episode.episode_id));

            // Lists all characters, each in a separate line
            this.characters = res[0].characters;
            console.log("character:", this.characters);
        })

        // Function to check whether episode is marked as favourite
        this.favouriteService.isFavourite(this.episodeId).then(isFav => {
            this.isFavourite = isFav;
        })
    }

    // Function to favourite episodes
    favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = true;
        });
    }

    // Function to unfavourite episodes
    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = false;
        });
    }
}
