import React, {Component} from 'react';
import SectionTitle from '../../../general/misc/titles/SectionTitle';
import Color from './Color';

export default class Colors extends Component {
    render() {
        return (
            <section id="colors">
                <div className="container">
                    <SectionTitle subtitle="Farben" title="Weiß-Grau">
                        Der Content sollte immer im Kontrast zum Hintergrund stehen. Durch die richtige Nutzung unserer
                        Farben können wir eine hohe Lesbarkeit bei allen Online- und Printanwendungen gewährleisten.
                    </SectionTitle>
                    <div className="content">
                        <div className="flex-list icons">
                            <Color id="one" hex="#ffffff" name="Wei&szlig;">
                                Für Titel auf dunklem Hintergrund.
                            </Color>
                            <Color id="two" hex="#eeeeee" name="Hellgrau">
                                Für Texte auf dunklem Hintergrund.
                            </Color>
                            <Color id="three" hex="#444444" name="Dunkelgrau">
                                Für Texte auf hellem Hintergrund.
                            </Color>
                            <Color id="four" hex="#222222" name="Mega-Dunkelgrau">
                                Für Titel auf hellem Hintergrund.
                            </Color>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
