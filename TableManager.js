function addRow() {
  // テーブルを取得
  const table = document.getElementById("main-table");

  // 新しい行を挿入
  const newRow = table.insertRow();

  // 新しいセルを作成
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();

  // セルにテキストを追加 (必要に応じて変更)
  cell1.innerHTML = "新しいデータ 1";
  cell2.innerHTML = "新しいデータ 2";
}