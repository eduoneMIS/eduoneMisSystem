// 取得選項按鈕的 DOM 元素
var bigTitleText = document.getElementsByClassName("big-title")[0];
var qustionText = document.getElementsByClassName("qustion")[0];
var memoText = document.getElementsByClassName("memo")[0];

// 開始資訊助手
launchAssistantApp();


// 資訊助手
function launchAssistantApp() {

  // 取得處理軟體登入失敗按鈕的 DOM 元素
  var handleSoftwareLoginFailureBtn = document.getElementById("handleSoftwareLoginFailureBtn");
  // 取得檢查電源狀態按鈕的 DOM 元素
  var checkPowerStatusBtn = document.getElementById("checkPowerStatusBtn");
  // 取得已解決問題按鈕的 DOM 元素
  var solvedProblemBtn = document.getElementById("solvedProblemBtn");
  // 取得取代 Study123 軟體按鈕的 DOM 元素
  var replaceStudy123SoftwareBtn = document.getElementById("replaceStudy123SoftwareBtn");
  // 取得停用 Docker 按鈕的 DOM 元素
  var disableDockerBtn = document.getElementById("disableDockerBtn");
  // 取得修復所有電腦登入錯誤按鈕的 DOM 元素
  var fixLoginErrorOnAllComputersBtn = document.getElementById("fixLoginErrorOnAllComputersBtn");
  // 取得修復單台電腦登入錯誤按鈕的 DOM 元素 
  var fixLoginErrorOnSingleComputerBtn = document.getElementById("fixLoginErrorOnSingleComputerBtn");
  // 取得未解決問題按鈕的 DOM 元素
  var unsolvedProblemBtn = document.getElementById("unsolvedProblemBtn");
  // 取得關閉 NAS 按鈕的 DOM 元素
  var powerOffNASBtn = document.getElementById("powerOffNASBtn");
  // 取得編輯設定 IP 按鈕的 DOM 元素
  var editConfigIPBtn = document.getElementById("editConfigIPBtn");
  // 取得啟用 NAS Docker 按鈕的 DOM 元素
  var enableNasDockerBtn = document.getElementById("enableNasDockerBtn");
  // 取得修復 NAS 開機錯誤按鈕的 DOM 元素 
  var fixNasBootErrorBtn = document.getElementById("fixNasBootErrorBtn");

  // 更新備註區塊，顯示官方技術支援網站的連結
  memoText.innerHTML = '<p class="note"><span id="note"></span><span id="emoji"></span></p>';
  note.innerHTML = `若您已了解步驟可更快速除錯 <a href="./index.html">官方技術支援網站</a>`;
  // 為電力故障按鈕註冊點擊事件處理函數，點擊時呼叫檢查電力狀態函數
  checkPowerStatusBtn.addEventListener("click", function (event) {
    event.preventDefault();
    checkPowerStatus();
  });
  // 為study123軟體登錄失敗按鈕註冊點擊事件處理函數，點擊時呼叫處理軟體登錄失敗函數
  handleSoftwareLoginFailureBtn.addEventListener("click", function (event) {
    event.preventDefault();
    handleSoftwareLoginFailure();
  });
}


// 處理電力問題
function checkPowerStatus() {
  // 更新頁面大標題，顯示電力圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bxs-traffic-barrier'></i>
    <h2 class="title-text">您當前的電力狀態</h2>`;
  // 更新頁面問題區塊，顯示電力狀態選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="disableDockerBtn"><i class='bx bx-shield-quarter'></i><p>將要停電</p></button>
    <button class="choose" id="fixLoginErrorOnAllComputersBtn"><i class='bx bx-reset'></i><p>供電正常</p></button>
    `;
  // 更新備註區塊，顯示電力狀態的相關資訊
  memoText.innerHTML = '<p class="note"><span id="note"></span></p>';
  var note = document.getElementById("note");
  note.innerHTML = `您當前的電力狀態 <a href="https://nds.taipower.com.tw/ndsWeb/ndft112.aspx">台電停電查詢系統</a>`;
  // 為電力恢復按鈕註冊點擊事件處理函數，點擊時呼叫修復所有電腦的登錄錯誤函數
  fixLoginErrorOnAllComputersBtn.addEventListener("click", function (event) {
    event.preventDefault();
    fixLoginErrorOnAllComputers();
  });
  // 為將要停電按鈕註冊點擊事件處理函數，點擊時呼叫關閉容器函數
  disableDockerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    disableDocker();
  });
}


