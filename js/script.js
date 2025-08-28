function getElement(id){
    const element = document.getElementById(id)
    return element;
}
//  Heart Icons
let count = 0;
const heartCount = getElement('heart-count');
// console.log(heartCount);

const hearts = document.getElementsByClassName('heart')
for(const heart of hearts){
    heart.addEventListener('click',function(){
        //console.log(heart);
        count++;
        heartCount.innerText = count;
    })
}

//copy button 
let copy = 0;
const copyCount = getElement('copy-count');
const copyButtons = document.getElementsByClassName('copy-btn')
for(const copyButton of copyButtons){
    copyButton.addEventListener('click',function(event){
        copy++;
        copyCount.innerText = copy;
        const hotline = event.target.parentNode.parentNode.children[2].innerText;
          navigator.clipboard.writeText(hotline);
          alert(`${hotline} Copied`)
    })
}

// Call Buttons   
let coin = 100;
const callBtns = document.getElementsByClassName('call-btn')
const coinCount = getElement('coin-count')
const callHistory = getElement('call-history')
const clearButton = getElement('clear-button')

for(let callButton of callBtns){
    callButton.addEventListener('click',function(){
        const serviceName = callButton.parentNode.parentNode.children[1].innerText
        const number = callButton.parentNode.parentNode.children[2].innerText       
        if(coin<20){
            alert('To make call you need at least 20 coins')
        }
        else{
            alert(`Calling ${serviceName} ${number}`)
            coin-=20;
            coinCount.innerText = coin;
            const time = new Date().toLocaleTimeString();
            const div = document.createElement('div')
            div.innerHTML=`<div class="flex justify-between items-center p-3 mb-3 rounded-xl bg-[#f3f2f2]">
                        <div>
                        <h2 class="font-semibold">${serviceName}</h2>
                        <p class="text-[#5C5C5C]">${number}</p>
                        </div>
                        <div>
                        <p>${time}</p>
                        <div>
                        </div> `
          callHistory.appendChild(div)
          return;
        }  
    }) 
}
 clearButton.addEventListener('click',function(){
            callHistory.innerHTML=" ";
        })


