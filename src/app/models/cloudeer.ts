export class Cloudeer {
    public service: string;
    public url: string;
    public params: any;

    public constructor( data: any = {}) {
        this.service = data.service || '';
        this.url = data.url || '';
        this.params = data.params || {};
    }
}
