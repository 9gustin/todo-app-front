import {IconDelete} from '../texts/icons';

const TextInput = props => <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" value={props.value} onChange={props.handleChange}/>

const CheckboxInput = props => <input type="checkbox" checked={props.checked} onChange={props.handleChange} id={props.id}/>

const Button = props => <button className={`${props.className}`} type={props.type ? props.type : "button"} onClick={props.handleClick}>{props.children}</button>

const AddButton = props => <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type={props.type} handleClick={props.handleClick}>{props.text || "Add"}</Button>

const DeleteAllButton = props => <Button handleClick={props.handleClick}><IconDelete/> {props.text || "Delete all"}</Button>

export {TextInput, AddButton, DeleteAllButton, CheckboxInput};