`## 6. 장바구니 뒤바뀜 문제

&nbsp;

아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.`


function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;

const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);


`1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요? // A카트와 B카트 둘 모두에게 쿠폰이 적용되어 있을 것 같습니다.

2.	1번의 결과에 대한 이유를 설명해보세요. // 23번 줄 코드에서 B카트는 A카트와 같다고 해 놓았는데 이때 객체에서는 하나의 값을 복사하여 하는 것이 아닌 객체 안의 값이 들어있는
                                        // 주소값을 복사하여 사용하는 것이기 때문에 B카트 수정 시 주소값 안의 값들이 변경되어 주소값을 공유하고 있는 A카트 역시 바뀔 것 같다 생각하였기 때문입니다.

3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요? // 23번 코드의 B카트를 A카트와 같은 값을 가지도록 복사할 때에 코드 assign을 사용하여 복사하면 될 것 같습니다.
`