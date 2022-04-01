import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Card({cardInfo, removeFunc, ...props}) {
    return (
        <div className="cards-list__card card">
            <div className="card__remove-btn" onClick={removeFunc}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div>
            <div className="card__img-wrap">
                    {(cardInfo.image) 
                    ?   <div className="card__img-inner">
                            <img className="card__img_back" src={cardInfo.image.original} />
                            <img className="card__img_front" src={cardInfo.image.original} />
                        </div>  
                    :   <div className="card__img-inner">
                            <p className="card__no-image">Image missing</p>
                        </div>
                    }
                    
                
            </div>
            <div className="card__content">
                <h2 className="card__title">{cardInfo.name}</h2>
                <table className="card__table-info">
                    <tbody>
                        <tr>
                            <td className="card__cell cell-info">
                                <p className="cell-info__body">{cardInfo.status}</p>
                                <h3 className="cell-info__subtitle">status</h3>
                            </td>
                            <td className="card__cell cell-info">
                                <p className="cell-info__body">{(cardInfo.previousEpisode) ? cardInfo.previousEpisode.airdate : "-"}</p>
                                <h3 className="cell-info__subtitle">last episode</h3>
                            </td>
                            <td className="card__cell cell-info">
                                <p className="cell-info__body">{(cardInfo.nextEpisode) ? cardInfo.nextEpisode.airdate : "-"}</p>
                                <h3 className="cell-info__subtitle">next episode</h3>
                            </td>
                        </tr>
                        <tr>
                            <td className="card__cell cell-info">
                                <p className="cell-info__body">{(cardInfo.network) ? cardInfo.network.name : "-"}</p>
                                <h3 className="cell-info__subtitle">network</h3>
                            </td>
                            <td className="card__cell cell-info">
                                <p className="cell-info__body">{(cardInfo.rating.average) ? cardInfo.rating.average : "-"}</p>
                                <h3 className="cell-info__subtitle">rating</h3>
                            </td>
                            <td className="card__cell cell-info">
                                <p className="cell-info__body"><a href={cardInfo.url} target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a></p>
                                <h3 className="cell-info__subtitle">serial page</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Card;