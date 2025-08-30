
// id
// let h1 = document.getElementById("head")
// // h1.innerText = 'jai shree ram'
// // h1.innertext="jai shree ram"
// h1.innerHTML = 'hello <br><button>click me</button>'
// h1.className = 'red'
// h1.style.backgroundColor = "gray"
// h1.remove();

// console.log(h1);

// class
// let h1 = document.getElementsByClassName("head")
// // h1[0].className="head red"
// // h1[1].className="head red"

// for (const element of h1) {
//     element.className = "head red"
// }
// console.log(h1);

// by element/tag
// let headings = document.getElementsByTagName("h1")

// headings[0].className="h1 red"
// headings[1].className="h1 red"
// headings[2].className="h1 red"

// for (const element of headings) {
//     element.className = "h1 red"
// }

// console.log(headings);

// querySelector
// let quary = document.querySelector(".head")
// quary.className = "red"
// console.log(quary);


// create element
// let root = document.getElementById("root")
// let div = document.createElement('div')
// div.innerHTML = '<h1>hello world</h1>'
// div.innerText = ""
// div.className = "red"
// console.log(div);
// root.appendChild(div)

// project dom
// class Country {
//     countries = []
//     getCountries = async () => {
//         const response = await fetch("https://restcountries.com/v3.1/independent?status=true")
//         // let data = await response.json()
//         this.countries = await response.json()
//     }
//     render = async () => {
//         await this.getCountries()

//         const root = document.getElementById("root")
//         for (const element of this.countries) {
//             // console.log(element);
//             let rootDiv = document.createElement('div')
//             rootDiv.className = 'col-sm-2 my-2'
//             root.append(rootDiv)

//             let card = document.createElement("div")
//             card.className = "card"
//             rootDiv.append(card)
//             console.log(rootDiv);

//             let img = document.createElement("img")
//             img.className = ("card-img-top w-100 h-50")
//             img.src = element.flags.svg
//             card.append(img)


//             let cardBody = document.createElement("div")
//             cardBody.classList = "card-body"
//             card.append(cardBody)


//             let h2 = document.createElement("h3")
//             h2.className = "text-danger"
//             h2.innerText = element.name.common
//             cardBody.append(h2)
//             console.log(rootDiv);
//         }
//     }
// }

// let country = new Country()
// country.render()
// console.log(country.countries);


// traversion
// let heading = document.getElementById('heading')
// let array = heading.parentElement.parentElement
// console.log(array);

// children
let list = document.getElementById("list")
console.log(list.childNodes);
console.log(list.children);



// console.log(heading.parentNode);












