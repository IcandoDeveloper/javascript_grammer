class Notebook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}

const notebook1 = new Notebook('Mackbook', 2000000, 'Apple' )


console.log(notebook1)
console.log(notebook1.name)
console.log(notebook1.price)
console.log(notebook1.company)


class Product {
    constructor (name , price) {
    this.name = name
    this.price =price
}

printInfo(){
    console.log(`name : ${this.name} , price : ${this.price}`)
 }
}
const notebook = new Product('Mackbook', 2000000)
notebook.printInfo()


// 객체 리터럴
// const 변수명 = {
//     속성명 : 데이터,
//     메소드명: function() {메소드 호출시 실행할 코드들}
// }

const computer = {
    name : 'Mackbook',
    price : 2000000,
    printInfor : function() {
        console.log(`name : ${this.name}, price : ${this.price}원`)
    }
}

computer.printInfor()


//문제 여러분만의 의류 쇼핑몰을 만들려고 합니다. 옷의 종류는 많지만 기본적으로 색깔, 사이즈, 가격의 속성을 갖고 있네요. 그리고 이 옷들의 세 속성을 바로 확인할 수 있게 출력해주는 메소드가 필요할 거 같습니다. 클래스와 객체를 활용해 작성해보아요.

class Cloth {
    constructor (color, size, price){
        this.color = color
        this.size - size
        this.price = price
 }
    printInfo(){
        console.log(`color : ${this.color}, size : ${this.size}, price${this.price}`)
    }
}

const coat = new Cloth('navy', 'L', 200000)
const pants = new Cloth('black', 'M', 100000)

coat.printInfo()
pants.printInfo()