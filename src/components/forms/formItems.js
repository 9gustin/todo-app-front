import {IconDelete} from '../texts/icons.js';

const TextInput = props => <input ref={props.reference} placeholder={props.placeholder} className="mr-4 w-6/12 text-sm hadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal" type="text" value={props.value} onChange={props.handleChange}/>

const CheckboxInput = props => <input className={props.className} type="checkbox" checked={props.checked} onChange={props.handleChange} id={props.id}/>

const Button = props => <button className={`${props.className}`} type={props.type ? props.type : "button"} onClick={props.handleClick}>{props.children}</button>

const AddButton = props => <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-3 px-8 rounded" type={props.type} handleClick={props.handleClick}>{props.text || "Add"}</Button>

const DeleteAllButton = props => <Button className={props.className} handleClick={props.handleClick}><IconDelete/> {props.text || "Delete all"}</Button>

export {TextInput, AddButton, DeleteAllButton, CheckboxInput};