// 開啟 NAS 主機的 Docker 容器
function enableNasDocker() {
  // 更新頁面大標題，顯示 Docker 圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bxl-docker'></i>
    <h2 class="title-text">請開啟容器</h2>`;
  // 更新頁面問題區塊，顯示三個選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="solvedProblemBtn"><i class='bx bx-like'></i><p>已可登入</p></button>
    <button class="choose" id="unsolvedProblemBtn"><i class='bx bx-toggle-left' ></i><p>無法開啟</p></button>
    <button class="choose" id="fixLoginErrorOnSingleComputerBtn"><i class='bx bx-error' ></i><p>開啟了<br>仍無法登入</p></button>
    `;
  // 更新備註區塊，顯示技術支援網站指引
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#step3">怎麼開啟容器</a>`;
  // 為「已可登入」按鈕註冊點擊事件處理函數
  solvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    solvedProblem();
  });
  // 為「無法開啟」按鈕註冊點擊事件處理函數
  fixLoginErrorOnSingleComputerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    fixLoginErrorOnSingleComputer();
  });
  // 為「仍無法登入」按鈕註冊點擊事件處理函數
  unsolvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    unsolvedProblem();
  });
}


// 關閉 NAS 主機的 Docker 容器
function disableDocker() {
  // 更新頁面大標題，顯示Docker圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bxl-docker' ></i>
    <h2 class="title-text">請將容器關閉</h2>`;
  // 更新頁面問題區塊，顯示關閉容器選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="unsolvedProblemBtn"><i class='bx bx-toggle-right' ></i><p>無法關閉</p></button>
    <button class="choose" id="powerOffNASBtn"><i class='bx bx-check' ></i><p>已關閉</p></button>
    `;
  // 更新備註區塊，顯示技術支援指引
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#overlist01">NAS容器如何關閉</a>`;
  // 為重啟NAS主機按鈕註冊點擊事件處理函數，點擊時呼叫關閉NAS主機函數
  powerOffNASBtn.addEventListener("click", function (event) {
    event.preventDefault();
    powerOffNAS();
  });
  // 為無法關閉容器按鈕註冊點擊事件處理函數，點擊時呼叫未解決問題函數
  unsolvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    unsolvedProblem();
  });
}


// 修復 NAS 主機開機錯誤
function fixNasBootError() {
  // 更新頁面大標題，顯示插頭圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bxs-plug'></i>
    <h2 class="title-text">確認NAS電源已插妥及地區供電</h2>`;
  // 更新頁面問題區塊，顯示兩個選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="solvedProblemBtn"><i class='bx bx-like'></i><p>已正常開機</p></button>
    <button class="choose" id="unsolvedProblemBtn"><i class='bx bx-error' ></i><p>供電正常<br>無法開機</p></button>
    `;
  // 更新備註區塊，顯示技術支援網站指引和台電停電查詢系統
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#step1">NAS主機怎麼開機</a><a href="https://nds.taipower.com.tw/ndsWeb/ndft112.aspx">台電停電查詢系統</a>`;
  // 為「已正常開機」按鈕註冊點擊事件處理函數
  solvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    enableNasDocker();
  });
  // 為「仍無法開機」按鈕註冊點擊事件處理函數
  unsolvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    unsolvedProblem();
  });
}

