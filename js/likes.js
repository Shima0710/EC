const products = [
    {
        id: 1,
        title: "Maison MIHARA YASUHIRO <br> Distressed T-shirt <br>black",
        price: 28600 ,
        image:
        "https://img.miharayasuhiro.jp/v2/product/J12TS532/J12TS532_8.jpg?v=20231222143758",
        genre: "T-shirt",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
        id: 2,
        title: "Maison MIHARA YASUHIRO <br> Distressed T-shirt <br>white",
        price: 28600,
        image:
          "https://img.miharayasuhiro.jp/v2/product/J12TS532/J12TS532_1.jpg?v=20231222143758",
          genre:  "T-shirt",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
        id: 3,
        title: "Maison MIHARA YASUHIRO <br>Wide Back Knit Sweater <br>black",
        price: 82500,
        image:
           "https://img.miharayasuhiro.jp/v2/product/A12SW512/A12SW512_8.jpg?v=20240112170104",
           genre: "Sweater",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
          id: 4,
          title: "Maison MIHARA YASUHIRO <br> Wide Back Knit Sweater <br>white",
          price: 82500,
          image:
             "https://img.miharayasuhiro.jp/v2/product/A12SW512/A12SW512_1.jpg?v=20240112170104",
             genre: "Sweater",
        coment:"tenple",
      },
      {
          id: 5,
          title: "Maison MIHARA YASUHIRO <br>  Wide Back Track Pants <br>black",
          price: 44000,
          image:
             "https://img.miharayasuhiro.jp/v2/product/A12PT592/A12PT592_8.jpg?v=20231222182736",
             genre: "Pants",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
        id: 6,
        title: "Maison MIHARA YASUHIRO <br>  Wide Back Track Pants <br>gray",
        price: 44000,
        image:
           "https://img.miharayasuhiro.jp/v2/product/A12PT592/A12PT592_18.jpg?v=20231222182736",
           genre: "Pants",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
        id: 7,
        title: "Maison MIHARA YASUHIRO <br> Anorak Shirt <br> black",
        price: 70400,
        image:
          "https://img.miharayasuhiro.jp/v2/product/A12SH074/A12SH074_8.jpg?v=20231222143640",
          genre: "jacket",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
        id: 8,
        title: "Maison MIHARA YASUHIRO <br> Anorak Shirt <br> black",
        price: 70400,
        image:
        "https://img.miharayasuhiro.jp/v2/product/A12SH074/A12SH074_14.jpg?v=20231222143640",
        genre: "jacket",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
          id: 9,
          title: "Maison MIHARA YASUHIRO <br> Cargo Pants <br> black",
          price:  71500,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12PT052/J12PT052_8.jpg?v=20231222143736",
          genre: "pants",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
          id: 10,
          title: "Maison MIHARA YASUHIRO <br> Cargo Pants <br> black",
          price:  71500,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12PT052/J12PT052_22.jpg?v=20231222143736",
          genre: "pants",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
          id: 11,
          title: "Maison MIHARA <br> Distressed Knit Sweater <br>black",
          price:  9900,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12SW513/J12SW513_8.jpg?v=20231222143746",
          genre: "Sweater",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
          id: 12,
          title: "Maison MIHARA <br> Distressed Knit Sweater <br>green",
          price:  63800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12SW513/J12SW513_1.jpg?v=20231222143746",
          genre: "Sweater",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
          id: 13,
          title: "Maison MIHARA <br> Lace-up Hooded Jacket<br>black",
          price:  63800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12BL051/J12BL051_8.jpg?v=20231222144927",
          genre: "Jacket",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
          id: 14,
          title: "Maison MIHARA <br> Lace-up Hooded Jacket <br> white",
          price:  63800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12BL051/J12BL051_1.jpg?v=20231222144927",
          genre: "Jacket",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
          id: 15,
          title: "Maison MIHARA <br> 【EXCLUSIVE】Print T-shirt <br>white",
          price:  22000,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C12TS513/mi_01.jpg?v=20240409184424",
          genre: "T-shirt",   
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
        id: 16,
        title: "Maison MIHARA <br> 【EXCLUSIVE】Print T-shirt <br>black",
        price:  22000,
        image:
        "https://img.miharayasuhiro.jp/v2/product/C12TS513/cc_8.jpg?v=20240409184424",
        genre: "T-shirt",
          
      coment:"tenpleate",
      sizes: ["S", "M", "L"]
      },
      {
          id: 17,
          title: "Maison MIHARA <br> Mendrill X GS Distressed Hoodie <br> black",
          price:  41800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11HD501/C11HD501_019_s.jpg?v=20231114180608",
          genre: "Hoodie",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
          id: 18,
          title: "Maison MIHARA <br> Mendrill X GS Distressed Hoodie <br> gray",
          price:  41800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11HD501/C11HD501_021.jpg?v=20231114180608",
          genre: "Hoodie",
          coment:"tenpleate",
          sizes: ["S", "M", "L"]
      },
      {
        id: 19,
        title: "Maison MIHARA <br> Mendrill X GS Distressed Hoodie <br> navy",
        price:  41800,
        image:
        "https://img.miharayasuhiro.jp/v2/product/C11HD501/C11HD501_023.jpg?v=20231114180608",
        genre: "Hoodie",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
        id: 20,
        title: "Maison MIHARA <br> Combination Denim Jacket <br> black",
        price:  110000,
        image:
        "https://img.miharayasuhiro.jp/v2/product/A12BL022/A12BL022_015.jpg?v=20231222143529",
        genre: "Jacket",
        coment:"tenpleate",
        sizes: ["S", "M", "L"]
      },
      {
          id: 21,
          title: "Maison MIHARA YASUHIRO <br> Mendrill X GS Distressed Pants<br> black",
          price:  35200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11PT502/C11PT502_019.jpg?v=20231114180624",
          genre: "Pants",
         coment:"tenpleate",
         sizes: ["S", "M", "L"]
      },
      {
          id: 22,
          title: "Maison MIHARA YASUHIRO <br> Mendrill X GS Distressed Pants<br> gray",
          price:  35200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11PT502/C11PT502_021.jpg?v=20231114180624",
          genre: "Pants",
         coment:"tenpleate",
         sizes: ["S", "M", "L"]
      },
      {
          id: 23,
          title: "Maison MIHARA YASUHIRO <br> Mendrill X GS Distressed Pants<br> black",
          price:  35200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11PT502/C11PT502_023.jpg?v=20231114180624",
          genre: "Pants",
         coment:"tenpleate",
         sizes: ["S", "M", "L"]
      },
      {
          id: 24,
          title: "Maison MIHARA YASUHIRO <br>Light Denim Wide Pants<br> black",
          price:  57200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12PT022/J12PT022_015.jpg?v=20231222143729",
          genre: "Pants",
         coment:"tenpleate",
         sizes: ["S", "M", "L"]
      },
    
      


        {
            id: 50,
            title: "COMME DES GARCONS <br> PLAY CDGAx-T108-051 <br> black",
            price: 7700,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/files/19403_comme_play_az-t107-051_1_2_2_dc7e62c5-40a4-448c-b74b-1bc134a4d95e.jpg?v=1709694013&width=800",
            genre: "T-shirt",
            comment: "tenpleate"
        },
        {
            id: 51,
            title: "COMME DES GARCONS <br> PLAY CDGAx-T108-051  <br>white",
            price: 7700,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/files/19448_comme_play_az-t117-051_1_2_2_f6e996eb-7d3e-4943-9fe7-96162724ded1.jpg?v=1709694046&width=1116",
            genre: "T-shirt",
            comment: "tenpleate"
        },
        {
            id: 52,
            title: "COMME DES GARCONS <br> PLAY CDG Ax-T114-051<br>black",
            price: 8400,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/files/DSC1129_1_145ed41d-e39f-4c58-9e00-101fa72bcd4b.jpg?v=1709693066&width=1116",
            genre: "T-shirt",
            comment: "tenpleate"
        },
        {
            id: 53,
            title: "COMME DES GARCONS <br>PLAY CDG Ax-T068-051 <br>white",
            price: 8400,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/files/PLAY23_cc6c9229-b0cc-4fc0-b130-8178afc46db4.jpg?v=1709702339&width=1116",
            genre: "T-shirt",
            comment: "tenple"
        },
        {
            id: 54,
            title: "COMME DES GARCONS <br>PLAY CDG PLAY CDG <br>black",
            price: 8300,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/files/PLAY27_2e5e4d27-4881-4213-a43b-614d692b8ed6.jpg?v=1709702502&width=1116",
            genre: "T-shirt",
            comment: "tenpleate"
        },
        {
            id: 55,
            title: "COMME DES GARCONS <br>PLAY CDG PLAY CDG <br>white",
            price: 8300,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/files/PLAY29_854da1d9-e0f9-4150-8c24-918b6a307db6.jpg?v=1709702536&width=1116",
            genre: "T-shirt",
            comment: "tenpleate"
        },
        {
            id: 56,
            title: "COMME DES GARCONS <br>CDG PLAY  Play K-Way Full Zip<br>black",
            price: 29000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/files/img001_1.jpg?v=1708921932&width=1116",
            genre: "jacket",
            comment: "tenpleate"
        },
        {
            id: 57,
            title: "COMME DES GARCONS <br>CDG PLAY  K-WAY FULL ZIP <br>white",
            price: 25000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/P1J501-WHITE_2.jpg?v=1638781593&width=1116",
            genre: "jacket",
            comment: "tenpleate"
        },
        {
            id: 58,
            title: "COMME DES GARCONS <br> PLAY CDGK-Way Full Zip <br>Black/Orange",
            price: 29700,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/IMG_0558a.jpg?v=1671070618&width=1116",
            genre: "jacket",
            comment: "tenpleate"
        },
        {
            id: 59,
            title: "COMME DES GARCONS <br> PLAY CDGK-WAY HALF ZIP <br>BEIGE",
            price: 25300,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/P1J502-BEIGE_2.jpg?v=1638781555&width=1116",
            genre: "jacket",
            comment: "tenpleate"
        },
        {
            id: 60,
            title: "COMME DES GARCONS <br> PLAY CDGK-Way Full Zip <br>Black/Blue",
            price: 25000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/IMG_0554a.jpg?v=1671070449&width=1116",
            genre: "jacket",
            comment: "tenpleate"
        },
        {
            id: 61,
            title: "COMME DES GARCONS <br>PLAY CDGDouble Red Heart Hoodie  <br>black",
            price: 23000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/cdg-play_az-t294-051-1-4_029.jpg?v=1616766373&width=1116",
            genre: "Hoodie",
            comment: "tenpleate"
        },
        {
            id: 62,
            title: "COMME DES GARCONS <br> PLAY CDGDouble Red Heart Hoodie <br>white",
            price: 23000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/cdg-play_az-t294-051-2-4_035.jpg?v=1616766374&width=1116",
            genre: "Hoodie",
            comment: "tenpleate"
        },
        {
            id: 63,
            title: "COMME DES GARCONS <br>PLAY CDGZIP UP HOODIE    <br>Grey",
            price: 23000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/az-t167-051-1_1_1.jpg?v=1616766057&width=1116",
            genre: "Hoodie",
            comment: "tenpleate"
        },
        {
            id: 64,
            title: "COMME DES GARCONS <br> PLAY CDGSweatshirt <br>blue",
            price: 23000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/az-t171-051_2.jpg?v=1645753558&width=1116",
            genre: "Hoodie",
            comment: "tenpleate"
        },
        {
            id: 65,
            title: "COMME DES GARCONS <br> PLAY CDGHooded Sweatshirt With Big Hearts <br>black",
            price: 21000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/az-t253-051_1_2_1.jpg?v=1616766097&width=1116",
            genre: "Hoodie",
            comment: "tenpleate"
        },
        {
            id: 66,
            title: "COMME DES GARCONS <br> PLAY CDGHooded Sweatshirt With 5 Hearts <br>Grey",
            price: 23000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/az-t249-051-1_2_1.jpg?v=1616766098&width=1116",
            genre: "Hoodie",
            comment: "tenpleate"
        },
        {
            id: 66,
            title: "COMME DES GARCONS <br> PLAY CDGINVADER Polyester Hooded Sweater <br>black",
            price: 24000,
            image: "https://shop-jp.doverstreetmarket.com/cdn/shop/products/az-t333-051-1-3_2.jpg?v=1677746152&width=1116",
            genre: "Hoodie",
            comment: "tenpleate"
        },
    
    

        //  needles
        {
            id: 100,
            title: "Needles <br> TRACK JACKET - POLY SMOOTH (EXCLUSIVE)  <br>black",
            price: 28600,
            image: "https://nubiantokyo.com/cdn/shop/files/0621-1_1000x.jpg?v=1711683252",
            genre: "jacket",
            comment: "tenpleate",
        },
        {
            id: 101,
            title: "Needles <br>POLY SMOOTH (EXCLUSIVE)   <br> black",
            price: 26400,
            image: "https://nubiantokyo.com/cdn/shop/files/0331-4_b8334d0a-4940-4163-b0e6-194e02c2adfa_800x.jpg?v=1711683237",
            genre: "pants",
            comment: "tenpleate",
        },
        {
            id: 102,
            title: "Needles <br>TRACK COACH JACKET (EXCLUSIVE)   <br>gray",
            price: 28600,
            image: "https://nubiantokyo.com/cdn/shop/files/9809-1_800x.jpg?v=1711683207",
            genre: "jacket",
            comment: "tenpleate",
        },
        {
            id: 103,
            title: "Needles <br> NARROW TRACK PANT - POLY SMOOTH (EXCLUSIVE) <br>gray",
            price: 26400,
            image: "https://nubiantokyo.com/cdn/shop/files/0317-4_a1a2163e-7d49-4732-87c6-82e3c864e1f4_800x.jpg?v=1711708668",
            genre: "pants",
            comment: "tenpleate",
        },
        {
            id: 104,
            title: "Needles <br>  PIPING COWBOY JAC - PE/PU DOUBLE CLOTH <br>black",
            price: 35200,
            image: "https://nubiantokyo.com/cdn/shop/files/2648-1_800x.jpg?v=1709887848",
            genre: "jacket",
            comment: "tenpleate",
        },
        {
            id: 105,
            title: "Needles <br> PIPING COWBOY PANT - PE/PU DOUBLE CLOTH <br> black",
            price: 28600,
            image: "https://nubiantokyo.com/cdn/shop/files/2723-1_5be90aff-33a8-47e4-b2ad-df8297e940d8_1000x.jpg?v=1709888164",
            genre: "pants",
            comment: "tenpleate",
        },
        {
            id: 106,
            title: "Needles <br>TRACK JACKET - POLY SMOOTH<br>blue",
            price: 28600,
            image: " https://nubiantokyo.com/cdn/shop/files/6639-1_1000x.jpg?v=1709886889",
            genre: "jacket",
            comment: "tenpleate",
        },
        {
            id: 107,
            title: "Needles <br>  TRACK PANT - POLY SMOOTH (EXCLUSIVE)<br>blue",
            price: 23100,
            image: "https://nubiantokyo.com/cdn/shop/files/6813-1_800x.jpg?v=1709887134",
            genre: "pants",
            comment: "tenpleate",
        },
        {
            id: 108,
            title: "Needles <br> V NECK CARDIGAN - CHIMAYO <br>black",
            price: 28600,
            image: "https://nubiantokyo.com/cdn/shop/files/3836-1_800x.jpg?v=1707109940",
            genre: "tops",
            comment: "tenpleate",
        },
        {
            id: 109,
            title: "Needles <br> SHAWL COLLAR S/S POLO - COTTON PIQUE  <br>black",
            price: 28600,
            image: "https://nubiantokyo.com/cdn/shop/files/3591-1_73f853c8-975d-4f23-a35b-96e99111abb5_800x.jpg?v=1707115029",
            genre: "T-shirt",
            comment: "tenpleate",
        },
        {
            id: 110,
            title: "Needles <br> M.W. JEAN JACKET (EXCLUSIE) <br>blue",
            price: 46200,
            image: "https://nubiantokyo.com/cdn/shop/files/0270-1_b9347f56-9c38-425c-a374-d69807e91e19_800x.jpg?v=1706244973",
            genre: "jacket",
            comment: "tenpleate",
        },
        {
            id: 111,
            title: "Needles <br> STRAIGHT JEAN (EXCLUSIVE)  <br>blue",
            price: 36300,
            image: "https://nubiantokyo.com/cdn/shop/files/0263-1_491dc356-57ab-4cc1-b66d-ff297448ee03_800x.jpg?v=1706244959",
            genre: "pants",
            comment: "tenpleate",
        },
        {
            id: 112,
            title: "Needles <br>L/S CREW NECK TEE - POLY JERSEY   <br>black",
            price: 14300,
            image: "https://nubiantokyo.com/cdn/shop/files/3645-1_800x.jpg?v=1707114461",
            genre: "T-shirt",
            comment: "tenpleate",
        },
        {
            id: 113,
            title: "Needles <br> L/S COWBOY ONE-UP SHIRT - POLY SATEEN <br>white",
            price: 26400,
            image: "https://nubiantokyo.com/cdn/shop/files/2204-1_800x.jpg?v=1707114132",
            genre: "tops",
            comment: "tenpleate",
        },
        {
            id: 114,
            title: "Needles <br> FLANNEL SHIRT -> RIBBON WIDE SHIRT / OVER DYE /  <br>black",
            price: 23100,
            image: "https://nubiantokyo.com/cdn/shop/files/4444-1_800x.jpg?v=1708056227",
            genre: "T-shirt",
            comment: "tenpleate",
        },
        {
            id: 115,
            title: "Needles <br> H.D. PANT - BDU <br> OLV",
            price: 25300,
            image: "https://nubiantokyo.com/cdn/shop/files/5823-1_800x.jpg?v=1709888533",
            genre: "pants",
            comment: "tenpleate",
        },
        {
            id: 116,
            title: "Needles <br> FIELD VEST - C/N OXFORD CLOTH  <br>black",
            price: 51700,
            image: "https://nubiantokyo.com/cdn/shop/files/2525-1_800x.jpg?v=1707109620",
            genre: "tops",
            comment: "tenpleate",
        },
        {
            id: 117,
            title: "Needles <br> POLO SWEATER - ARROW <br>black",
            price: 23100,
            image: "https://nubiantokyo.com/cdn/shop/files/3799-01_be5da232-08fc-4720-bf47-6cea0880312d_800x.jpg?v=1707114257",
            genre: "T-shirt",
            comment: "tenpleate",
        },
        {
            id: 118,
            title: "Needles <br>S/S CREW NECK TEE - POLY JERSEY  <br>white",
            price: 12600,
            image: "https://nubiantokyo.com/cdn/shop/files/8169-1_800x.jpg?v=1707114852",
            genre: "T-shirt",
            comment: "tenpleate",
        },
        {
            id: 119,
            title: "Needles <br> 7 CUTS WIDE TEE - COLLEGE   <br>ASSORTED",
            price: 10400,
            image: "https://nubiantokyo.com/cdn/shop/files/2136-01_800x.jpg?v=1712921846",
            genre: "T-shirt",
            comment: "tenpleate",
        },
    ];
    window.onload = function() {
        document.body.classList.add('fade-in');
    
        function loadLikedProducts() {
            let likes = JSON.parse(localStorage.getItem('likes')) || [];
            const likedProductsElement = document.getElementById('liked-products');
            
            if (likes.length === 0) {
                likedProductsElement.innerHTML = '<p>No liked products yet.</p>';
                return;
            }
    
            likedProductsElement.innerHTML = likes.map(product => `
                <div class="product" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-info">
                        <h2>${product.title}</h2>
                        <p>Price: ￥${product.price.toFixed(0)}</p>
                        <p>Comment: ${product.comment || ''}</p>
                    </div>
                </div>
            `).join('');
            
            // 商品画像をクリックしたときに `item.html` に移動するイベントリスナーを追加
            const productElements = document.querySelectorAll('.product');
            productElements.forEach(productElement => {
                productElement.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    document.body.classList.add('fade-out');
                    setTimeout(() => {
                        window.location.href = `item.html?id=${productId}`;
                    }, 600); // フェードアウトの時間と一致させる
                });
            });
        }
    
        function updateLikeIcon() {
            let likes = JSON.parse(localStorage.getItem('likes')) || [];
            const likeIcon = document.getElementById('like-icon'); // idを正しく指定
            if (likeIcon) {
                likeIcon.setAttribute('data-quantity', likes.length);
            }
        }
    
        function updateCartIcon() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartIcon = document.getElementById('cart-icon');
            const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // カート内の数量を合計
            if (cartIcon) {
                cartIcon.setAttribute('data-quantity', totalQuantity);
            }
        }
    
        loadLikedProducts();
        updateLikeIcon();
        updateCartIcon();
        
        // リンククリック時のフェードアウト処理
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const href = this.getAttribute('href');
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 600); // フェードアウトの時間と一致させる
            });
        });
    }
    
    