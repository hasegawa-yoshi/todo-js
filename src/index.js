import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値取得、テキストボックス初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    document.getElementById("complete-list").appendChild(div);
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    //戻すボタン作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    div.appendChild(returnButton);
    //戻すボタンで未完了リストに追加する
    returnButton.addEventListener("click", () => {
      document.getElementById("incomplete-list").appendChild(div);
      div.removeChild(returnButton);
      //完了、削除ボタン作成
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
    });
  });

  //button(削除)作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素divを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divの子要素に各要素を配置
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
