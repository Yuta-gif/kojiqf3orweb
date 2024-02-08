import React from "react";
import React, { useState } from 'react';


import React, { useState } from 'react';

const ToDoList = () => {
  // useStateを用いて、リストとそのリストに対して追加を行う更新関数を定義し、そのリストの初期値を空にする
  const [list, setList] = useState([]);

  const handleAdd = (item) => {
    // handleAddにおいて、そのリストに対して要素を追加する処理を行う
    setList([...list, item]);
  };

  const handleDelete = (index) => {
    // handleDeleteにおいて、リストのindexを取得、指定し、指定されたindexに紐づくリストの要素を消去する処理を記述する
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* リストの要素を表示する */}
      {list.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      {/* 新しい要素を追加するフォーム */}
      <form onSubmit={(event) => {
        event.preventDefault();
        handleAdd(event.target.elements.newItem.value);
        event.target.reset();
      }}>
        <input name="newItem" type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoList;


//カウントボタンを押すたびに、ウェブ上に表示された文字が増える。
//まず二つの関数を用意。一つ目は状態変数、二つ目はそれを更新する関数。
//それらはusestateによって宣言され、その右辺である初期値にはゼロを定義
//return内にある＋ボタンを押したら更新関数に+1サレ、それが状態変数に代入されるようにする

//まず最初にusestateを用いて、リストとそのリストに対して追加を行う更新関数を定義し、そのリストの初期値を空にする
//handleaddにおいて、そのリストに対して要素を追加する処理を行う
//handledeleteにおいて、リストのindexを取得、指定し、指定されたindexに紐づくリストの要素を消去する処理を記述する