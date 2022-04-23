//평균 함수
function calculateAvg(price1, price2) {
    const sum = price1 + price2
    console.log(`두 상품의 총 합은 ${sum}입니다.`)
    const avg = sum/2
    return avg
  }

const priceA = 1000
const priceB = 2000
const avg1 = calculateAvg(priceA,priceB)
    console.log(`A와 B의 평균은${avg1}입니다.`)


const priceC = 2000
const priceD = 3000
const avg2 = calculateAvg(priceC,priceD)
    console.log(`C와 D의 평균은 ${avg2}입니다.`)


//문제 3개의 물건가격을 매개변수로 전달받아 평균값을 리턴하는 함수를 정의하고 그 함수를 호출해서 평균값을 출력해보세요.

function calculateAvg(a , b , c ) {
    const sum = a+b+c 
    console.log(`세 상품값 총합은 ${sum}입니다.`)
    const avg4 =sum/3
    return avg4
}

    const a = 1000
    const b = 2000
    const c = 3000
    const avg5 = calculateAvg(a,b,c)
    console.log(`세 상품의 평균은 ${avg5}입니다.`)