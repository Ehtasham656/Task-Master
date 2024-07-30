import TodoItem from "./TodoItem";

// THIS COMPONENT IS CALLING THE SINGLE TODO ITEM HERE AND MAPPING IT HERE WITH TODO ITEMS
const TodoItems = ({
  todoItems,
  onDeleteClick,
  onEditClick,
  onCompleteClick,
}) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoName={item.title}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick}
          isEditing={false}
          isCompleted={item.completed}
          onCompleteClick={onCompleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
