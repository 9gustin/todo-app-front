import {AddButton, TextInput} from './formItems';

const FormTodo = props => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Submit!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput/>
            <AddButton/>
        </form>
    );
};

export {FormTodo};