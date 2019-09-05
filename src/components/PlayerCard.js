import React from 'react';
import _ from 'lodash';
import champions from 'lol-champions';
import spells from 'lol-spells';

export default (props) => {

    const champion = _.find(champions, { 'key': `${props.player.championId}` });
    const spell1 = _.find(spells, { 'key': `${props.player.spell1Id}` });
    const spell2 = _.find(spells, { 'key': `${props.player.spell2Id}` });

    return (
        <div>
            <img src={champion.icon} />
            <div>
                <div><img src={spell1.icon} /></div>
                <div><img src={spell2.icon} /></div>
            </div>
            <div>{props.player.summonerName}</div>
        </div>
    );
};