function openTab(event, tabId) {
    // すべてのタブコンテンツを非表示にする
    let contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.style.display = "none");

    // すべてのタブボタンのアクティブクラスを削除
    let buttons = document.querySelectorAll(".tab-button");
    buttons.forEach(button => button.classList.remove("active"));

    // 選択されたタブを表示
    document.getElementById(tabId).style.display = "block";
    
    // クリックされたボタンをアクティブにする
    event.currentTarget.classList.add("active");
}

// 最初のタブを表示する（初期設定）
document.getElementById("tab1").style.display = "block";
