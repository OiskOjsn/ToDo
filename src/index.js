import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、削除する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから完了リストに移動

    // Targetのdivを取得
    const completeTarget = completeButton.parentNode;

    // 未完了リストから削除
    deleteFromIncompleteList(completeTarget);

    // TODO内容テキストを取得
    const text = completeTarget.firstElementChild.innerText;

    // div以下を初期化
    completeTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンのdivタグを未完了リストに戻す
      const backTarget = backButton.parentNode;

      // 完了リストから削除
      document.getElementById("complete-list").removeChild(backTarget);

      // テキストを取得
      const text = backTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
