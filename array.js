//배열
// const arr = [1, 2, 3, 4, 5 ]
// console.log(arr)

const rainbowColors = ['red', 'orange', 'yellow','green','blue','indigo','violet']

console.log(rainbowColors[0])
console.log(rainbowColors[1])
console.log(rainbowColors[2])
console.log(rainbowColors[3])
console.log(rainbowColors[4])
console.log(rainbowColors[5])
console.log(rainbowColors[6])

console.log(rainbowColors.length)
console.log(rainbowColors.length-1) //배열의 마지막요소는 항상 length에서 -1 빼면 됨
console.log(rainbowColors[rainbowColors.length-1])


//요소 추가와 삭제  push() & pop()
let rainbowColors2 = ['red', 'orange', 'yellow','green','blue','indigo','violet']

rainbowColors2.push('ultraviolet') // 마지막에 ultarviolet추가
console.log(rainbowColors2) // ultraviolet이 추가된 rainbowClors 출력

rainbowColors2.pop() //배열의 마지막 요소 ultraviolet을 제거
console.log(rainbowColors2)  //ultraviolet이 제거된 rainbowColors출력



// 배열과 반복문
let rainbowColors3 = ['red', 'orange', 'yellow','green','blue','indigo','violet']

for (let i = 0; i<rainbowColors3.length; i++) {
    console.log(rainbowColors3[i])
}


//배열과함께 자주 쓰이는 for문

let rainbowColors4 = ['red', 'orange', 'yellow','green','blue','indigo','violet']

for (const color of rainbowColors) {
    console.log(color)
}

//문제 열 개의 상품 가격 데이터를 갖고 있는 배열을 만듭니다. 반복문을 활용해 상품들의 가격 합계와 평균을 구해보아요.

const number = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for( const num of number ) {
 sum += num
}

const avg = sum/number.length
console.log(`합계 : ${sum}, 평균 : ${avg} `)


