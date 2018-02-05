import React from 'react';
import {MainTitle, SectionTitle} from '../general/misc/Titles';
import LinkDuo from '../general/misc/LinkDuo';

export default function Partner() {
    return (
        <div>
            <section id="partner">
                <div className="container">
                    <MainTitle
                        title="Danke."
                        subtitle="Partner"
                        link="/donate"
                        linktitle="Falls Du uns auch unterstützen möchtest, kannst Du das hier tun!"
                    >
                        Dank unserer Partner, die uns stets unterstützen, können wir das Projekt aktiv halten. Hier
                        findest du alle Informationen rund um sämtliche aktuelle Partnerschaften. Solltest du das
                        Interesse haben, ebenfalls eine Zusammenarbeit mit uns in Erwägung zu ziehen, schreib' uns ne
                        Mail unter{' '}
                        <LinkDuo to="mailto:info@dsgnhb.de" className="main">
                            info@dsgnhb.de
                        </LinkDuo>.
                    </MainTitle>
                </div>
            </section>
            <PartnerInfo
                name="Signaltransmitter"
                task="Hosting"
                link="https://signaltransmitter.de/ref/234ra69r31584c44"
            >
                Alle Bots auf unserem Discord werden von den Jungs von Signaltransmitter gehostet. Du suchst einen guten
                Hoster für deine Projekte und Ideen? Da empfehlen wir ganz klar Signaltransmitter!
            </PartnerInfo>
            <PartnerInfo name="ShortTech" task="Redaktionelle Inhalte" link="http://shorttech.de/?ref=designhub">
                Rund um Redaktionelle Inhalte ist das Team von ShortTech stets unser Ansprechpartner. In ihrem Blog
                sowie auf Twitter erfährst du alles rund um die Welt der Technik!
            </PartnerInfo>
            <PartnerInfo name="smashFM" task="Musik" link="https://www.smashFM.de/?ref=designhub">
                Smash! Egal wann, egal wo! Dort hörst du nicht nur die aktuellsten Lieder, sondern auch Klassiker aus
                vergangenen Zeiten. Von Charts über Dance bis hin zu Chillout ist bei denen alles dabei.
            </PartnerInfo>
        </div>
    );
}

function PartnerInfo(props) {
    return (
        <section id={props.name.toLowerCase()}>
            <div className="container">
                <SectionTitle
                    subtitle={props.task}
                    title={props.name}
                    link={props.link}
                    linktitle="Hier geht's zur Website"
                >
                    {props.children}
                </SectionTitle>
            </div>
        </section>
    );
}
