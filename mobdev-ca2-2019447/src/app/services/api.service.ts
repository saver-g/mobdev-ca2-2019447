// Source: Mikhail Timofeev --> Mobile Development Slides & Classes

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // Base URL to be used by all functions
    baseUrl='https://www.breakingbadapi.com/api'

    constructor(private http: HttpClient) { }

    // Function to retrieve all episodes
    getEpisodes() {
        return this.http.get(`${this.baseUrl}/episodes`);
    }

    // Function to retrieve episodes based on ID
    getEpisode(id) {
        return this.http.get(`${this.baseUrl}/episodes/${id}`);
    }

    // Function to retrieve a limited number of episodes at any one time
    getCharacters(offset) {
        return this.http.get(`${this.baseUrl}/characters?offset=${offset}&limit=15`)
    }

    // Function to retrieve characters based on ID
    getCharacter(id) {
        return this.http.get(`${this.baseUrl}/characters/${id}`);
    }

    // Function to retrieve all quotes
    getQuotes() {
        return this.http.get(`${this.baseUrl}/quotes`);
    }

    // Function to retrieve quotes based on ID
    getQuote(id) {
        return this.http.get(`${this.baseUrl}/quotes/${id}`);
    }

    // Function to retrieve all deaths
    getDeaths() {
        return this.http.get(`${this.baseUrl}/deaths`);
    }
}