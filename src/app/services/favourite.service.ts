import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY_1 = 'favouriteEpisodes';
const STORAGE_KEY_2 = 'favouriteCharacters';
const STORAGE_KEY_3 = 'favouriteQuotes';

@Injectable({
    providedIn: 'root'
})

export class FavouriteService {

    constructor(private storage: Storage) { }


    /* ------------------
    A. Favourite Episodes
    -------------------*/

    // Function to retrieve all episodes
    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY_1);
    }

    // Function to check whether episode is marked as favourite
    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    // Function to favourite episode
    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY_1, result);
            } else {
                return this.storage.set(STORAGE_KEY_1, [episodeId]);
            }
        });
    }

    // Function to unfavourite episode
    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY_1, result);
            }
        });
    }


    /* --------------------
    B. Favourite Characters
    ---------------------*/

    // Function to retrieve all characters
    getAllFavouriteCharacters() {
        return this.storage.get(STORAGE_KEY_2);
    }

    // Function to check whether characters is marked as liked
    isLiked(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    // Function to favourite characters
    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage.set(STORAGE_KEY_2, result);
            } else {
                return this.storage.set(STORAGE_KEY_2, [characterId]);
            }
        });
    }

    // Function to unfavourite characters
    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY_2, result);
            }
        });
    }


    /* ----------------
    C. Favourite Quotes
    -----------------*/

    // Function to retrieve all quotes
    getAllFavouriteQuotes() {
        return this.storage.get(STORAGE_KEY_3);
    }

    // Function to check whether quote is marked as favourite
    isFavourited(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            return result && result.indexOf(quoteId) !== -1;
        });
    }

    // Function to favourite quotes
    favouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                result.push(quoteId);
                return this.storage.set(STORAGE_KEY_3, result);
            } else {
                return this.storage.set(STORAGE_KEY_3, [quoteId]);
            }
        });
    }

    // Function to unfavourite quotes
    unfavouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                var index = result.indexOf(quoteId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY_3, result);
            }
        });
    }
}