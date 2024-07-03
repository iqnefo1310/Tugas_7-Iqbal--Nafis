const dataBase = [
    {
        id: 1,
        nameProduct: "Xiaomi",
        nameSeri: "Redmi 13",
        image: "https://i02.appmifile.com/948_item_id/23/05/2024/66fd83d94fe5ef8f241fe23811951f3a.png?thumb=1&f=webp&q=85",
        description: [
            "8GB RAM",
            "Kamera superjernih 108 MP",
            "Helio G99-Ultra"
        ],
        price: "Rp 1.999.000",
    },
    {
        id: 2,
        nameProduct: "xiaomi",
        nameSeri: " 14",
        image: "https://i02.appmifile.com/510_item_id/18/03/2024/3937510c2828c989728a658041a7620c.png?thumb=1&f=webp&q=85",
        description: [
            "12 GB + 256 GB",
            "Lensa optik Leica Summilux",
            "Snapdragon® 8 Gen 3"
        ],
        price: "Rp 11.999.000",
    },
    {
        id: 3,
        nameProduct: "xiaomi",
        nameSeri: "13T",
        image: "https://i02.appmifile.com/33_item_id/21/09/2023/e1733ba627f7733108aa2c7160b1666a.png?thumb=1&f=webp&q=85",
        description: [
            "12 GB + 256 GB",
            "Kamera 50MP kelas pro",
            "Dimensity 8200-Ultra"
        ],
        price: "Rp 6.499.000",
    },
    {
        id: 9,
        nameProduct: "poco",
        nameSeri: "M6 Pro",
        image: "https://i02.appmifile.com/72_item_id/19/01/2024/578926a64c2070f77b5b84c51678f4e3.png?thumb=1&f=webp&q=85",
        description: [
            "8 GB + 256 GB",
            "Bezel ultra-tipis untuk pengalaman menonton premium",
            "Helio G99-Ultra "
        ],
        price: "Rp 2.799.000",
    },
    {
        id: 4,
        nameProduct: "xiaomi",
        nameSeri: "Redmi Note 13 Pro+ 5G",
        image: "https://i02.appmifile.com/557_item_id/19/02/2024/ec5ae0f408254bcedffa71ece3b809c8.png?thumb=1&f=webp&q=85",
        description: [
            "12 GB + 512 GB",
            "200 MP unggulan Kamera utama OIS anti-guncangan",
            "Snapdragon 8 Gen 2"
        ],
        price: "Rp 5.999.000",
    },
    {
        id: 5,
        nameProduct: "xiaomi",
        nameSeri: "Redmi 13C",
        image: "https://i02.appmifile.com/675_item_id/28/11/2023/264300957e1ac394b3414258c1690201.png?thumb=1&f=webp&q=85",
        description: [
            "6 GB + 128 GB",
            "Layar mulus 90 Hz berukuran 6,74\"",
            "Prosesor octa-core yang andal"
        ],
        price: "Rp 1.499.000",
    },
    {
        id: 6,
        nameProduct: "xiaomi",
        nameSeri: "Redmi 12",
        image: "https://i02.appmifile.com/741_item_id/24/07/2023/0600a10364f59d2f3f837e44c85a5531.png?thumb=1&f=webp&q=85",
        description: [
            "8 GB + 256 GB",
            "Desain bagian belakang kaca premium",
            "MediaTek Helio G88"
        ],
        price: "Rp 1.799.000",
    },
    {
        id: 6,
        nameProduct: "xiaomi",
        nameSeri: "Redmi 12",
        image: "https://i02.appmifile.com/741_item_id/24/07/2023/0600a10364f59d2f3f837e44c85a5531.png?thumb=1&f=webp&q=85",
        description: [
            "8 GB + 256 GB",
            "Desain bagian belakang kaca premium",
            "MediaTek Helio G88"
        ],
        price: "Rp 1.799.000",
    },
    {
        id: 7,
        nameProduct: "xiaomi",
        nameSeri: "redmi a3",
        image: "https://i02.appmifile.com/992_item_id/19/02/2024/5b022419cca62ff171ec1e37e8a7db99.png?thumb=1&f=webp&q=85",
        description: [
            "4 GB + 128 GB",
            "Desain elegan dan trendi",
            "mediatek helio g36"
        ],
        price: "1.199.000",
    },
    {
        id: 8,
        nameProduct: "poco",
        nameSeri: "X6 Pro 5G",
        image: "https://i02.appmifile.com/877_item_id/19/01/2024/45dc95e7bf52755f1a2a684ef267c7f4.png?thumb=1&f=webp&q=85",
        description: [
            "12 GB + 512 GB",
            "120 Hz FIow AMOLED 64MP OIS 67W Turbo charge",
            "Dimensity 8300-Ultra"
        ],
        price: "Rp 4.899.000",
    },
    {
        id: 9,
        nameProduct: "poco",
        nameSeri: "M6 Pro",
        image: "https://i02.appmifile.com/72_item_id/19/01/2024/578926a64c2070f77b5b84c51678f4e3.png?thumb=1&f=webp&q=85",
        description: [
            "8 GB + 256 GB",
            "Bezel ultra-tipis untuk pengalaman menonton premium",
            "Helio G99-Ultra "
        ],
        price: "Rp 2.799.000",
    },
    {
        id: 10,
        nameProduct: "poco",
        nameSeri: "X5 Pro 5G",
        image: "https://i02.appmifile.com/58_item_id/16/06/2023/e6e8a8b8d8ca5e9cf464de88c36f5bfd.png?thumb=1&f=webp&q=85",
        description: [
            "6 GB + 128 GB||8 GB + 256 GB",
            "Dynamic RAM expansion 3.0",
            "Snapdragon® 695 5G"
        ],
        price: "Rp 3.799.000",
    },
    {
        id: 11,
        nameProduct: "POCO",
        nameSeri: "c65",
        image: "https://i02.appmifile.com/755_item_id/21/12/2023/ae662abe255bdacd9471d7c3066090bd.png?thumb=1&f=webp&q=85",
        description: [
            "6 GB + 128 GB||8 GB + 256 GB",
            "AI 50 MP triple camera",
            "MediaTek Helio G85"
        ],
        price: "",
    },
    {
        id: 8,
        nameProduct: "poco",
        nameSeri: "X6 Pro 5G",
        image: "https://i02.appmifile.com/877_item_id/19/01/2024/45dc95e7bf52755f1a2a684ef267c7f4.png?thumb=1&f=webp&q=85",
        description: [
            "12 GB + 512 GB",
            "120 Hz FIow AMOLED 64MP OIS 67W Turbo charge",
            "Dimensity 8300-Ultra"
        ],
        price: "Rp 4.899.000",
    },
    {
        id: 9,
        nameProduct: "poco",
        nameSeri: "M6 Pro",
        image: "https://i02.appmifile.com/72_item_id/19/01/2024/578926a64c2070f77b5b84c51678f4e3.png?thumb=1&f=webp&q=85",
        description: [
            "8 GB + 256 GB",
            "Bezel ultra-tipis untuk pengalaman menonton premium",
            "Helio G99-Ultra "
        ],
        price: "Rp 2.799.000",
    },
    {
        id: 10,
        nameProduct: "poco",
        nameSeri: "X5 Pro 5G",
        image: "https://i02.appmifile.com/58_item_id/16/06/2023/e6e8a8b8d8ca5e9cf464de88c36f5bfd.png?thumb=1&f=webp&q=85",
        description: [
            "6 GB + 128 GB||8 GB + 256 GB",
            "Dynamic RAM expansion 3.0",
            "Snapdragon® 695 5G"
        ],
        price: "Rp 3.799.000",
    },
    //template menambah product
    // {
    //     id: 11,
    //     nameProduct: "",
    //     nameSeri: "",
    //     image: "",
    //     description: [
    //         "",
    //         "",
    //         ""
    //     ],
    //     price: "",
    // },
];

