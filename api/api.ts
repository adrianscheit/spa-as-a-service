import { Params } from "./low-level-api";

export interface MenuItem {
    route: string;
    label: string;
    info?: string;
    items: MenuItem[];
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
    info?: string;
    placeholder: string;
    value: string;
    type: string;
    disabled: boolean;
    attributes: { [name: string]: string };
    triggerActionOnChange: boolean;
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
}

export interface Operations {
    header?: string;
    text?: { text: string; type?: 'error' | 'warning' | 'info' }[];
    statuses?: { label: string, value: string };
    fields?: Field[];
    tables?: Data2D[];
    cards?: Data2D[];
    buttons?: Button[];
    dialog?: Operations;
    closeDialog?: {};
    tabs?: Operations[];
}

export interface RootOperations extends Operations {
    menu?: RootMenuItem;
    navigate?: string[];
    params?: Params;
    spinner?: boolean;
}
