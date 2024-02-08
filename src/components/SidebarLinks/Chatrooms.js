/*
求人に対して募集してきたユーザー
に対して個別のチャットルームを作り
やり取りができるようにする画面

*/
const [Count,setCount]=useState(0);

const handlecurrentcount=(num)=>{
    setCount((current)=>{
        return current+num;
    });
};

import React, { useState } from 'react';

function ExampleComponent() {
  // useStateを使ってテキストの状態を定義する
  const [text, setText] = useState('');

  // テキストフィールドが変更されたときに実行されるイベントハンドラ
  const handleTextChange = (event) => {
    // event.target.valueで入力された値を取得し、setTextを使って状態を更新する
    setText(event.target.value);
  };
//ここまで読んだだけではどのような処理が行われているのかが理解できない
  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <p>入力されたテキスト: {text}</p>
    </div>
  );
}
//ここまで読んで初めて理解可能
//inputによって画面上にデータを入力することが可能になる
//そして入力されたデータはhandletextchange関数に渡される
//そしてhandletextchange関数ではデータを渡されると別の処理が発生
//渡されたデータをsettext関数に代入
//settext関数に代入された値は新たなtextの値として更新される
export default ExampleComponent;
