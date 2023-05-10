var big_title = document.getElementsByClassName("big-title")[0];
var qustion = document.getElementsByClassName("qustion")[0];
var note_fomate = document.getElementsByClassName("note")[0];
var note = document.getElementById("note");

// 開始資訊助理
problum_list();

// 問題清單
function problum_list() {
    const study123_softwareBTN = document.getElementById("study123-software");
    const power_BTN = document.getElementById("power-failure");
    power_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        power_cut();
    });
    study123_softwareBTN.addEventListener("click", function (event) {
        event.preventDefault();
        study123_software();
    });
}






// power問題
function power_cut() {
    big_title.innerHTML = `<i class='bx bxs-traffic-barrier'></i>
    <h2 class="title-text">您當前的電力狀態</h2>`;
    qustion.innerHTML = `
    <button class="choose" id="ready-to-cut"><i class='bx bx-shield-quarter'></i><p>將要停電</p></button>
    <button class="choose" id="power-restart"><i class='bx bx-battery'></i><p>電力恢復</p></button>
    `;
    var power_restart = document.getElementById("power-restart");
    var ready_to_cut = document.getElementById("ready-to-cut");
    note.innerHTML = `請確認您當前的電力狀態<a href="https://nds.taipower.com.tw/ndsWeb/ndft112.aspx" target="_blank">台電停電查詢系統</a>`
    power_restart.addEventListener("click", function (event) {
        event.preventDefault();
        all();
    });
    ready_to_cut.addEventListener("click", function (event) {
        event.preventDefault();
        power_readToCut();
    });
}

function power_readToCut() {
    big_title.innerHTML = `<i class='bx bxl-docker' ></i>
    <h2 class="title-text">請將容器關閉</h2>`;
    qustion.innerHTML = `
    <button class="choose" id="docker-off-faild"><i class='bx bx-toggle-right' ></i><p>無法關閉</p></button>
    <button class="choose" id="power-restart"><i class='bx bx-check' ></i><p>已關閉</p></button>
    `;
    var power_restart = document.getElementById("power-restart");
    var docker_off_faild = document.getElementById("docker-off-faild");
    note.innerHTML = `請參考技術支援網站 <a href="https://hackmd.io/@eduone-imstudy-MIS/r1X0il1-n#%E7%8B%80%E6%B3%81%E4%BA%8C-NAS%E5%AE%B9%E5%99%A8%E6%B2%92%E6%9C%89%E9%96%8B-" target="_blank">NAS容器如何關閉</a>`
    power_restart.addEventListener("click", function (event) {
        event.preventDefault();
        shoutDownNas();
    });
    docker_off_faild.addEventListener("click", function (event) {
        event.preventDefault();
        fail();
    });
}

function shoutDownNas() {
    big_title.innerHTML = `<i class='bx bx-power-off'></i>
    <h2 class="title-text">請長按NAS主機電源鍵進行關機</h2>`;
    qustion.innerHTML = `
    <button class="choose" id="shout-down-faild"><i class='bx bxs-error-circle'></i><p>無法關機</p></button>
    <button class="choose" id="power-off"><i class='bx bx-check' ></i><p>已關機</p></button>
    `;
    var power_off = document.getElementById("power-off");
    var shout_down_faild = document.getElementById("shout-down-faild");
    note.innerHTML = `請參考技術支援網站 <a href="https://hackmd.io/@eduone-imstudy-MIS/r1X0il1-n#--%E9%97%9C%E6%A9%9F-%E6%93%8D%E4%BD%9C" target="_blank">如何關機</a>`
    shout_down_faild.addEventListener("click", function (event) {
        event.preventDefault();
        fail();
    });
    power_off.addEventListener("click", function (event) {
        event.preventDefault();
        done();
    });
}







// 萬試通無法開啟 問題
function study123_software() {
    big_title.innerHTML = `<i class='bx bxs-log-in'></i>
    <h2 class="title-text">無法登入萬試通</h2>`;
    qustion.innerHTML = `
    <button class="choose" id="all"><i class='bx bx-group'></i><p>全館</p></button>
    <button class="choose" id="only"><i class='bx bx-user'></i><p>少數</p></button>
    `;
    const all_BTN = document.getElementById("all");
    const only_BTN = document.getElementById("only");
    note.innerHTML = `情況為【少數】或【全館】電腦無法登入`
    all_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        all();
    });
    only_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        reset_software()
    });
};


