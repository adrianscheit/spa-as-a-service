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

export interface ParametrizedItem {
    paramName: string;
    label: string;
}

export interface Field extends ParametrizedItem {
    info?: string;
    type: string;
    attributes: { [name: string]: string };
    triggerRequestOnChange: boolean;
}

export type OutputDataType = 'string' | 'number' | 'link' | 'imgSrc' | 'action';

/// First Column is always the primary key - not displayed directly
export interface Data2D extends ParametrizedItem {
    columns: { label: string; type: OutputDataType; };
    data: (string | number)[][];
    selectable: 'no' | 'single' | 'multiple';
    triggerRequestOnChange: boolean;
}

export interface Button extends ParametrizedItem {
    imgSrc?: string;
}

export interface Operations {
    header?: string;
    texts?: { text: string; type?: 'error' | 'warning' | 'info' }[];
    tags?: { label: string, value: string };
    fields?: Field[];
    tables?: Data2D[];
    cards?: Data2D[];
    actions?: Button[];
    dialog?: Operations;
}

export interface RootOperations extends Operations {
    menu?: RootMenuItem;
    path?: string[];
    params?: Params;
    spinnerForSecounds?: number;
    refreshIntervalSecounds?: number;
}
