export abstract class BaseService {
    public readonly ORIGIN: string = 'https://api.tvmaze.com';
    protected endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = `${this.ORIGIN}/${endPoint}`;
    }
}