// 單一電腦
function only() {
    big_title.innerHTML = `<i class='bx bx-user-circle' ></i>
    <h2 class="title-text">帳密是否輸入正確</h2>`;
    qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>我解決了</p></button>
    <button class="choose" id="true"><i class='bx bx-check'></i><p>帳號沒錯</p></button>
    `;
    const true_BTN = document.getElementById("true");
    var done_BTN = document.getElementById("done");
    note.innerHTML = `請參考技術支援網站 <a href="https://hackmd.io/@eduone-imstudy-MIS/ryyBe7Zpi#%E5%A6%82%E4%BD%95%E7%A2%BA%E8%AA%8D%E5%AD%B8%E7%94%9F%E7%9A%84%E5%B8%B3%E8%99%9F%E5%AF%86%E7%A2%BC-%E4%BE%8B%E5%A6%82-%E5%BF%98%E8%A8%98%E5%AD%B8%E7%94%9F%E5%B8%B3%E5%AF%86" target="_blank">如何確認學生的帳號密碼?</a>`
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
    big_title.innerHTML = `<i class='bx bxl-docker'></i>
    <h2 class="title-text">NAS主機以及容器是否開啟</h2>`;
    qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>我解決了</p></button>
    <button class="choose" id="cant"><i class='bx bx-power-off'></i><p>無法開機</p></button>
    <button class="choose" id="On"><i class='bx bx-check'></i><p>已開啟</p></button>
    `;
    note.innerHTML = `請參考技術支援網站 <a href="https://hackmd.io/@eduone-imstudy-MIS/r1X0il1-n#%E7%8B%80%E6%B3%81%E4%BA%8C-NAS%E5%AE%B9%E5%99%A8%E6%B2%92%E6%9C%89%E9%96%8B-" target="_blank">怎麼開啟容器</a><a href="https://hackmd.io/@eduone-imstudy-MIS/r1X0il1-n#--%E9%96%8B%E6%A9%9F-%E6%93%8D%E4%BD%9C" target="_blank">NAS主機怎麼開機</a>`
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
    big_title.innerHTML = `<i class='bx bx-download'></i>
    <h2 class="title-text">重新安裝Study123檔案</h2>`;
    qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已解決</p></button>
    <button class="choose" id="reset"><i class='bx bx-check'></i><p>已重新安裝</p></button>
    `;
    var done_BTN = document.getElementById("done");
    const reset_BTN = document.getElementById("reset");
    note.innerHTML = `請參考技術支援網站 <a href="https://hackmd.io/@eduone-imstudy-MIS/HJRLit5ns" target="_blank">如何重新安裝Study123</a>`

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
    big_title.innerHTML = `<i class='bx bx-planet' ></i>
    <h2 class="title-text">修改config.txt為館內IP</h2>`
    qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已解決</p></button>
    <button class="choose" id="setted"><i class='bx bx-check'></i><p>已更換本館IP</p></button>
    `;
    var done_BTN = document.getElementById("done");
    const setted_BTN = document.getElementById("setted");
    note.innerHTML = `請參考技術支援網站 <a href="https://hackmd.io/@eduone-imstudy-MIS/HJRLit5ns#%E5%88%9D%E5%A7%8B%E8%A8%AD%E5%AE%9A-configtxt---IP" target="_blank">如何修改config.txt IP</a>`

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
    big_title.innerHTML = `<i class='bx bxs-no-entry'></i>
    <h2 class="title-text">非常抱歉</h2>`;
    qustion.innerHTML = `<p class="prompt-message">您的問題較為複雜，涉及到專業領域須由工程師為您解決</p>`;
    note_fomate.textContent = `請於【每周一至周五 9:30AM ~ 9:00PM】聯繫 - 金鑫資訊部`
}
// 已完成
function done() {
    big_title.innerHTML = `<i class='bx bx-like'></i>
    <h2 class="title-text">您已完成基本除錯</h2>`;
    qustion.innerHTML = `<p class="prompt-message">恭喜您</p>`;
    note_fomate.textContent = `感謝您使用資訊助手`
}




// -------- MENU --------
const homeBTN = document.getElementById("go-home");
// const backBTN = document.getElementById("go-back");
homeBTN.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
});

// backBTN.addEventListener("click", function (event) {
//     event.preventDefault();
//     location.reload();
// });