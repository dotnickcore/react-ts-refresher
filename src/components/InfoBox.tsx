import { InfoBoxTypes } from "../models/types/InfoBoxProps";

const HINT = 'hint';

function InfoBox({mode, severity, children}: InfoBoxTypes) {
    if (mode === HINT) {
        <aside className="infobox infobox-hint">
            <p>{children}</p>
        </aside>
    }
    
    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}

export default InfoBox;