export class Account {
    public nick: string;
    public open_id: string;
    public picture: string;
    public passport : string;
    public password : string;
    public expires_in : number;
    public ticket :string;

    public constructor( data: any = {}) {
        this.nick = data.nick || '';
        this.open_id = data.open_id || '';
        this.picture = data.picture || '';
        this.passport = data.passport || '';
        this.password = data.password || '';
        this.expires_in = data.expires_in || 0;
        this.ticket = data.ticket || '';
    }
}