import './index.css'

const TodoItem = props => {
  const {simpleTodos, deleteList} = props
  const {title, id} = simpleTodos

  const onDeleteButton = () => {
    deleteList(id)
  }

  return (
    <li className="list">
      <p className="paragraph">{title}</p>
      <button className="button" type="button" onClick={onDeleteButton}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
