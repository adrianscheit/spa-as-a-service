export interface MenuItem {
    route: string;
    label: string;
    description?: string;
    items: MenuItem[];
    click: () => Operations;
}

export interface RootMenuItem {
    applicationTitle: string;
    applicationSubtitle: string;
    applicationFooter: string;
    items: MenuItem[];
}

export interface Field {
    name: string;
    label: string;
    title: string;
    placeholder: string;
    value: string;
    type: string;
    attributes: { [name: string]: string };
    onchange: () => Operations;
}

export type OutputDataType = 'string' | 'number' | 'link' | 'imgSrc' | 'imgInline';

/// First Column is always the primary key - not displayed directly
export interface Data2D {
    name: string;
    columns: { type: OutputDataType };
    data: (string | number)[][];
    selectable: 'no' | 'single' | 'multiple';
}

export interface Button {
    name: string;
    label: string;
    click: () => Operations;
}

export interface Operations {
    menu: RootMenuItem;
    fields: Field[];
    tables: Data2D[];
    cards: Data2D[];
    buttons: Button[];
    openDialog: { name: string; content: Operations };
    closeDialog: { name: string; };
}
