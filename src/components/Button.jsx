import styles from "./Button.module.css"
import {PlusCircle} from '@phosphor-icons/react'


export function Button({...rest}){
  return(
    <button {...rest}>
      Criar
      <PlusCircle size={16}/>
    </button>
  )
}