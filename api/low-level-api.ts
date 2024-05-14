export type Params = { [name: string]: string | string[] | number | number[] | boolean | boolean[] }

export interface Request {
    path: string[];
    params: Params;
}