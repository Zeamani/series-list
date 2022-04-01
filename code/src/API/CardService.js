function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getIDCards() {
    const idCards = getCookie('userCardsList');

    return (idCards) ? JSON.parse(idCards) : [];
}

export default class cardService {

    static async getSerialInfo(idSerial) {
        const response = await fetch(`https://api.tvmaze.com/shows/${idSerial}`);    
        const resultResponse = await response.json();

        if (resultResponse._links.nextepisode) {
            const responseNextEpisode = await fetch(`${resultResponse._links.nextepisode.href}`);
            const resultResponseNextEpisode = await responseNextEpisode.json();
            resultResponse.nextEpisode = resultResponseNextEpisode;
        }

        if (resultResponse._links.previousepisode) {
            const responsePreviousEpisode = await fetch(`${resultResponse._links.previousepisode.href}`);
            const resultResponsePreviousEpisode = await responsePreviousEpisode.json();
            resultResponse.previousEpisode = resultResponsePreviousEpisode;
        }

        return resultResponse;
    }

    static async getUserCards() {
        let result = [];

        const idCards = getIDCards(); 

        for (let item of idCards) {
            const cardInfo = await cardService.getSerialInfo(item)

            result.push(cardInfo);
        }
        
        return result;
    }

    static async getBDCards(serachStr) {
        const idCards = getIDCards(); 

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${serachStr}`); 
        const resultResponse = await response.json();
        const listResult = resultResponse.filter( item => !idCards.includes(item.show.id));

        return listResult;
    }

    static removeCardFromCookie(idCard) {
        const idCards = getIDCards(); 
        const idDelete = idCards.indexOf(idCard);
        idCards.splice(idDelete, 1);
        document.cookie = `userCardsList = ${JSON.stringify(idCards)}; expires=Mon, 1 Jan 2100 00:00:00 GMT`;
    }

    static addCardToCookie(idCard) {
        const idCards = getIDCards(); 
        idCards.push(idCard);
        document.cookie = `userCardsList = ${JSON.stringify(idCards)}; expires=Mon, 1 Jan 2100 00:00:00 GMT`;
    }

}