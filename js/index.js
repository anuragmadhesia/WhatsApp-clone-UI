//-----Messages--------
var msgs = [["<a href=' https://code.sololearn.com/Wqmw8KdgzWQ9/?ref=app '>https://code.sololearn.com/Wqmw8KdgzWQ9/?ref=app</a>", "11:56 pm", "Awesome dear", "11:59 pm"],
["DOB GUESS & Time Travel:-<a href='https://code.sololearn.com/WEhQ3GExbQXw/?ref=app'> https://code.sololearn.com/WEhQ3GExbQXw/?ref=app </a>", "5:23 pm", "Nice work my boy", "5:25 pm"],
["<a href=' https://code.sololearn.com/Wu9XF0Bdz3Mp/?ref=app '> https://code.sololearn.com/Wu9XF0Bdz3Mp/?ref=app </a>", "3:45 am", "Great........)", "3:48 am"],
["<a href='https://code.sololearn.com/Wa3nj23KakVc/?ref=app'> https://code.sololearn.com/Wa3nj23KakVc/?ref=app</a> ", "9:12 am", "Cooool", "9:12 am"],
[";)", "6:00 pm", ":)", "6:01 pm"],
["Bye...)", "2:09 am", "Bye.....)", "2:11 am"],
["Good Night.....)", "11:30 pm", "Good Night......☆", "11:30 pm"]];
var tick = document.getElementById("tick"), tring = document.getElementById("tring"), callsec = document.getElementById("callsec"), status_show = document.getElementsByClassName("status_show")[0], stts = document.getElementsByClassName("status"), txt_area = document.getElementById("text-area"), txt_field = document.getElementById("txt-field"), callsee = document.getElementsByClassName("callsee"), ind, arr1 = new Array("", "", "", "", "", "", ""), arr = new Array(), call_icons = document.getElementsByClassName("call-icons")[0], ch_back = document.getElementById("ch-back"), p_icons = document.getElementsByClassName("p_icons"), s_i_b = document.getElementsByClassName("mic")[0], chatting_sec = document.getElementById("chatting-sec"), send = document.getElementById("send"), call = document.getElementsByClassName("bi-telephone-fill"), put_c = document.getElementsByClassName("phone")[0], calling = document.getElementById("calling"), frnd = document.getElementsByClassName("name"), title = document.getElementById("title"), head1 = document.getElementById("head1"), search_bar = document.getElementsByClassName("search")[0], sicon = document.getElementById("sicon"), s_back = document.getElementsByClassName("bi-arrow-left-short")[0], propic = document.getElementsByClassName("propic"), call_page = document.getElementById("call-page"), img_dis = document.getElementById("img_dis");
setTimeout(function () {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
}, 5000)
//----Open Chat Function-----
for (var i = 0; i < frnd.length; i++) {
    arr[i] = frnd[i];
    frnd[i].onclick = function () {
        ind = arr.indexOf(this);
        // chatting_sec.childNodes[5].childNodes[1].childNodes[0].childNodes[0].innerHTML = msgs[ind][0];
        // chatting_sec.childNodes[5].childNodes[1].childNodes[0].childNodes[2].innerHTML = msgs[ind][1];
        // chatting_sec.childNodes[5].childNodes[3].childNodes[0].childNodes[0].innerHTML = msgs[ind][2];
        // chatting_sec.childNodes[5].childNodes[3].childNodes[0].childNodes[1].innerHTML = msgs[ind][3];
        chatting_sec.childNodes[9].innerHTML = arr1[ind];
        title.childNodes[3].childNodes[0].innerHTML = this.childNodes[0].innerHTML;
        title.childNodes[1].childNodes[2].src = this.parentNode.childNodes[1].childNodes[0].src;
        head1.style.display = "none";
        s_back.click();
        document.getElementById("frndsec").style.display = "none";
        document.getElementById("chatting-sec").style.display = "block";
        ch_back.addEventListener("click", function () {
            arr1[ind] = chatting_sec.childNodes[9].innerHTML;
            chatting_sec.style.display = "none";
            head1.style.display = "block";
            document.getElementById("frndsec").style.display = "block";
        })
    }
}
//----Chat, Status,Calls Section Changer-------
function display(sec, btn, n) {
    var s = document.getElementById(sec), slide = document.getElementById("slide"), b = document.getElementById(btn);
    document.getElementById("frndsec").style.display = "none";
    document.getElementById("statusec").style.display = "none";
    document.getElementById("callsec").style.display = "none";
    document.getElementById("chats").style.color = "rgb(159,163,167)", document.getElementById("status").style.color = "rgb(159,163,167)", document.getElementById("calls").style.color = "rgb(159,163,167)";
    slide.style.left = 12 + (29.5 * n) + "%";
    s.style.display = "block";
    b.style.color = "rgb(0,175,156)";
}
//-----Open Search Bar function--------
sicon.addEventListener("click", function () {
    search_bar.style.top = "0";
    head1.style.marginBottom = "2.7rem";
})
s_back.addEventListener("click", function () {
    search_bar.style.top = "-20rem";
    head1.style.marginBottom = "0";
})
//-----Call Update Functions-------
function calladd() {
    var date2 = new Date, n_call = document.createElement("div");
    n_call.classList.add("calls");
    tring.play();
    n_call.innerHTML = "<div class='proimg'><img class='propic' src='" + call_page.childNodes[5].src + "'></div><p class='call-name'><span>" + call_page.childNodes[1].childNodes[3].innerHTML + "</span><small class='fa fa-phone callsee'></small><br><small class='lmsg bi-arrow-up-right'>" + "Today," + date2.getHours() + ":" + date2.getMinutes() + "</small></p>";
    callsec.insertBefore(n_call, callsec.childNodes[0]);
}
//-----Profile Pic Viewer------
for (var p = 0; p < propic.length; p++) {
    propic[p].onclick = function () {
        img_dis.childNodes[1].childNodes[3].src = this.src;
        img_dis.childNodes[1].childNodes[1].innerHTML = this.parentNode.parentNode.childNodes[3].childNodes[0].innerHTML;
        img_dis.style.display = "block";
        img_dis.addEventListener("click", function () {
            img_dis.style.display = "none";
        })
    }
}
//-------Calling-------
for (var e = 0; e < callsee.length; e++) {
    callsee[e].onclick = function () {
        calling.childNodes[3].innerHTML = this.parentNode.childNodes[0].innerHTML;
        call_page.childNodes[5].src = this.parentNode.parentNode.childNodes[1].childNodes[1].src;
        frndsec.style.display = "none";
        calladd();
        call_page.style.display = "block";
        call_page.style.top = "0";
        put_c.onclick = function () {
            call_page.style.top = "100%";
            callsec.style.display = "block";
            tring.pause();
            setTimeout(function () {
                call_page.style.display = "none";
            }, 150)
        }
    }
}
call[0].onclick = function () {
    calling.childNodes[3].innerHTML = this.parentNode.parentNode.childNodes[1].innerHTML;
    call_page.childNodes[5].src = img_dis.childNodes[1].childNodes[3].src;
    frndsec.style.display = "none";
    calladd();
    call_page.style.display = "block";
    call_page.style.top = "0";
    put_c.onclick = function () {
        call_page.style.top = "100%";
        frndsec.style.display = "block";
        tring.pause();
        setTimeout(function () {
            call_page.style.display = "none";
        }, 150)
    }
}
title.childNodes[7].onclick = function () {
    calling.childNodes[3].innerHTML = title.childNodes[3].childNodes[0].innerHTML;
    call_page.childNodes[5].src = document.getElementById("ch-back").childNodes[2].src;
    call_page.style.display = "block";
    calladd();
    call_page.style.top = "0";
    put_c.onclick = function () {
        call_page.style.top = "100%";
        chatting_sec.style.display = "block";
        tring.pause();
        setTimeout(function () {
            call_page.style.display = "none";
        })
    }
}
//------Message field Increaseing Function------'
txt_area.addEventListener("input", msg)
function msg() {
    if (txt_area.value == "") {
        txt_area.style.width = "52%";
        s_i_b.innerHTML = "<button class='bi-mic'></button>";
    }
    else {
        txt_area.style.width = "67%";
        s_i_b.innerHTML = "<img src='https://icon-library.com/images/paper-plane-icon/paper-plane-icon-21.jpg'>";
        //-----Message Send Function-------
        s_i_b.childNodes[0].onclick = function () {
            var date1 = new Date, hours = date1.getHours(), min = date1.getMinutes();
            chatting_sec.childNodes[9].innerHTML += "<div class='msg_cont' align='right'><div class='send'><div>" + document.getElementById('txt-field').childNodes[3].value + "</div><div class='bi-check2-all'></div><sub>" + hours + ":" + min + " pm" + "</sub></div></div>";
            txt_area.value = "";
            tick.play();
            msg();
        }
    }
}
//-----Chat open Function 2------
p_icons[0].childNodes[1].addEventListener("click", function () {
    title.childNodes[3].childNodes[0].innerHTML = this.parentNode.parentNode.childNodes[1].innerHTML;
    title.childNodes[1].childNodes[2].src = this.parentNode.parentNode.childNodes[3].src;
    head1.style.display = "none";
    s_back.click();
    document.getElementById("frndsec").style.display = "none";
    document.getElementById("chatting-sec").style.display = "block";
})
var timeline = document.getElementsByClassName("timeline")[0], term, st = new Array, s_top = document.getElementsByClassName("s-top")[0];
var img = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXx8SrWXSyt1hF34qhPdAfkFWAplm3C3yLi9xGYrWxLHQUr8nS9eUjlaV&s=10", "https://i.pinimg.com/originals/2a/41/d0/2a41d04e5c405d5864fecd39e48ded18.jpg", "https://i.pinimg.com/236x/94/b4/54/94b454f14c145475b78da427122b29bb--elon-musk-book-tesla-spacex.jpg"];
var starray = [["https://i.pinimg.com/236x/14/19/4d/14194d717811617b95f922009629cb6d.jpg", "https://i.pinimg.com/originals/99/9d/ce/999dced4fd8e71b3cf9ed2a97b6f1f32.jpg"], ["https://i.pinimg.com/originals/87/6c/b4/876cb46b12e1fbd7109048fdbdc18de1.jpg"], ["https://i.pinimg.com/originals/c2/81/e8/c281e883fcd89408574e6edddba374fc.png", "https://i.pinimg.com/236x/3d/99/7d/3d997dd305021706c97736fb285088ef.jpg", " https://i.pinimg.com/originals/f3/08/71/f30871ec1af83f93835787724f2973d6.jpg "]];
//------Status Display function -------
for (var t = 0; t < stts.length - 1; t++) {
    document.getElementsByClassName("call-icons")[0].childNodes[t].onclick = function () { this.classList.toggleClass() };
    st[t] = stts[t];
    stts[t].onclick = function () {
        timeline.innerHTML = "";
        term = st.indexOf(this);
        stts[3].childNodes[3].childNodes[0].innerHTML = this.childNodes[3].childNodes[0].innerHTML;
        stts[3].childNodes[3].childNodes[2].innerHTML = this.childNodes[3].childNodes[2].innerHTML;
        stts[3].childNodes[1].childNodes[1].src = img[term];
        status_show.style.display = "block";
        if (starray[term].length >= 2) {
            var f_t = setTimeout(function () {
                timeline.childNodes[1].childNodes[0].style.width = "100%";
                status_show.childNodes[5].src = starray[term][1];
                status_show.childNodes[5].style.display = "none";
                setTimeout(function () { status_show.childNodes[5].style.display = "block"; }, 0)
            }, 5000)
        }
        if (starray[term].length == 3) {
            var s_t = setTimeout(function () {
                timeline.childNodes[2].childNodes[0].style.width = "100%";
                status_show.childNodes[5].src = starray[term][2];
                status_show.childNodes[5].style.display = "none";
                setTimeout(function () { status_show.childNodes[5].style.display = "block"; }, 0)
            }, 10000)
        }
        status_show.childNodes[5].src = starray[term][0];
        for (var a = 0; a < starray[term].length; a++) {
            var tl1 = document.createElement("div"), tl2 = document.createElement("div");
            tl1.appendChild(tl2);
            timeline.appendChild(tl1);
            setTimeout(function () { timeline.childNodes[0].childNodes[0].style.width = "100%"; }, 0);
        }
        s_top.childNodes[1].onclick = function () { status_show.style.display = "none"; clearTimeout(setT); clearTimeout(f_t); clearTimeout(s_t) }
        var setT = setTimeout(function () { status_show.style.display = "none" }, starray[term].length * 5000)
    }
    call_icons.childNodes[t].onclick = function () {
        this.classList.toggle("s");
    }
}
var cam = document.getElementsByClassName("fa-camera");
for (var g = 0; g < cam.length; g++) {
    cam[g].addEventListener("click", function () {
        alert("Camera is out of my Access......(")
    })
}
//-----Audio Pause---------
var a = 0;
call_icons.childNodes[2].addEventListener("click", function () {
    if (a == 0) {
        tring.pause();
        a = 1;
    }
    else {
        tring.play();
        a = 0;
    }
})