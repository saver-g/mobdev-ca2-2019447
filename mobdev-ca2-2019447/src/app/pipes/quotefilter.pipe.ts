// Source: https://codeburst.io/create-a-search-pipe-to-dynamically-filter-results-with-angular-4-21fd3a5bec5c

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'quotefilter'
})

export class QuotefilterPipe implements PipeTransform {

    transform(quotes: any[], keyword: string): any[] {

        // If no keyword is entered in searchbar, returns all quotes
        if (keyword.length === 0) {
            return quotes;
        }

        // Converts entered keyword to lower case
        keyword = keyword.toLocaleLowerCase();

        // Function to return results based on entered keyword
        return quotes.filter(quote => {

            // Functions to check if entered keyword is a quote or author
            return quote.quote.toLocalLowerCase().includes(keyword)
            || quote.author.toLocalLowerCase().includes(keyword);
        })
    }
}
