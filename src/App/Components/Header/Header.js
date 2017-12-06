import React from 'react';
import './Header.css';

const Header = ( { episodeNum, episodeTitle, openingCrawl }) => {

    const romanNumeral = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII'
    }

    return(
        <div className='Header'>
            <div className='crawl'>
                <div className='title'>
                    <span>Episode {romanNumeral.episodeTitle}</span>
                    <span>{episodeTitle}</span>
                </div>
                <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>
                <p>During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>
                <p>Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....</p>
            </div>
        </div>
    )
}

export default Header;