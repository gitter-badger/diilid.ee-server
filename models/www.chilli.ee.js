//if (site === 'www.chilli.ee') {
//    $('#slider img').each(function (i, image) {
//        pictures.push({
//            url: $(image).attr('src')
//            , main: true
//        })
//    })
//
//    $('#description img').each(function (i, image) {
//        pictures.push({
//            url: $(image).attr('src')
//        })
//        $(image).remove()
//    })
//
//    _.extend(price, {
//        discount: $('#buy_box div.osta h2').text()
//        , regular: $('#buy_box p.little_box span.little_box_nr').eq(0).text()
//        , percent: $('#buy_box p.little_box span.little_box_nr').eq(1).text()
//    })
//
//    _.extend(title, {
//        full: $('#buy_box h1').text()
//    })
//
//    deal.seller = {
//        info: $('#asukoht').html()
//    }
//
//    _.extend(description, {
//        full: $('#description div.desc_left').html()
//        , short: $('#description div.desc_right').html()
//        , map: $('#show_map > a > img').attr('src')
//    })
//}


function template($) {
    return {
        pictures: {
            main: $('#slider img')
            , other: $('#description img')
        }
        , price: {
            discount: $('#buy_box div.osta h2').text()
            , regular: $('#buy_box p.little_box span.little_box_nr').eq(0).text()
            , percent: $('#buy_box p.little_box span.little_box_nr').eq(1).text()
        }
        , title: {
            full: $('#buy_box h1').text()
        }
        , seller: {
            info: $('#asukoht').html()
        }
        , description: {
            full: $('#description div.desc_left').html()
            , short: $('#description div.desc_right').html()
            , map: $('#show_map > a > img').attr('src')
        }
    }
};
