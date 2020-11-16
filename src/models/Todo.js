import { getId } from '../utils/idGenerator';

export default class Todo{
    _id;
    _name;
    _completed;
    constructor(config){
        if(config){
            this._id = config.id;
            this._name = config.name;
            this._completed = config.completed;
        }
    }
    initAsNew(){
        this._completed = false;
        this._id = getId();
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