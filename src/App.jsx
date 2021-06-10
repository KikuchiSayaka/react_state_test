// useStateはReactの中に入っているので、分割代入でuseStateを取り出す
import React, {useState} from "react";
// 作ったpropsを読み込む。拡張子は省略できる


// 現在のsたての状態に合わせて更新をする処理　(今回はボタンが押されるとカウントアップ処理)
const App = () => {
  const onClickCountUp = () => {
    setNum(num+1);
  };

  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>見出し</h1>
 
     <p>{num}</p>
     <button onClick={onClickCountUp}>カウントアップ</button>

    </>
  );
};

// 他のファイルでも読み込めるようにこれを書く
export default App;
