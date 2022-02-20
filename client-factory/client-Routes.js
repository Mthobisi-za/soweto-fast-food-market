module.exports = function Client(pool) {
    function homeRoutes(req, res) {
        res.render('index')
    }

    function shop(req, res) {
        var obj = [{
                shop: 'Corner Tuck Shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq04P-CaQC3hb1aLp25w1dcUgx-zapOp3qg&usqp=CAU',
                ratings: '3 out of 10'
            },
            {
                shop: 'Gogo Spaza shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLuPFUL05bmKa7z0XiFJc6BlMSvjKs2RP2A&usqp=CAU',
                ratings: '1 out of 10'
            }, {
                shop: 'Corner Tuck Shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq04P-CaQC3hb1aLp25w1dcUgx-zapOp3qg&usqp=CAU',
                ratings: '3 out of 10'
            },
            {
                shop: 'Gogo Spaza shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLuPFUL05bmKa7z0XiFJc6BlMSvjKs2RP2A&usqp=CAU',
                ratings: '1 out of 10'
            }, {
                shop: 'Corner Tuck Shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq04P-CaQC3hb1aLp25w1dcUgx-zapOp3qg&usqp=CAU',
                ratings: '3 out of 10'
            },
            {
                shop: 'Gogo Spaza shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLuPFUL05bmKa7z0XiFJc6BlMSvjKs2RP2A&usqp=CAU',
                ratings: '1 out of 10'
            }, {
                shop: 'Corner Tuck Shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq04P-CaQC3hb1aLp25w1dcUgx-zapOp3qg&usqp=CAU',
                ratings: '3 out of 10'
            },
            {
                shop: 'Gogo Spaza shop',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLuPFUL05bmKa7z0XiFJc6BlMSvjKs2RP2A&usqp=CAU',
                ratings: '1 out of 10'
            }
        ]
        res.render('shop', { data: obj })
    }

    function cart(req, res) {
        var actualCart = {
            shop: 'Gogo Spaza shop',
            lacation: "51 sinthumule street",
            itemName: "Kota",
            price: "R25",
            totalPrice: "R200"
        }
        res.render("cart", { cart: actualCart })
    }

    function menu(req, res) {
        var shop = {
            shop: 'Gogo Spaza shop',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLuPFUL05bmKa7z0XiFJc6BlMSvjKs2RP2A&usqp=CAU',
            ratings: '1 out of 10',
            location: "51 sinthumule street",
            contact: "076 890 9988"
        };
        var menus = [{
            item: 'Kota',
            price: "R25",
            location: "51 sinthumule street",
            img: "https://previews.123rf.com/images/pegleg01/pegleg011809/pegleg01180900004/133519531-kota-ein-einfaches-s%C3%BCdafrikanisches-beliebtes-preiswertes-streetfood-bild-mit-kopienraum-im-querform.jpg"
        }, {
            item: 'Kota',
            price: "R25",
            location: "51 sinthumule street",
            img: "https://previews.123rf.com/images/pegleg01/pegleg011809/pegleg01180900004/133519531-kota-ein-einfaches-s%C3%BCdafrikanisches-beliebtes-preiswertes-streetfood-bild-mit-kopienraum-im-querform.jpg"
        }, {
            item: 'Kota',
            price: "R25",
            location: "51 sinthumule street",
            img: "https://previews.123rf.com/images/pegleg01/pegleg011809/pegleg01180900004/133519531-kota-ein-einfaches-s%C3%BCdafrikanisches-beliebtes-preiswertes-streetfood-bild-mit-kopienraum-im-querform.jpg"
        }, {
            item: 'Kota',
            price: "R25",
            location: "51 sinthumule street",
            img: "https://previews.123rf.com/images/pegleg01/pegleg011809/pegleg01180900004/133519531-kota-ein-einfaches-s%C3%BCdafrikanisches-beliebtes-preiswertes-streetfood-bild-mit-kopienraum-im-querform.jpg"
        }, ]
        res.render('menu', { menus, shop })
    }
    return {
        homeRoutes,
        shop,
        cart,
        menu
    }
}