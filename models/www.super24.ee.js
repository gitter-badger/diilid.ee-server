//if (site === 'www.super24.ee') {
//    pictures.push({
//        url: $('#container .c-main .inner.clearfix2 .main-img-wrp img').attr('src'),
//        main: true
//    })
//
//    $('#container .c-info .inner .form-item .photos a').each(function (i, link) {
//        pictures.push({
//            url: $(link).attr('link')
//        })
//    })
//
//    _.extend(price, {
//        discount: $('#container .c-main .inner.clearfix2 .main-details-wrp .price .discount-price').text(),
//        regular: $('#container .c-main .inner.clearfix2 .main-details-wrp .price .regular-price').text(),
//        benefit: $('#container .c-main .inner.clearfix2 .main-details-wrp .price .econ').text()
//    })
//
//    _.extend(title, {
//        full: $('#container .c-main .inner.clearfix2 h1').text(),
//        short: $('#container .c-main .inner.clearfix2 h2').text()
//    })
//
//    deal.seller = {
//        info: $('#seller-info .content').html()
//    }
//
//    $('#container .c-info .inner .form-item .photos').remove()
//    $('#seller-info').remove()
//
//    _.extend(description, {
//        full: $('#container .c-info .inner .form-item').html()
//        , map: $('#container .c-info .inner .form-item .Gmap').attr('src')
//    })
//}

function template($) {
    return {
        pictures: {
            main: $('#container .c-main .inner.clearfix2 .main-img-wrp img').attr('src')
            , other: $('#container .c-info .inner .form-item .photos a')
        }
        , price: {
            discount: $('#container .c-main .inner.clearfix2 .main-details-wrp .price .discount-price').text(),
            regular: $('#container .c-main .inner.clearfix2 .main-details-wrp .price .regular-price').text(),
            benefit: $('#container .c-main .inner.clearfix2 .main-details-wrp .price .econ').text()
        }
        , title: {
            full: $('#container .c-main .inner.clearfix2 h1').text(),
            short: $('#container .c-main .inner.clearfix2 h2').text()
        }
        , seller: {
            info: $('#seller-info .content').html()
        }
        , description: {
            full: $('#container .c-info .inner .form-item').html()
            , map: $('#container .c-info .inner .form-item .Gmap').attr('src')
        }
    }
}