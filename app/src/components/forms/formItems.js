import {IconDelete} from '../texts/icons';

const TextInput = () => <input type="text"/>

const Button = props => <button type="button" onClick={props.handleClick}>{props.children}</button>

const AddButton = props => <Button handleClick={props.handleClick}>{props.text || "Add"}</Button>

const DeleteAllButton = props => <Button handleClick={props.handleClick}><IconDelete/> {props.text || "Delete all"}</Button>

export {TextInput, AddButton, DeleteAllButton};