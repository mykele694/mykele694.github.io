export class User{
    constructor(
        public email:string,
        private _token:string,
        private _expirationDate:Date
    ){}
    get token(){
        if(!this._token||new Date()>new Date(this._expirationDate)){
            return null}
        else{
            return this._token
        }
    }
    }