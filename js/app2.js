function renderData(page) {
    $('#site').html('');
    $.getJSON(`../data/${page}.json`, function (data) {
        console.log('data', data);
        renderHeader(data.header);
        renderSlider();
        renderAbout(data.main.aboutUs);
        carousel();
        $('.bar').on('click', function (e) {
            i = e.target.id - 1;
            let slide = document.getElementsByClassName("s1");
            slide[0].style.marginLeft = -i * 25 + '%'
        });
    });
};

renderData('arabic');
function renderHeader(data) {
    let content = `
    <img class="logo" src="${data.logo}" alt="">
    <a href="javascript:void(0);" class="icon">
        <div></div>
        <div></div>
        <div></div>
    </a>
    <nav class="main-nav">
        <ul>
            <li><a href="#section-one">${data.nav.home}</a></li>
            <li><a href="#section-two">${data.nav.aboutUs}</a></li>
            <li><a href="#section-four">${data.nav.programs}</a></li>
            <li class="dropdown"><button class="dropbtn" type="scall">${data.nav.studentServicesHeader}<i class="fa fa-caret-down"></i></button>
                <div class="dropdown-content">
                    <a href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">${data.nav.studentServices.selfServicePortal}</a>
                    <a href="https://online.ltuc.com/d2l/home">${data.nav.studentServices.desireToLearn}</a>
                    <a href="https://employmenthub.ltuc.com">${data.nav.studentServices.EducationForEmployment}</a>
                </div>
            </li>
            <li><a href="#footer">${data.nav.contactUs}</a></li>
        </ul>
    </nav>
    `
    $('header').append(content);
}

function renderSlider(data) {
    let content = `
    <div class="slidershow middle">

        <div class="slides">
            <input type="radio" name="r" id="r1">
            <input type="radio" name="r" id="r2">
            <input type="radio" name="r" id="r3">
            <input type="radio" name="r" id="r4">
            <div class="slide s1">
                <div class="card">
                    <img src="./assets/ready_orange.png" alt="">
                    <img src="./assets/1.png" alt="">
                    <img src="./assets/text1.png" alt="">
                    <a class="touch"
                        href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                        معنا</a>
                </div>
            </div>
            <div class="slide">
                <div class="card">
                    <img src="./assets/ready_purple.png" alt="">
                    <img src="./assets/2.png" alt="">
                    <img src="./assets/text2.png" alt="">
                    <a class="touch"
                        href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                        معنا</a>
                </div>
            </div>
            <div class="slide">
                <div class="card">
                    <img src="./assets/ready_orange.png" alt="">
                    <img src="./assets/3.png" alt="">
                    <img src="./assets/text3.png" alt="">
                    <a class="touch"
                        href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                        معنا</a>
                </div>
            </div>
            <div class="slide">
                <div class="card">
                    <img src="./assets/ready_orange.png" alt="">
                    <img src="./assets/4.png" alt="">
                    <img src="./assets/4-1.png" alt="">
                    <a class="touch"
                        href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                        معنا</a>
                </div>
            </div>
        </div>

        <div class="navigation">
            <label for="r1" class="bar" id="1"></label>
            <label for="r2" class="bar" id="2"></label>
            <label for="r3" class="bar" id="3"></label>
            <label for="r4" class="bar" id="4"></label>
        </div>
    </div>

    <a href="https://m.me/LTUC.JO"><img class="chat" src="./assets/chat2-removebg-preview.png" alt=""></a>`

    $('#section-one').append(content);
}

function renderAbout(data) {
    data.aboutUsFeatures.map(ele => {
        $('#section-two').append(
            `<h3>${ele.Feature}</h3>
            <h4>${ele.description}</h4>`);
    })
    $('#section-two').append(`<a href=${data.aboutUsLink}>تواصل معنا</a>`)
}






$('.main-nav-mobile').hide();
$('.sub-dropdown-content').hide();
$('.icon').on("click", function () {
    $('.main-nav-mobile').fadeToggle(200);
});

$(".sub-dropdown-btn").click(function () {
    $('.sub-dropdown-content').fadeToggle(200);
})


var i = 0;

function carousel() {
    let slide = document.getElementsByClassName("s1");
    slide[0].style.marginLeft = -i * 25 + '%';
    i++;
    if (i === 4) {
        i = 0;
    }
    setTimeout(carousel, 5000);
}

$('.bar').on('click', function (e) {
    i = e.target.id - 1;
    let slide = document.getElementsByClassName("s1");
    slide[0].style.marginLeft = -i * 25 + '%'
});


/**
   <nav class="main-nav-mobile">
        <ul>
            <li><a href="#section-one">HOME</a></li>
            <li><a href="#section-two">ABOUT US</a></li>
            <li><a href="#section-four">PROGRAMS</a></li>
            <li class="dropdown sub-dropdown"><button class="dropbtn sub-dropdown-btn" type="scall">STUDENT
                    SERVICES<i class="fa fa-caret-down"></i></button>
            </li>
            <li class="sub-dropdown-content">
                <a class="a-sdc"
                    href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">SSP</a>
                <a class="a-sdc" href="https://online.ltuc.com/d2l/home">D2L</a>
                <a class="a-sdc" href="https://employmenthub.ltuc.com">E4E</a>
            </li>
            <li><a href="#footer">CONTACT US</a></li>
        </ul>
    </nav>
 */