function Products(data) {    
    let container = document.querySelector('.container');
    data.map((product) => {
        // col-1
        let col_1 = document.createElement('div');
        col_1.classList.add('col-1');
        let img = document.createElement('img');
        img.src = product.image;
        img.alt = product.nameSeri;
        col_1.appendChild(img);

        // col-2
        let col_2 = document.createElement('div');
        col_2.classList.add('col-2');
        let figcaption = document.createElement('figcaption');

        // deskripsi figcaption
        product.description.map(desc => {
            let p = document.createElement('p');
            p.textContent = desc;
            figcaption.appendChild(p);
        });

        // produk dan harga
        let productName = document.createElement('h2');
        productName.textContent = `${product.nameProduct} ${product.nameSeri}`;
        let price = document.createElement('p');
        price.textContent = product.price;
        //button
        let buy = document.createElement('button');
        buy.textContent = ("buy now");
        buy.classList.add('btn1');
        let like = document.createElement('button');
        like.textContent = ("like");
        let coment = document.createElement('button');
        coment.textContent = ("coment");
        buy.addEventListener("click", (p) => {
            let beli = confirm("Anda Membeli Product?")
            if (beli == true) {
                alert("Anda Membeli Product Ini Terimakasih");
                console.log("Beli");
            }
            else {
                alert("Anda Tidak Jadi Membeli");
            }
        });
        like.addEventListener("click", () => {
            alert("Anda Menyukai Product");
            console.log("like")
        });
        coment.addEventListener("click", () => {
            let komen = prompt("Tulis Komentar Anda")
            console.log("komentar: " + komen);
        });

        // col-2 appendChild
        col_2.appendChild(productName);
        col_2.appendChild(figcaption);
        col_2.appendChild(price);
        col_2.appendChild(buy);
        col_2.appendChild(like);
        col_2.appendChild(coment);

        container.appendChild(col_1);
        container.appendChild(col_2);

        // // style dom untuk tombol
        let tombol = document.getElementsByTagName('button');
        for (let index = 0; index < tombol.length; index++) {
            const element = tombol[index];
            element.style.backgroundColor='#f00';
            element.style.color='#fff';
        }
    });
}
Products(dataBase);