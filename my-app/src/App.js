import React, { useState } from "react";

function App() {
  // Khai báo state "name" để lưu trữ giá trị của input
  const [name, setName] = useState("");

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị trong input
  const handleInputChange = (event) => {
    setName(event.target.value); // Cập nhật giá trị state "name" theo giá trị của input
  };

  return (
    <div>
      {/* Input có thuộc tính value liên kết với state "name" và cập nhật qua sự kiện onChange */}
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />

      {/* Hiển thị giá trị của state "name" */}
      <p>Hello, {name}!</p>
    </div>
  );
}

export default App;
