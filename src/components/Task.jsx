import { useState } from "react"
import styles from "./Task.module.css"
import { Check, Trash } from '@phosphor-icons/react'

export function Task({id, isChecked, onToggleTask, paragraph, onDeleteTask}){

  function handleToggleTask(){
    onToggleTask(id)
  }

  function handleDeleteTask(){
    onDeleteTask(paragraph)
  }
  
  return(
    <div className={styles.task}>
      <label htmlFor={`checkbox-${id}`}>
        <input 
          onChange={handleToggleTask} 
          checked={isChecked} 
          type="checkbox" 
          id={`checkbox-${id}`} 
        />
        <span>
          {isChecked && <Check border='none' weight="bold" size={12}/>}
        </span>
        <p className={`${styles.paragraph} ${isChecked ? styles.paragraphChecked : ""}`}>
          {paragraph}
        </p>
      </label>
      <div className={styles.trash}>
        <Trash onClick={handleDeleteTask}/>
      </div>  
    </div>
  )
}