// 將NAS關機
function powerOffNAS() {
  // 更新頁面大標題，顯示關機圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bx-power-off'></i>
    <h2 class="title-text">請長按NAS主機電源鍵進行關機</h2>`;
  // 更新頁面問題區塊，顯示關機選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="unsolvedProblemBtn"><i class='bx bxs-error-circle'></i><p>無法關機</p></button>
    <button class="choose" id="solvedProblemBtn"><i class='bx bx-check' ></i><p>已關機</p></button>
    `;
  // 更新備註區塊，顯示技術支援指引
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#overlist01">如何關機</a>`;
  // 為關機失敗按鈕註冊點擊事件處理函數，點擊時呼叫未解決問題函數
  unsolvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    unsolvedProblem();
  });
  // 為關機成功按鈕註冊點擊事件處理函數，點擊時呼叫問題已解決函數
  solvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    solvedProblem();
  });
}


// 處理軟體登入失敗
function handleSoftwareLoginFailure() {
  // 更新頁面大標題，顯示登入失敗的圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bx-log-in'></i>
    <h2 class="title-text">無法登入萬試通</h2>`;
  // 更新頁面問題區塊，顯示兩個選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="fixLoginErrorOnAllComputersBtn"><i class='bx bx-group'></i><p>全館電腦</p></button>
    <button class="choose" id="fixLoginErrorOnSingleComputerBtn"><i class='bx bx-user'></i><p>少數幾台電腦</p></button>
    `;
  // 更新備註區塊，顯示提示文字
  memoText.innerHTML = '<p class="note"><span id="note"></span></p>';
  var note = document.getElementById("note");
  note.innerHTML = `請告訴我您無法登入的程度`;
  // 為「全館電腦」按鈕註冊點擊事件處理函數
  fixLoginErrorOnAllComputersBtn.addEventListener("click", function (event) {
    event.preventDefault();
    fixLoginErrorOnAllComputers();
  });
  // 為「少數幾台電腦」按鈕註冊點擊事件處理函數
  fixLoginErrorOnSingleComputerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    fixLoginErrorOnSingleComputer();
  });
}


// 修復單台電腦登入錯誤
function fixLoginErrorOnSingleComputer() {
  // 更新頁面大標題，顯示使用者圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bx-user-circle' ></i>
    <h2 class="title-text">萬試通登入帳密是否輸入正確</h2>`;
  // 更新頁面問題區塊，顯示兩個選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="solvedProblemBtn"><i class='bx bx-like'></i><p>已正常登入</p></button>
    <button class="choose" id="replaceStudy123SoftwareBtn"><i class='bx bx-error' ></i><p>正確<br>仍無法登入</p></button>
    `;
  // 更新備註區塊，顯示技術支援網站指引
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#step5">如何確認學生的帳號密碼?</a>`;
  // 為「已正常登入」按鈕註冊點擊事件處理函數
  solvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    solvedProblem();
  });
  // 為「仍無法登入」按鈕註冊點擊事件處理函數
  replaceStudy123SoftwareBtn.addEventListener("click", function (event) {
    event.preventDefault();
    replaceStudy123Software();
  });
}


// 修復全館電腦登入錯誤
function fixLoginErrorOnAllComputers() {
  // 更新頁面大標題，顯示硬碟圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bx-hdd'></i>
    <h2 class="title-text">NAS主機是否已開機</h2>`;
  // 更新頁面問題區塊，顯示三個選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="solvedProblemBtn"><i class='bx bx-like'></i><p>已可登入</p></button>
    <button class="choose" id="fixNasBootErrorBtn"><i class='bx bx-power-off'></i><p>無法開機</p></button>
    <button class="choose" id="enableNasDockerBtn"><i class='bx bx-error' ></i><p>已開機<br>仍無法登入</p></button>
    `;
  // 更新備註區塊，顯示技術支援網站指引
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#step2">NAS主機怎麼開機</a>`;

  // 為「已可登入」按鈕註冊點擊事件處理函數
  solvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    solvedProblem();
  });
  // 為「無法登入」按鈕註冊點擊事件處理函數
  enableNasDockerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    enableNasDocker();
  });
  // 為「無法開機」按鈕註冊點擊事件處理函數
  fixNasBootErrorBtn.addEventListener("click", function (event) {
    event.preventDefault();
    fixNasBootError();
  });
}


