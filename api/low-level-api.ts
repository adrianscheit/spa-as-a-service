export type Params = {[name: string]: (string | number | boolean)[]}

export interface Request {
    path: string[];
    params: {[name: string]: (string | number | boolean)[]};
    action: string;
}