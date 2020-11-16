import {IconDelete} from '../texts/icons';

const TextInput = props => <input type="text" value={props.value} onChange={props.handleChange}/>

const CheckboxInput = props => <input type="checkbox" checked={props.checked} onChange={props.handleChange} id={props.id}/>

const Button = props => <button type={props.type ? props.type : "button"} onClick={props.handleClick}>{props.children}</button>

const AddButton = props => <Button type={props.type} handleClick={props.handleClick}>{props.text || "Add"}</Button>

const DeleteAllButton = props => <Button handleClick={props.handleClick}><IconDelete/> {props.text || "Delete all"}</Button>

export {TextInput, AddButton, DeleteAllButton, CheckboxInput};