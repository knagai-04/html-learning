// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');
// textonというidを持つHTML要素を取得し、定数に代入する
const texton = document.getElementById('texton');
 
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // 非表示にする
    text.classList.add('off');
    // 表示する
    texton.classList.remove('off');
});