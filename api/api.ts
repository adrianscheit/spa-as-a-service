import { Request } from "./low-level-api";

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

export type OutputDataType = 'text' | 'link' | 'imgSrc';

/// First Column is always the primary key - not displayed directly
export interface Data2D extends ParametrizedItem {
    columns: { label: string; type: OutputDataType; };
    data: (string | number)[][];
    selectable: 'no' | 'single' | 'multiple';
    triggerRequestOnChange: boolean;
    sortable: boolean;
    exportable: boolean;
}

export interface Button extends ParametrizedItem {
    imgSrc?: string;
}

export interface Operations {
    header?: string;
    staticContent?: { value: string; style?: 'error' | 'warning' | 'info', type: OutputDataType }[];
    tags?: { label: string, value: string };
    fields?: Field[];
    tables?: Data2D[];
    cards?: Data2D[];
    actions?: Button[];
    dialog?: Operations;
}

export interface RootOperations extends Operations, Partial<Request> {
    menu?: RootMenuItem;
    refreshIntervalSecounds?: number;
}
