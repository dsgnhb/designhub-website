import React from 'react';
import LinkDuo from '../../../general/misc/LinkDuo';

export default function Features() {
    return (
        <section id="features">
            <div className="container flex-list icons">
                <Category id="topdesign" name="Top Design" link="/topdesign">
                    Stelle in unserem monatlichen Wettbewerb deine Design Skills unter Beweis und staube tolle Preise
                    ab!
                </Category>
                <Category id="levels" name="Leaderboard" link="/levels">
                    Für jede deiner Nachrichten kriegst du XP. So kannst du im Leaderboard aufsteigen und einen Platz im
                    Ranking ergattern. (und cool sein)
                </Category>
                <Category id="night" name="Spam, @everyone und Memes" link="https://discordapp.com/invite/PGv5TR3">
                    Spam Tag und Nacht - So musst du nie alleine sein. Auf unserem Discord ist immer was los!
                </Category>
            </div>
        </section>
    );
}


export function Category(props) {
    if (props.link) {
        return (
            <LinkDuo to={props.link}>
                <div className="item">
                    <div className={`icon ${props.id}`} />
                    <h3>{props.name}</h3>
                    <p>{props.children}</p>
                </div>
            </LinkDuo>
        );
    } else {
        return (
            <div className="item">
                <div className={`icon ${props.id}`} />
                <h3>{props.name}</h3>
                <p>{props.children}</p>
            </div>
        );
    }
}
