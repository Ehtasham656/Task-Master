import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddTodoItem from "./AddTodoItem";

const Home = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  //FETCHING ALL THE DATA FROM API AND STORING IT IN LOCAL STORAGE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const limitedData = data.slice(0, 4); //TO SHOW LIMITED DATA ON HOME PAGE
        localStorage.setItem("todoItems", JSON.stringify(limitedData));
        setTodoItems(limitedData);
        setFilteredTodos(limitedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    //SETTING UP LOCAL STORAGE

    const localData = localStorage.getItem("todoItems");
    if (localData) {
      try {
        const todos = JSON.parse(localData);
        if (todos.length === 0) {
          fetchData();
        } else {
          setTodoItems(todos);
          setFilteredTodos(todos);
        }
      } catch (error) {
        console.error("Error parsing local storage data:", error);
        fetchData();
      }
    } else {
      fetchData();
    }
  }, []);

  //LOGIC TO ADD NEW ITEM
  const handleNewTodo = (itemName) => {
    const newTodoItems = [
      ...todoItems,
      {
        userId: 1,
        id: todoItems.length + 1,
        title: itemName,
        completed: false,
      },
    ];
    setTodoItems(newTodoItems);
    setFilteredTodos(newTodoItems);
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
  };

  //LOGIC TO DELETE ITEM

  const handleDeleteClick = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.title !== todoName);
    setTodoItems(newTodoItems);
    setFilteredTodos(newTodoItems);
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
  };
  //LOGIC TO EDIT ITEM
  const handleEditClick = (id, newName) => {
    const newTodoItems = todoItems.map((todo) =>
      todo.id === id ? { ...todo, title: newName } : todo
    );
    setTodoItems(newTodoItems);
    setFilteredTodos(newTodoItems);
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
  };
  //LOGIC TO VERIFY CHECK BOX IS CHECKED OR NOT
  const handleCompleteClick = (id, isCompleted) => {
    const newTodoItems = todoItems.map((todo) =>
      todo.id === id ? { ...todo, completed: isCompleted } : todo
    );
    setTodoItems(newTodoItems);
    setFilteredTodos(newTodoItems);
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
  };
  //LOGIC OF SEARCHING THE SPECIFIC TODO ITEM
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredTodos(todoItems);
    } else {
      const filtered = todoItems.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  };

  const showNotFoundMessage = searchQuery && filteredTodos.length === 0;
  const showWelcomeMessage = !searchQuery && todoItems.length === 0;

  return (
    // PASSING DATA VIA PROPS TO THE COMPONENTS
    <>
      <Header onSearch={handleSearch} />
      <AddTodoItem
        onNewTodo={handleNewTodo}
        todoItems={filteredTodos}
        onDeleteClick={handleDeleteClick}
        onEditClick={handleEditClick}
        onCompleteClick={handleCompleteClick}
        showNotFoundMessage={showNotFoundMessage}
        showWelcomeMessage={showWelcomeMessage}
      />
      <Footer />
    </>
  );
};

export default Home;
