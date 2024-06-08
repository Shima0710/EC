
  // Products Array
  const products = [
    {
        id: 1,
        title: "Maison MIHARA YASUHIRO <br> Distressed T-shirt <br>black",
        price: 28600 ,
        image:
          "https://img.miharayasuhiro.jp/v2/product/J12TS532/J12TS532_8.jpg?v=20231222143758",
          genre: "T-shirt",
        coment:"tenpleate",
         
      },
      {
        id: 2,
        title: "Maison MIHARA YASUHIRO <br> Distressed T-shirt <br>white",
        price: 28600,
        image:
          "https://img.miharayasuhiro.jp/v2/product/J12TS532/J12TS532_1.jpg?v=20231222143758",
          genre:  "T-shirt",
        coment:"tenpleate",
      },
      {
        id: 3,
        title: "Maison MIHARA YASUHIRO <br>Wide Back Knit Sweater <br>black",
        price: 82500,
        image:
           "https://img.miharayasuhiro.jp/v2/product/A12SW512/A12SW512_8.jpg?v=20240112170104",
           genre: "Sweater",
        coment:"tenpleate",
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
      },
      {
        id: 6,
        title: "Maison MIHARA YASUHIRO <br>  Wide Back Track Pants <br>gray",
        price: 44000,
        image:
           "https://img.miharayasuhiro.jp/v2/product/A12PT592/A12PT592_18.jpg?v=20231222182736",
           genre: "Pants",
        coment:"tenpleate",
      },
      {
        id: 7,
        title: "Maison MIHARA YASUHIRO <br> Anorak Shirt <br> black",
        price: 70400,
        image:
          "https://img.miharayasuhiro.jp/v2/product/A12SH074/A12SH074_8.jpg?v=20231222143640",
          genre: "jacket",
        coment:"tenpleate",
      },
      {
        id: 8,
        title: "Maison MIHARA YASUHIRO <br> Anorak Shirt <br> black",
        price: 70400,
        image:
        "https://img.miharayasuhiro.jp/v2/product/A12SH074/A12SH074_14.jpg?v=20231222143640",
        genre: "jacket",
        coment:"tenpleate",
      },
      {
          id: 9,
          title: "Maison MIHARA YASUHIRO <br> Cargo Pants <br> black",
          price:  71500,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12PT052/J12PT052_8.jpg?v=20231222143736",
          genre: "pants",
          coment:"tenpleate",
      },
      {
          id: 10,
          title: "Maison MIHARA YASUHIRO <br> Cargo Pants <br> black",
          price:  71500,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12PT052/J12PT052_22.jpg?v=20231222143736",
          genre: "pants",
          coment:"tenpleate",
      },
      {
          id: 11,
          title: "Maison MIHARA <br> Distressed Knit Sweater <br>black",
          price:  9900,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12SW513/J12SW513_8.jpg?v=20231222143746",
          genre: "Sweater",
          coment:"tenpleate",
      },
      {
          id: 12,
          title: "Maison MIHARA <br> Distressed Knit Sweater <br>green",
          price:  63800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12SW513/J12SW513_1.jpg?v=20231222143746",
          genre: "Sweater",
          coment:"tenpleate",
      },
      {
          id: 13,
          title: "Maison MIHARA <br> Lace-up Hooded Jacket<br>black",
          price:  63800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12BL051/J12BL051_8.jpg?v=20231222144927",
          genre: "Jacket",
          coment:"tenpleate",
      },
      {
          id: 14,
          title: "Maison MIHARA <br> Lace-up Hooded Jacket <br> white",
          price:  63800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12BL051/J12BL051_1.jpg?v=20231222144927",
          genre: "Jacket",
          coment:"tenpleate",
      },
      {
          id: 15,
          title: "Maison MIHARA <br> 【EXCLUSIVE】Print T-shirt <br>white",
          price:  22000,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C12TS513/mi_01.jpg?v=20240409184424",
          genre: "T-shirt",   
          coment:"tenpleate",
      },
      {
        id: 16,
        title: "Maison MIHARA <br> 【EXCLUSIVE】Print T-shirt <br>black",
        price:  22000,
        image:
        "https://img.miharayasuhiro.jp/v2/product/C12TS513/cc_8.jpg?v=20240409184424",
        genre: "T-shirt",
          
      coment:"tenpleate",
      },
      {
          id: 17,
          title: "Maison MIHARA <br> Mendrill X GS Distressed Hoodie <br> black",
          price:  41800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11HD501/C11HD501_019_s.jpg?v=20231114180608",
          genre: "Hoodie",
          coment:"tenpleate",
      },
      {
          id: 18,
          title: "Maison MIHARA <br> Mendrill X GS Distressed Hoodie <br> gray",
          price:  41800,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11HD501/C11HD501_021.jpg?v=20231114180608",
          genre: "Hoodie",
          coment:"tenpleate",
      },
      {
        id: 19,
        title: "Maison MIHARA <br> Mendrill X GS Distressed Hoodie <br> navy",
        price:  41800,
        image:
        "https://img.miharayasuhiro.jp/v2/product/C11HD501/C11HD501_023.jpg?v=20231114180608",
        genre: "Hoodie",
        coment:"tenpleate",
      },
      {
        id: 20,
        title: "Maison MIHARA <br> Combination Denim Jacket <br> black",
        price:  110000,
        image:
        "https://img.miharayasuhiro.jp/v2/product/A12BL022/A12BL022_015.jpg?v=20231222143529",
        genre: "Jacket",
        coment:"tenpleate",
      },
      {
          id: 21,
          title: "Maison MIHARA YASUHIRO <br> Mendrill X GS Distressed Pants<br> black",
          price:  35200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11PT502/C11PT502_019.jpg?v=20231114180624",
          genre: "Pants",
         coment:"tenpleate",
      },
      {
          id: 22,
          title: "Maison MIHARA YASUHIRO <br> Mendrill X GS Distressed Pants<br> gray",
          price:  35200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11PT502/C11PT502_021.jpg?v=20231114180624",
          genre: "Pants",
         coment:"tenpleate",
      },
      {
          id: 23,
          title: "Maison MIHARA YASUHIRO <br> Mendrill X GS Distressed Pants<br> black",
          price:  35200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/C11PT502/C11PT502_023.jpg?v=20231114180624",
          genre: "Pants",
         coment:"tenpleate",
      },
      {
          id: 24,
          title: "Maison MIHARA YASUHIRO <br>Light Denim Wide Pants<br> black",
          price:  57200,
          image:
          "https://img.miharayasuhiro.jp/v2/product/J12PT022/J12PT022_015.jpg?v=20231222143729",
          genre: "Pants",
         coment:"tenpleate",
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
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let likes = JSON.parse(localStorage.getItem('likes')) || [];
    
        // 商品の詳細情報と関連商品を表示する関数
        function displayProductAndRelated(size) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const productId = urlParams.get('id');
            const clickedProduct = products.find(product => product.id === parseInt(productId));
    
            if (clickedProduct) {
                const productInfoElement = document.getElementById('productInfo');
                if (productInfoElement) {
                    productInfoElement.innerHTML = `
                        <div class="product-container">
                            <div class="product-details">
                                <img src="${clickedProduct.image}" alt="${clickedProduct.title}" />
                            </div>
                            <div class="product-info">
                                <h2>${clickedProduct.title}</h2>
                                <p>Price: ￥${clickedProduct.price.toFixed(0)}</p>
                                <div class="size-select">
                                    <label for="size">Select Size:</label>
                                    <select id="size">
                                        <option value="S" ${size === 'S' ? 'selected' : ''}>S</option>
                                        <option value="M" ${size === 'M' ? 'selected' : ''}>M</option>
                                        <option value="L" ${size === 'L' ? 'selected' : ''}>L</option>
                                    </select>
                                </div>
                                <div class="add-btn">
                                    <a class="add-to-cart" data-id="${clickedProduct.id}" data-size="${size}">Add to Cart</a>
                                    <a href="#" id="like-icon-link">
                                        <i class='bx ${isLiked(clickedProduct.id) ? 'bxs-heart' : 'bx-heart'}' id="like-icon"></i>
                                    </a>
                                </div>
                                <p>Comment: ${clickedProduct.comment || ''}</p>
                            </div>
                        </div>
                    `;
                }
    
                const addToCartButton = document.querySelector('.add-to-cart');
                if (addToCartButton) {
                    addToCartButton.addEventListener('click', addToCart);
                }
    
                const likeIconLink = document.getElementById('like-icon-link');
                if (likeIconLink) {
                    likeIconLink.addEventListener('click', function(event) {
                        event.preventDefault();
                        toggleLike(clickedProduct);
                    });
                }
    
                // 商品と同じジャンルの関連商品を表示
                const relatedProducts = products.filter(product => product.genre === clickedProduct.genre && product.id !== clickedProduct.id);
                renderRelatedProducts(relatedProducts);
            } else {
                renderProducts();
            }
        }
    
        // いいねがすでにされているかを確認する関数
        function isLiked(productId) {
            return likes.some(item => item.id === productId);
        }
    
        // いいねを保存する関数
        function saveToLikes(product) {
            likes.push(product);
            localStorage.setItem('likes', JSON.stringify(likes));
            updateLikeIcon();
        }
    
        // いいねを削除する関数
        function removeFromLikes(productId) {
            likes = likes.filter(item => item.id !== productId);
            localStorage.setItem('likes', JSON.stringify(likes));
            updateLikeIcon();
        }
    
        // いいねアイコンの状態を切り替える関数
        function toggleLike(product) {
            const liked = isLiked(product.id);
            if (liked) {
                removeFromLikes(product.id);
                document.getElementById('like-icon').classList.remove('bxs-heart');
                document.getElementById('like-icon').classList.add('bx-heart');
            } else {
                saveToLikes(product);
                document.getElementById('like-icon').classList.remove('bx-heart');
                document.getElementById('like-icon').classList.add('bxs-heart');
            }
        }
    
        // いいねアイコンのカウントを更新する関数
        function updateLikeIcon() {
            const likeIconLink2 = document.getElementById('like-icon2');
            likeIconLink2.setAttribute('data-quantity', likes.length);
        }
    
        // 商品リストを表示する関数
        function renderProducts() {
            const productList = document.getElementById('productList');
            if (productList) {
                productList.innerHTML = products.map(product => `
                    <div class="products">
                        <a href="item.html?id=${product.id}">
                            <img src="${product.image}" alt="${product.title}" class="product-img">
                        </a>
                        <div class="product-info">
                            <h2 class="product-title"><a href="item.html?id=${product.id}">${product.title}</a></h2>
                            <p class="product-price">￥${product.price.toFixed(0)}</p>
                        </div>
                    </div>
                `).join("");
            }
        }
    
        // 関連商品を表示する関数
        function renderRelatedProducts(relatedProducts) {
            const relatedProductsElement = document.getElementById('relatedProducts');
            if (relatedProductsElement) {
                relatedProductsElement.innerHTML = relatedProducts.map(product => `
                    <div class="item-products">
                        <a href="item.html?id=${product.id}">
                            <img src="${product.image}" alt="${product.title}" class="product-img">
                        </a>
                        <div class="product-info">
                            <h2 class="product-title"><a href="item.html?id=${product.id}">${product.title}</a></h2>
                            <p class="product-price">￥${product.price.toFixed(0)}</p>
                        </div>
                    </div>
                `).join("");
            }
        }
    
        // 初期表示
        displayProductAndRelated('');
    
        // カートのページにいる場合、カートのアイテムと合計を表示
        if (window.location.pathname.includes('cart.html')) {
            renderCartItems();
            calculateCartTotal();
            toggleCheckoutButton();
        }
    
        // 商品をカートに追加
        function addToCart(event) {
            const button = event.target;
            const productId = parseInt(button.dataset.id);
            const product = products.find(p => p.id === productId);
            if (!product) return;
    
            button.classList.add('clicked'); // アニメーションのためのクラス追加
            setTimeout(() => button.classList.remove('clicked'), 600); // アニメーション後にクラスを削除
    
            // 商品イメージのアニメーション
            const productImg = document.querySelector(`img[data-id="${productId}"]`);
            if (productImg) {
                const imgClone = productImg.cloneNode();
                const imgRect = productImg.getBoundingClientRect();
                imgClone.style.position = 'absolute';
                imgClone.style.left = `${imgRect.left}px`;
                imgClone.style.top = `${imgRect.top}px`;
                imgClone.style.width = `${imgRect.width}px`;
                imgClone.classList.add('flying-item');
                document.body.appendChild(imgClone);
                setTimeout(() => document.body.removeChild(imgClone), 700); // アニメーション後にイメージを削除
            }
    
            // カートへの追加処理
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                const newItem = { ...product, quantity: 1 };
                cart.push(newItem);
            }
            updateCartIcon();
            saveToLocalStorage();
        }
    
        // カートアイコンの更新
        function updateCartIcon() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            $('#cart-icon').attr('data-quantity', totalItems);
        }
    
        // カートから削除
        function removeFromCart(event) {
            const productID = parseInt(event.target.dataset.id);
            const size = cart.find((item) => item.id === productID).size;
    
            // カートからIDとサイズが一致する商品のみを削除
            cart = cart.filter((item) => item.id !== productID || item.size !== size);
    
            saveToLocalStorage();
            if (window.location.pathname.includes('cart.html')) {
                renderCartItems();
                calculateCartTotal();
            }
            updateCartIcon();
        }
    
        // 数量変更
        function changeQuantity(event){
            const productID = parseInt(event.target.dataset.id);
            const quantity = parseInt(event.target.value);
    
            if (quantity > 0) {
                const cartItem = cart.find((item) => item.id === productID);
                if (cartItem) {
                    cartItem.quantity = quantity;
                    saveToLocalStorage();
                    if (window.location.pathname.includes('cart.html')) {
                        calculateCartTotal();
                    }
                    updateCartIcon();
                }
            }
        }
    
        // ローカルストレージにカートを保存
        function saveToLocalStorage(){
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    
        // カートのアイテムを表示
        function renderCartItems() {
            const cartItemsElement = document.getElementById('cartItems');
            if (!cartItemsElement) {
                console.error('Cart items element not found.');
                return;
            }
    
            cartItemsElement.innerHTML = cart.map((item) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}" />
                    <div class="cart-item-info">
                        <h2 class="cart-item-title">${item.title}</h2>
                        <p>Size: ${item.size}</p> <!-- サイズを表示 -->
                        <input class="cart-item-quantity" type="number" name="" min="1" value="${item.quantity}" data-id="${item.id}" />
                    </div>
                    <h2 class="cart-item-price">￥${item.price}</h2>
                    <button class="remove-from-cart" data-id="${item.id}">削除</button>
                </div>
            `).join("");
    
            // カートから削除するボタンにイベントリスナーを設定
            const removeButtons = document.getElementsByClassName('remove-from-cart');
            for (let i = 0; i < removeButtons.length; i++) {
                const removeButton = removeButtons[i];
                removeButton.addEventListener('click', function(event) {
                    const $this = $(this);
                    $this.closest('.cart-item').addClass('slide-out-btn'); // アイテムにアニメーションのクラスを追加
    
                    setTimeout(function() {
                        removeFromCart(event);
                    }, 500); // アニメーションの時間（500ミリ秒）
                });
            }
    
            // 数量変更の入力欄にイベントリスナーを設定
            const quantityInputs = document.querySelectorAll('.cart-item-quantity');
            quantityInputs.forEach((input) => {
                input.addEventListener("change", changeQuantity);
            });
        }
    
        // カート合計を計算
        function calculateCartTotal() {
            const cartTotalElement = document.getElementById('cartTotal');
            if (!cartTotalElement) {
                console.error('Cart total element not found.');
                return;
            }
    
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            cartTotalElement.textContent = `合計: ￥${total.toFixed(0)}`;
        }
    
        updateCartIcon();
        updateLikeIcon(); // いいねアイコンのカウントを初期表示
    
        window.addEventListener('storage', updateCartIcon);
        window.addEventListener('storage', updateLikeIcon);
    
        $(document).on('click', '.checkout-btn', function(event) {
            if (cart.length === 0) {
                event.preventDefault();
                alert('カートが空です。商品を追加してください。');
                return;
            }
            event.preventDefault();  // デフォルトのリンク動作を防止
            var goTo = this.getAttribute("href"); // リンク先のURLを取得
    
            $(this).addClass('fade-out-btn'); // ボタンにアニメーションのクラスを追加
    
            setTimeout(function() {
                window.location = goTo; // 指定時間後にページ遷移
            }, 500); // アニメーションの時間（500ミリ秒）
        });
    
        $(document).ready(function() {
            // 商品リンクにクリックイベントを設定
            $('body').on('click', '.products a, .item-products a', function(event) {
                event.preventDefault();  // デフォルトのリンク動作を防止
                var goTo = this.getAttribute("href"); // リンク先のURLを取得
    
                $('body').addClass('fade-out'); // bodyタグにfade-outクラスを追加
    
                setTimeout(function() {
                    window.location = goTo; // 指定時間後にページ遷移
                }, 500); // アニメーションの時間（500ミリ秒）
            });
    
            // 他のリンクにもアニメーションを適用する例
            $('.nav-link, #cart-icon-link, .logo').on('click', function(event) {
                event.preventDefault();
                var goTo = this.getAttribute("href");
                $('body').addClass('fade-out');
                setTimeout(function() {
                    window.location = goTo;
                }, 500);
            });
        });
    }
    