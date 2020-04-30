import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'deathfilter'
})

export class DeathfilterPipe implements PipeTransform {

    transform(deaths: any[], keyword: string): any[] {

        // If no keyword is entered in searchbar, returns all deaths
        if (keyword.length === 0) {
            return deaths;
        }

        // Converts entered keyword to lower case
        keyword = keyword.toLocaleLowerCase();

        //This returns the results of filtering the array according to the keyword
        return deaths.filter(death => {

            // Functions to check if entered keyword is a death name, responsible, cause or last words
            return death.death.toLocaleLowerCase().includes(keyword)
                || death.responsible.toLocaleLowerCase().includes(keyword)
                || death.cause.toLocaleLowerCase().includes(keyword)
                || death.last_words.toLocaleLowerCase().includes(keyword);
        });
    }
}