document.addEventListener("DOMContentLoaded", function () {
    const checkoutItemsElement = document.getElementById('checkoutItems');
    const checkoutTotalElement = document.getElementById('checkoutTotal');
    const purchaseButton = document.getElementById('purchaseButton');
    const orderSummaryElement = document.getElementById('orderSummary');

    // カート内のアイテムを取得
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // チェックアウトアイテムをレンダリングする関数
    function renderCheckoutItems() {
        checkoutItemsElement.innerHTML = cart
            .map(
                (item) => `
                    <div class="checkout-item">
                        <img src="${item.image}" alt="${item.title}" />
                        <div class="checkout-item-info">
                            <h2 class="checkout-item-title">${item.title}</h2>
                            <p>Size: ${item.size}</p>
                            <p>Quantity: ${item.quantity}</p>
                            <p>Price: ￥${item.price}</p>
                        </div>
                    </div>
                `
            )
            .join("");
    }

    // 合計金額を計算する関数
    function calculateTotal() {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        checkoutTotalElement.textContent = `Total: ￥${total.toFixed(0)}`;
    }

    // 注文概要を表示する関数
    function displayOrderSummary() {
        orderSummaryElement.innerHTML = cart.map((item) => {
            return `
                <div class="order-summary-item">
                    <h3>${item.title}</h3>
                    <p>数量: ${item.quantity}</p>
                    <p>価格: ￥${item.price}</p>
                </div>
            `;
        }).join("");
    }

     // 初期レンダリング
     renderCheckoutItems();
     calculateTotal();
     displayOrderSummary();

    // 購入ボタンの機能（必要に応じてロジックを追加）
    if (purchaseButton) {
        purchaseButton.addEventListener('click', function () {
            const lastName = document.getElementById('lastName').value;
            const firstName = document.getElementById('firstName').value;
            const lastNameKana = document.getElementById('lastNameKana').value;
            const firstNameKana = document.getElementById('firstNameKana').value;
            const postalCode = document.getElementById('postalCode').value;
            const prefecture = document.getElementById('prefecture').value;
            const city = document.getElementById('city').value;
            const address = document.getElementById('address').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const email = document.getElementById('email').value;
            const confirmEmail = document.getElementById('confirmEmail').value;

            if (
                !lastName ||
                !firstName ||
                !lastNameKana ||
                !firstNameKana ||
                !postalCode ||
                !prefecture ||
                !city ||
                !address ||
                !phoneNumber ||
                !email ||
                !confirmEmail
            ) {
                alert('全ての必須項目を入力してください');
                return;
            }

            // ロジックを追加

            // カートを空にする
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));

            // 別のページにリダイレクトする
            window.location.href = "thankyou.html";
        });
    }
});

// フォーム間の移動
function proceedToStep2() {
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const lastNameKana = document.getElementById('lastNameKana').value;
    const firstNameKana = document.getElementById('firstNameKana').value;
    const postalCode = document.getElementById('postalCode').value;
    const prefecture = document.getElementById('prefecture').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;

    if (
        !lastName ||
        !firstName ||
        !lastNameKana ||
        !firstNameKana ||
        !postalCode ||
        !prefecture ||
        !city ||
        !address ||
        !phoneNumber ||
        !email ||
        !confirmEmail
    ) {
        alert('全ての必須項目を入力してください');
        return;
    }

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function proceedToStep3() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function placeOrder() {
    alert('ご注文ありがとうございます。商品の注文が確定しました。');
      // カートを空にする
      localStorage.removeItem('cart');

     // ページを thank you ページにリダイレクト
     window.location.href = "thankyou.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const orderSummaryElement = document.getElementById('orderSummary');

    // カート内の商品情報を取得
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 注文の概要を表示する関数
    function displayOrderSummary() {
        orderSummaryElement.innerHTML = cart.map((item) => {
            return `
                <div class="order-summary-item">
                    <h3>${item.title}</h3>
                    <p>数量: ${item.quantity}</p>
                    <p>価格: ￥${item.price}</p>
                </div>
            `;
        }).join("");

    }

    // 注文の概要を表示
    displayOrderSummary();
});
