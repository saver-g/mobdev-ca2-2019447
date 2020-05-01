import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-quote-details',
    templateUrl: './quote-details.page.html',
    styleUrls: ['./quote-details.page.scss'],
})

export class QuoteDetailsPage implements OnInit {

    // Variables declared
    quote: any;
    quoteId = null;
    isFavourited = false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    // Initialisation
    ngOnInit() {
        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
            console.log(JSON.stringify(this.quote.quoteId));
        });

        // Function to check whether quote is marked as favourite
        this.favouriteService.isFavourited(this.quoteId).then(isFav => {
            this.isFavourited = isFav;
        });
    }

    // Function to favourite quotes
    favouriteQuote() {
        this.favouriteService.favouriteQuote(this.quoteId).then(() => {
            this.isFavourited = true;
        });
    }

    // Function to unfavourite quotes
    unfavouriteQuote() {
        this.favouriteService.unfavouriteQuote(this.quoteId).then(() => {
            this.isFavourited = false;
        });
    }
}
