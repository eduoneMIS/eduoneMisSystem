var big_title = document.getElementsByClassName("big-title")[0];
var qustion = document.getElementsByClassName("qustion")[0];
var note_fomate = document.getElementsByClassName("note")[0];
var note = document.getElementById("note");

// 開始資訊助理
all_only();

// 初始
function all_only() {
    const all_BTN = document.getElementById("all");
    const only_BTN = document.getElementById("only");
    all_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        all();
    });
    only_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        only();
    });
};


// 單一電腦
function only() {
    big_title.textContent = `請確認您的帳密是否輸入正確`;
    qustion.innerHTML = `
    <button class="choose" id="done">我解決了</button>
    <button class="choose" id="true">帳號沒錯</button>
    `;
    const true_BTN = document.getElementById("true");
    var done_BTN = document.getElementById("done");
    note.innerHTML = `技術支援網站 - <a href="https://hackmd.io/@eduone-imstudy-MIS/ryyBe7Zpi#%E5%A6%82%E4%BD%95%E7%A2%BA%E8%AA%8D%E5%AD%B8%E7%94%9F%E7%9A%84%E5%B8%B3%E8%99%9F%E5%AF%86%E7%A2%BC-%E4%BE%8B%E5%A6%82-%E5%BF%98%E8%A8%98%E5%AD%B8%E7%94%9F%E5%B8%B3%E5%AF%86">如何確認學生的帳號密碼?</a>`
    done_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        done();
    });
    true_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        reset_software()
    });
};

// 全館電腦
function all() {
    big_title.textContent = `請確認NAS主機以及容器是否開啟`;
    qustion.innerHTML = `
    <button class="choose" id="done">我解決了</button>
    <button class="choose" id="cant">無法開機</button>
    <button class="choose" id="On">已開啟</button>
    `;
    note.innerHTML = `技術支援網站 - <a href=https://hackmd.io/@eduone-imstudy-MIS/r1X0il1-n#%E7%8B%80%E6%B3%81%E4%BA%8C-NAS%E5%AE%B9%E5%99%A8%E6%B2%92%E6%9C%89%E9%96%8B-">NAS容器沒有開</a>`
    const on_BTN = document.getElementById("On");
    const cant_BTN = document.getElementById("cant");
    var done_BTN = document.getElementById("done");

    on_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        fail()
    });
    cant_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        fail()
    });
    done_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        done();
    });
};


// 更換軟體
function reset_software() {
    big_title.textContent = `請您更換Study123軟體檔案`;
    qustion.innerHTML = `
    <button class="choose" id="done">已解決</button>
    <button class="choose" id="reset">已更換</button>
    `;
    var done_BTN = document.getElementById("done");
    const reset_BTN = document.getElementById("reset");
    note.innerHTML = `技術支援網站 - <a href="https://hackmd.io/@eduone-imstudy-MIS/HJRLit5ns">萬試通 軟體安裝手冊</a>`

    done_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        done();
    });
    reset_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        configIP();
    });
}

function configIP() {
    big_title.textContent = `確認您得study123資料夾的config.txt IP`;
    qustion.innerHTML = `
    <button class="choose" id="done">已解決</button>
    <button class="choose" id="setted">已更換本館IP</button>
    `;
    var done_BTN = document.getElementById("done");
    const setted_BTN = document.getElementById("setted");
    note.innerHTML = `技術支援網站 - <a href="https://hackmd.io/@eduone-imstudy-MIS/HJRLit5ns#%E5%88%9D%E5%A7%8B%E8%A8%AD%E5%AE%9A-configtxt---IP">config IP尚未更換</a>`

    done_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        done();
    });
    setted_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        fail();
    });
}




function fail() {
    big_title.textContent = `非常遺憾`;
    qustion.innerHTML = `您的問題須由專人為您處理`;
    note_fomate.textContent = `請於【每周一至周五 9:30AM ~ 9:00PM】聯繫 _ 金鑫資訊部`
}
// 已完成
function done() {
    big_title.textContent = `您已完成基本除錯`;
    qustion.innerHTML = ``;
    note_fomate.textContent = `感謝您使用資訊助手`
}