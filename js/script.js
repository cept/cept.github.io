function sendEmail() {

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    const body = `Nama: ${nama} <br> Email: ${email} <br> Pesan: ${pesan} `;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "aceprikzalukman10@gmail.com",
        Password: "tugasberes123",
        To: 'aceprohmat10@gmail.com',
        From: email,
        Subject: nama,
        Body: body
    }).then(
        message => {
            if (message == "OK") {
                alert('Pesan anda terkirim!')
            } else {
                message
            }

        }
    );
}


// parallax
$(window).scroll(function () {
    const wSccroll = $(this).scrollTop();
    console.log(wSccroll);

    $('.jumbotron img').css({
        'transform': `translate(0px, ${wSccroll / 4}%)`
    });

    $('.jumbotron h1').css({
        'transform': `translate(0px, ${wSccroll / 2}%)`
    });

    $('.jumbotron p').css({
        'transform': `translate(0px, ${wSccroll / 1.2}%)`
    });

    // about
    if (wSccroll > $('.about').offset().top - 300) {
        $('.about .pKiri').each(function () {
            $('.about .pKiri').addClass('pMuncul');
        });

        $('.about .pKanan').each(function () {
            $('.about .pKanan').addClass('pMuncul');
        });

    }

    // portfolio
    if (wSccroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .card-img-top').each(function (i) {
            setTimeout(function () {
                $('.portfolio .card-img-top').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });


    }
});