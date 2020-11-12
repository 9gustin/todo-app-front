export default class Todo{
    _name;
    completed;
    constructor(config){
        if(config){
            this._name = config.name;
            this._completed = config.completed;
        }
    }
    complete(){
        this._completed = true;
    }
    get completed(){
        return this._completed;
    }
    get name(){
        return this._name;
    }
}