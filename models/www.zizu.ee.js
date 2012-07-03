//if (site === 'www.zizu.ee') {
//    pictures.push({
//        url: $('#content').children('.b-content-white-i').eq(0).children('p').children('img').attr('src'),
//        main: true
//    })
//
//    $('#content').children('.b-content-white-i').eq(1).find('p.rtecenter img').each(function (i, image) {
//        pictures.push({
//            url: $(image).attr('src')
//        })
//        $(image).remove()
//    })
//
//    _.extend(price, {
//        discount: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('h2').eq(0).text(),
//        regular: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('p').eq(0).text(),
//        percent: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('h2').eq(1).text(),
//        benefit: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('p').eq(1).text()
//    })
//
//    deal.exposed = ''
//    deal.end = ''
//
//    _.extend(title, {
//        full: $('#content').children('.b-content-white-i').eq(0).children('h1').text(),
//        short: ''
//    })
//
//    deal.seller = {
//        info: $('#content').children('.b-content-white-i').eq(1).children('table').eq(1).find('td').eq(1).html()
//    }
//
//    _.extend(description, {
//        full: $('#content').children('.b-content-white-i').eq(1).children('table').eq(0).find('td').eq(0).html(),
//        short: $('#content').children('.b-content-white-i').eq(1).children('table').eq(0).find('td').eq(1).html(),
//        map: $('#content').children('.b-content-white-i').eq(1).children('table').eq(1).find('td').eq(0).find('img').attr('src')
//    })
//}

function template($) {
    return {
        pictures: {
            main: $('#content').children('.b-content-white-i').eq(0).children('p').children('img').attr('src')
            , other: $('#content').children('.b-content-white-i').eq(1).find('p.rtecenter img')
        }
        , price: {
            discount: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('h2').eq(0).text(),
            regular: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('p').eq(0).text(),
            percent: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('h2').eq(1).text(),
            benefit: $('#content').children('.b-content-white-i').eq(0).find('table td').eq(1).children('p').eq(1).text()
        }
        , title: {
            full: $('#content').children('.b-content-white-i').eq(0).children('h1').text(),
            short: ''
        }
        , seller: {
            info: $('#content').children('.b-content-white-i').eq(1).children('table').eq(1).find('td').eq(1).html()
        }
        , description: {
            full: $('#content').children('.b-content-white-i').eq(1).children('table').eq(0).find('td').eq(0).html(),
            short: $('#content').children('.b-content-white-i').eq(1).children('table').eq(0).find('td').eq(1).html(),
            map: $('#content').children('.b-content-white-i').eq(1).children('table').eq(1).find('td').eq(0).find('img').attr('src')
        }
    }
}