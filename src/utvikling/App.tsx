import React, { useState, ChangeEvent } from 'react';
import Innhold from '../innhold/Innhold';
import './styles.less';

const source = `<innhold>
    <avsnitt type="systemtittel">Dette er en innholdsfil!</avsnitt>
    <avsnitt>Dette blir tolket som et <b>avsnitt</b> med riktig typografi fra NAV-frontend</avsnitt>
    <avsnitt type="element">Jejjo!</avsnitt>

    <ekspanderbartpanel intro="Jejjo">
        <avsnitt>Superjejjo!</avsnitt>
    </ekspanderbartpanel>

    <lesmerpanel intro="hello" apneTekst="djsakl" lukkTekst="jdskla">
        jejjo
    </lesmerpanel>
</innhold>
`;

const App = () => {
    const [kilde, setKilde] = useState<string>(source);

    return (
        <div className="app">
            <h1>nav-frontend-cms</h1>
            <h2>Input</h2>
            <textarea
                value={kilde}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    setKilde(event.target.value);
                }}
            />

            <h2>Output</h2>
            <output>
                <Innhold source={kilde} />
            </output>
        </div>
    );
};

export default App;
