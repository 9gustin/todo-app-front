const generateId = function* (){
    let initialId = 1;
    while(true)
        yield initialId++;
}

const idGenerator = generateId();
const getId = () => idGenerator.next().value;

export {getId};