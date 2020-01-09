import React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import NavLenke from 'nav-frontend-lenker';
import NavEkspanderbartPanel from 'nav-frontend-ekspanderbartpanel';
import NavLesmerpanel from 'nav-frontend-lesmerpanel';

const supportedTypografi = [
    'sidetittel',
    'innholdstittel',
    'systemtittel',
    'undertittel',
    'ingress',
    'element',
    'normaltekst',
    'etikettLiten',
    'undertekstBold',
    'undertekst',
];

export const Innhold = (props: any) => (
    <div {...props} className={`innhold${props.className || 'null'}`} />
);

export const Avsnitt = (props: any) => {
    const type = props.type && supportedTypografi.includes(props.type) ? props.type : 'normaltekst';
    return <TypografiBase {...props} className="innhold__avsnitt" type={type} />;
};

export const Variabel = (props: any) => {
    const { values, children } = props;
    return <span {...props}>{values[children]}</span>;
};

export const Unbreakable = (props: any) => (
    <span className="innhold__unbreakable">{props.children}</span>
);

export const Lenke = (props: any) => <NavLenke href={props.url}>{props.children}</NavLenke>;

export const Lesmerpanel = (props: any) => {
    const { children, ...otherProps } = props;

    return <NavLesmerpanel {...otherProps}>{children}</NavLesmerpanel>;
};

export const EkspanderbartPanel = (props: any) => {
    const { intro, children, border = 'true', ...componentProps } = props;

    return (
        <NavEkspanderbartPanel
            {...componentProps}
            border={border === 'false' ? false : true}
            tittel={intro}
        >
            {children}
        </NavEkspanderbartPanel>
    );
};

export const Liste = (props: any) => (
    <TypografiBase type={props.type || 'normaltekst'} {...props} tag={props.tag || 'ul'} />
);
