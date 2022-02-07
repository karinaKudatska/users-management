//Styles
import './DeleteButton.scss'

export default function DeleteButton({handleClick}) {
  return (
    <button className="deleteButton" onClick={handleClick}>Delete</button>
  )
}