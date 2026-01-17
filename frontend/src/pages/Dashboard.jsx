import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard({ setPage }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const headers = {
    headers: { Authorization: token },
  };

  // READ
  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/items", headers);
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // CREATE & UPDATE
  const handleSubmit = async () => {
    if (editId) {
      // UPDATE
      await axios.put(
        `http://localhost:5000/api/items/${editId}`,
        { title, description },
        headers
      );
      setEditId(null);
    } else {
      // CREATE
      await axios.post(
        "http://localhost:5000/api/items",
        { title, description },
        headers
      );
    }

    setTitle("");
    setDescription("");
    fetchItems();
  };

  // DELETE
  const deleteItem = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/items/${id}`,
      headers
    );
    fetchItems();
  };

  // EDIT
  const editItem = (item) => {
    setEditId(item._id);
    setTitle(item.title);
    setDescription(item.description);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setPage("login");
  };

  // SEARCH FILTER
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      {/* SEARCH */}
      <input
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {/* FORM */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update Item" : "Add Item"}
      </button>

      <button onClick={logout}>Logout</button>

      <hr />

      {/* DISPLAY */}
      {filteredItems.map((item) => (
        <div key={item._id} style={{ marginBottom: 10 }}>
          <b>{item.title}</b> - {item.description}
          <br />
          <button onClick={() => editItem(item)}>Edit</button>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
