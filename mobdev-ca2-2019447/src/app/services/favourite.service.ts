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


    // A. Favourite Episodes
    
    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY_1);
    }

    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

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

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY_1, result);
            }
        });
    }


    // B. Favourite Characters

    getAllFavouriteCharacters() {
        return this.storage.get(STORAGE_KEY_2);
    }

    isLiked(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

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

    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY_2, result);
            }
        });
    }


    // C. Favourite Quotes

    getAllFavouriteQuotes() {
        return this.storage.get(STORAGE_KEY_3);
    }

    isFavourited(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            return result && result.indexOf(quoteId) !== -1;
        });
    }

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