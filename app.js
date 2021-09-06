const btn = document.getElementById('btn')
const img = document.getElementById('img')
const audio = document.createElement("audio");
const countBoard = document.getElementById("countBoard")
const bat_container = document.getElementById("bat_container")
audio.src = "sound.mp3";

let count = 0


function openFile(event) {
    let input = event.target; //取得上傳檔案
    let reader = new FileReader(); //建立FileReader物件

    reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

    reader.onload = function() { //FileReader取得上傳檔案後執行以下內容
        let dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
        $('#img').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
    };
}

btn.addEventListener('click', function() {
    count += 1
    countBoard.innerHTML = `${count}`;
    audio.currentTime = 0;
    audio.play();
    img.style.height = '500px';
    img.style.height = img.height / 1.2 + 'px';
    bat_container.innerHTML = '<img id="bat" src="bonk.png">';
    setTimeout(function() {
        img.style.height = '500px';
        bat_container.innerHTML = '<img id="bat" src="img/bonk.png" style="display:none">';
    }, 500);
})