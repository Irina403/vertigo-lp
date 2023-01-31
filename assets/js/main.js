$(document).ready(function() {
    $('.partners-block__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        prevArrow: "<img src='i/icons/arrow-prev-black.svg' class='arrow-black prev3' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next-black.svg' class='arrow-black next3' alt='2'>",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // arrows: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            }

        ]
    });
    $('.slider-banner ').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: "<img src='i/icons/arrow-prev.svg' class='arrow prev2' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next.svg' class='arrow next2' alt='2'>",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    infinite: true,
                    dots: true
                }
            }

        ]
    });




});


function raschitat() {
    console.log('yes');
    material = document.getElementById('material').value;
    switch (material) {
        case "pgs":
            cena = 440;
            break
        case "pesok":
            cena = 480;
            break
        case "grunt":
            cena = 380;
            break
        case "shlak1":
            cena = 380;
            break
        case "shlak2":
            cena = 380;
            break
        case "sheben1":
            cena = 380;
            break
        case "sheben2":
            cena = 380;
            break
        case "sheben3":
            cena = 380;
            break
        case "gravi":
            cena = 380;
            break
        case "opilki":
            cena = 380;
            break
        default:
            cena = 440;
            break
    }
    volume = document.getElementById('volume').value;
    distance = document.getElementById('distance').value;
    if (volume == "") {
        alert("Вы не указали объем");
    } else if (distance == "") {
        alert("Вы не указали расстояние");
    } else {
        // ploschad = parseFloat(shirina) * parseFloat(dlina);
        // document.getElementById('ploschad').innerHTML = "Площадь равна: " + ploschad + " кв. м.";
        stoimost = volume * distance;
        document.getElementById('stoimost').innerHTML = "Стоимость равна: " + stoimost + " р.";
    }
}