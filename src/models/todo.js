export default class Todo{
    _id;
    _name;
    _completed;
    constructor(config){
        if(config){
            this._id = config.id || config._id;
            this._name = config.name || '';
            this._completed = config.completed;
        }
        else this._name = '';
    }
    initAsNew(){
        this._completed = false;
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
    set completed (value) {
        return this._completed = value;
    }
    get name(){
        return this._name;
    }
    toAPI(){
        return {
            _id: this._id,
            name: this._name,
            completed: this._completed
        }
    }
}
