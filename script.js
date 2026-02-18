const items = ["Aさん", "Bさん", "Cさん", "Dさん"];
//発表候補の名前を並べた「名簿」

function makeRandomOrder() {
//関数を呼び出すと、items 配列からランダムに名前を取り出し、order 配列に追加

  const order = []; // 結果を入れる箱（order）を用意する。 

while (items.length > 0) { 
//items に残っている人数分：items 配列が空になるまでループ

    const idx = Math.floor(Math.random() * items.length); 
//items の中からランダムに選んだ要素のインデックスを取得

    order.push(items[idx]); 
//その位置にいる人の名前を取り出して、選んだ要素を order 配列に追加

    items.splice(idx, 1);
//選んだ要素を items 配列から削除
}
  return order;
 // 全員分取り出したら、結果の箱（order）を返す／表示する
}//テスト用
const result = makeRandomOrder();
console.log(result);