// 替換萬試通軟體
function replaceStudy123Software() {
  // 更新頁面大標題，顯示下載圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bx-download'></i>
    <h2 class="title-text">重新安裝Study123檔案</h2>`;
  // 更新頁面問題區塊，顯示兩個選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="solvedProblemBtn"><i class='bx bx-like'></i><p>已正常登入</p></button>
    <button class="choose" id="editConfigIPBtn"><i class='bx bx-error' ></i><p>重裝過<br>仍無法登入</p></button>
    `;


  // 更新備註區塊，顯示技術支援網站指引
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#step4">如何重新安裝Study123</a>`;
  // 為「已正常登入」按鈕註冊點擊事件處理函數
  solvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    solvedProblem();
  });
  // 為「仍無法登入」按鈕註冊點擊事件處理函數
  editConfigIPBtn.addEventListener("click", function (event) {
    event.preventDefault();
    editConfigIP();
  });
}


// 修改config.txt的IP
function editConfigIP() {
  // 更新頁面大標題，顯示星球圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bx-planet' ></i>
    <h2 class="title-text">修改config.txt為館內IP</h2>`;
  // 創建一個新的 <input> 元素
  var newDiv = document.createElement("input");
  // 更新頁面問題區塊，顯示兩個選項按鈕
  qustionText.innerHTML = `
    <button class="choose" id="solvedProblemBtn"><i class='bx bx-like'></i><p>已正常登入</p></button>
    <button class="choose" id="unsolvedProblemBtn"><i class='bx bx-error' ></i><p>修改過<br>仍無法登入</p></button>
    `;

  // 更新備註區塊，顯示技術支援網站指引
  note.innerHTML = `技術支援網站指引 <a href="./category_Study123.html#step4">如何修改config.txt IP</a>`;
  // 為「已正常登入」按鈕註冊點擊事件處理函數
  solvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    solvedProblem();
  });
  // 為「仍無法登入」按鈕註冊點擊事件處理函數
  unsolvedProblemBtn.addEventListener("click", function (event) {
    event.preventDefault();
    unsolvedProblem();
  });
}


// 未解決問題
function unsolvedProblem() {
  // 更新頁面大標題，顯示禁止符號圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bxs-no-entry'></i>
    <h2 class="title-text">非常抱歉</h2>`;
  // 更新頁面問題區塊，顯示提示訊息
  qustionText.innerHTML = `
  <p class="prompt-message">問題已涉及專業領域須由工程師處理<br>
  <span style="border-bottom:2px solid #0f4c81;">請務必於LINE@再次告知我們您無法解決<br>並靜待資訊部回覆</span>
  </p>`;
  // 更新備註區塊，顯示聯繫金鑫資訊部的訊息
  note.textContent = `於工作日9:30至21:00間回覆您`;
}

// 問題已解決
function solvedProblem() {
  // 更新頁面大標題，顯示喜歡符號圖示和標題文字
  bigTitleText.innerHTML = `<i class='bx bx-like'></i>
    <h2 class="title-text">您已完成基本操作</h2>`;
  // 更新頁面問題區塊，顯示提示訊息
  qustionText.innerHTML = `<p class="prompt-message">恭喜您</p>`;
  // 更新備註區塊，顯示返回助手的連結
  note.innerHTML = `如有其他疑問請點選 <a href="./assistant.html">返回助手</a>`;
}


// -------- MENU --------
const homeBTN = document.getElementById("go-home");
// const backBTN = document.getElementById("go-back");

// 當點擊「回到首頁」按鈕時，重新載入頁面
homeBTN.addEventListener("click", function (event) {
  event.preventDefault();
  location.reload();
});
