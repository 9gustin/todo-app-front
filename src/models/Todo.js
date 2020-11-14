export default class Todo{
    _id;
    _name;
    completed;
    constructor(config){
        if(config){
            this._id = config.id;
            this._name = config.name;
            this._completed = config.completed;
        }
    }
    toggleCompleted(){
        this._completed = !this._completed;
    }
    complete(){
        this._completed = true;
    }
    get id(){
        return this._id;
    }
    get completed(){
        return this._completed;
    }
    get name(){
        return this._name;
    }
}