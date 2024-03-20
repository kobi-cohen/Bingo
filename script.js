//amount of numbers already was out
const infoDiv = document.querySelector('.info')
//div container of balls
const ballsList = document.querySelector('.ballsList')

const circleBall = document.createElement('div')
const ball = document.createElement('div')
const btn = document.querySelector('.rollBtn')
const btnAutomatic = document.querySelector('#btnAutomatic')
const centered = document.querySelector('.centered')
circleBall.classList.add('circleBall')
ball.classList.add('circleBall','ball')



const list = []

//generate random number between 1 to "Range" , push to list and return it
const generateRandomNumber = (range)=>{
const randomNum = Math.floor(Math.random()*range)+1
if (list.indexOf(randomNum)==-1){
    list.push(randomNum)
}
else  
    generateRandomNumber(range)

return randomNum

}

//sort all list array
const sortedList = list.sort((a,b)=>a-b)
    console.log(sortedList)



//draw sorted list of number already raized

const drawTheList = ()=>{
ballsList.textContent=''
const sortList = [...list].sort((a,b)=>a-b)
sortList.forEach(item => {
    const ball = document.createElement('div')
    circleBall.classList.add('circleBall')
    ball.classList.add('circleBall','ball')
    ball.textContent=item
    ballsList.appendChild(ball)
    
});

}

//play sound of the number that raized
const sayIt = number =>{
const s = soundList.find(item=>item.name == number)
console.log(number)
if (s == undefined){ return }
const sound = new Audio('./Sounds/'+s.source)
sound.play()
}


//play sound before the number
const sayBefore = () =>{
const sound = new Audio('./Sounds/THE NEXT NUMBER.mp3')
sound.play()
setTimeout(()=>{
    sayIt(list[list.length-1])
},1500)
}

//main function run all sub functions
const callNumber = ()=>{
if(list.length<75){
const randomNumber = generateRandomNumber(75)
sayBefore()
circleBall.textContent=list[list.length-1]
centered.appendChild(circleBall)
drawTheList()
infoDiv.textContent=`${list.length}  : מספר כדורים שהוגרלו  `
console.log(list)
if (list.length>=24){
checkWinning()
}
}
else
alert('הוצאו כל הכדורים')

}

//button click event - run the main function 
btn.addEventListener('click',()=>{
callNumber()
})


//choose automatic number every 15 seconds
btnAutomatic.addEventListener('click',()=>{
console.log('automatic CALLING')
})


//check winning card
let alert24 = false
const checkWinning = () =>{
    
        playingCards.map(card=>{
            console.log('checking card number' +card.cardNumber)
            let counter = 0
            card.numbers.forEach(number=>{
                console.log('check if the number '+ number + 'exist in the list')
                if (list.indexOf(number)!=-1){    
                    counter++
                }
                if ((counter==24) && (alert24==false)){
                    alert24=true
                    alert('one more for winning '+ card.cardNumber)
                    
                }
                
                if (counter==25){
                    alert('card number : '+card.cardNumber + ' is the winner  | card numbers : ['+ card.numbers+']' )
                    
                }
            })
        })
    
}