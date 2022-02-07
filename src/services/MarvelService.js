

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=3f788dc0323e2d021eb375aff2b58bb4'

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Cloud not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters =() => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210%20&${this._apiKey}`);
    }
    getCharacter =(id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this.apiKey}`);
    }
}

export default MarvelService;