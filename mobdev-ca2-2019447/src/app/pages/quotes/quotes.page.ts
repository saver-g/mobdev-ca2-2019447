import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})

export class QuotesPage implements OnInit {

    // Variables declared
    quotes: Observable<any>;
    quotes_array: any[] = [];
    findKey = '';

    constructor(private router: Router, private api: ApiService) { }

    // Initialisation
    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log(this.quotes_array);
        });
    }

    getQuoteKey(event) {
        const keyword = event.target.value;
        this.findKey = keyword;
        console.log(keyword);
    }



    // Retrieves quotes' id by 'routing' to a new page (details)
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }
}