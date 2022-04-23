//백틱${}사용법
// const shoesPrice = 20000
// console.log('이 신발의 가격은'+shoesPrice+'원입니다.')
// console.log(`이 신발의 가격은 ${shoesPrice}원입니다`)

//사칙연산
// console.log(2+1)
// console.log(2-1)
// console.log(2*3)
// console.log(4/3)
// console.log(10%3)
// console.log(10**2)

//카운트
// let count = 1
// const preCount = ++count

// console.log(`count: ${count}, preCount: ${preCount}`)


// let count = 1
// const postCount = count++

// console.log(`count: ${count}, postCount: ${postCount}`)

//합차
// const shirtsPrice = 100000
// const shoesPrice = 80000
// let totalPrice = 0

// totalPrice += shirtsPrice
// console.log(totalPrice)

// totalPrice += shoesPrice
// console.log(totalPrice)

// totalPrice -= shirtsPrice
// console.log(totalPrice)

//비교연산자
// console.log(1 < 2)
// console.log(1 <= 2)
// console.log(1 > 2)
// console.log(1 >= 2)


//true&false
// let isOnSale = true
// let isDiscountItem = true

// console.log(isOnSale && isDiscountItem)
// console.log(isOnSale || isDiscountItem)

// isOnSale = false
// console.log(isOnSale && isDiscountItem)
// console.log(isOnSale || isDiscountItem)

// isDiscountItem = false
// console.log(isOnSale && isDiscountItem)
// console.log(isOnSale || isDiscountItem)

// console.log(!isDiscountItem)


//문제 a+b의 최종 합과 그합이 20% 할인된 가격은 얼마인가?
// const a = 10000
// const b = 20000
// const tP =a+b

// console.log(a+b)
// console.log(`총 ${tP *0.8} 원에 물건을 구입합니다.`)



//조건문 (if 구문)
// const shoesPrice = 40000
// if (shoesPrice < 50000) {
//     console.log('이 신발을 사겠습니다.')
// }

// const capPrice = 5000
// if (capPrice > 5000) {
//     console.log('이 모자를 사겠습니다.')
// }


//조건문 (else)
// const a =50000
//  if(a < 40000) {
//     console.log('이 신발을 사겠습니다')
//     } else {
//     console.log('너무 비싸요')
// }


// //조건문 (else if)
// const b =50000
// if(b < 50000) {
//     console.log('이 신발 사겠습니다.')
// }else if (b <=50000) {
//     console.log('고민해볼게요')
// } else{
//     console.log('너무 비싸요, 신발을 사지 않겠습니다')
// }

//문제 거리변수 선언하고 숫자를 할당 2km미만이면 걸어가자 2km이상이고 5km미만이면 택시를타자 그외에는 기차를타자 출력
const a =2
if(a < 2){
    console.log('걸어가자')
} else if (2 <=a < 5 ) {
    console.log('택시를타자')
} else {
    console.log('기차를 타자')
}
