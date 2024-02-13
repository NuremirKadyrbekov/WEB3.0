let main = document.createElement('div')
let background= document.createElement('div')

let BlockGroup = document.createElement('div')
BlockGroup.className='BlockGroup'


main.className = 'main'

// main.innerHTML = 'Hello World!'
document.body.append(main)


let block1 = document.createElement("div")
block1.className = 'block1'
let block2 = document.createElement("div")
block2.className = 'block2'

let block3 = document.createElement("div")
let block4 = document.createElement("div")
let block5 = document.createElement("div")
let block6 = document.createElement("div")
let block7 = document.createElement("div")
let block8 = document.createElement("div")





let icon1 = document.createElement('img')
icon1.src='./icon1.png'
icon1.className = 'icon1'


let text1  = document.createElement('h1')
text1.innerHTML = 'PRICING'

let discription1  = document.createElement('p')
discription1.innerHTML= 'sample text. this is my first block at the name of block1'

let more1 = document.createElement('a')
more1.innerHTML = 'LEARN MORE'
more1.href= '   '

block1.append(icon1)
block1.append(text1)
block1.append(discription1)
block1.append(more1)


let icon2 = document.createElement('img')
icon1.src='./icon1.png'
icon1.className = 'icon1'


let text2  = document.createElement('h1')
text2.innerHTML = 'PRICING'

let discription2  = document.createElement('p')
discription2.innerHTML= 'sample text. this is my first block at the name of block1'

let more2 = document.createElement('a')
more2.innerHTML = 'LEARN MORE'
more2.href= '   '

block2.append(icon2)
block2.append(text2)
block2.append(discription2)
block2.append(more2)``



main.append(BlockGroup)
BlockGroup.append(block1)
BlockGroup.append(block2)
