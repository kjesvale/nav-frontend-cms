import XMLToReact from '@condenast/xml-to-react';
import * as Node from './Node';
import './innhold.less';

const renderAs = (type: any) => (attributes: any) => ({ type, props: attributes });

const renderWithValues = (type: any) => (props: any, values: any) => ({
    type,
    props: {
        ...props,
        values,
    },
});

const renderWithClassName = (type: any) => (props: any, values: any) => ({
    type,
    props: {
        ...props,
        className: values.className,
    },
});

const xmlToReact = new XMLToReact({
    innhold: renderWithClassName(Node.Innhold),
    avsnitt: renderAs(Node.Avsnitt),
    lenke: renderAs(Node.Lenke),
    liste: renderAs(Node.Liste),
    punkt: renderAs('li'),
    b: renderAs('b'),
    i: renderAs('i'),
    span: renderAs('span'),
    lesmerpanel: renderAs(Node.Lesmerpanel),
    ekspanderbartpanel: renderAs(Node.EkspanderbartPanel),
    variabel: renderWithValues(Node.Variabel),
    unbreakable: renderAs(Node.Unbreakable),
});

interface InnholdProps {
    source: string;
    values?: Object;
    className?: string;
}

const Innhold = ({ source, values = {}, className }: InnholdProps) => {
    try {
        const toRender = xmlToReact.convert(source, {
            ...values,
            className,
        });
        return toRender;
    } catch (e) {
        console.error('Error converting XML to React components:', e);
        return null;
    }
};

export default Innhold;
