import { ReactNode } from 'react';

const HINT = 'hint';

export type HintBoxTypes = {
  mode: 'hint';
  children: ReactNode;
};

export type WarningBoxTypes = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

export type InfoBoxTypes = HintBoxTypes | WarningBoxTypes;

function InfoBox(props: InfoBoxTypes) {
  const { children, mode } = props;

  if (mode === HINT) {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;