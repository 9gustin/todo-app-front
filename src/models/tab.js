import {stringComparator} from '../utils/stringComparator';

export default class Tab{
    name;
    selected;
    constructor(config){
        if(config){
            this.name = config.name;
            this.selected = config.selected;
        }
    }

    isCompleted = () => stringComparator(this.name, 'completed');
    isActive = () => stringComparator(this.name, 'active');
    isAll = () => stringComparator(this.name, 'all');
}