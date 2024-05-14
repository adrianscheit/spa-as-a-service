export type Params = { [paramName: string]: string[] | number[] | boolean[] }

export interface Request {
    path: string[];
    params: Params;
}