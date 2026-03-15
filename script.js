function cleanNumber(value){
return value.replace(/\./g,"")
}

function getNumber(value){
if(!value) return 0
return parseInt(cleanNumber(value)) || 0
}

function formatNumber(num){
return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
}

function calculate(){

let eTotal = 0
let nTotal = 0
let sTotal = 0

document.querySelectorAll(".essential").forEach(i=>{
eTotal += getNumber(i.value)
})

document.querySelectorAll(".non").forEach(i=>{
nTotal += getNumber(i.value)
})

document.querySelectorAll(".save").forEach(i=>{
sTotal += getNumber(i.value)
})

document.getElementById("essentialTotal").innerText = formatNumber(eTotal)
document.getElementById("nonTotal").innerText = formatNumber(nTotal)
document.getElementById("saveTotal").innerText = formatNumber(sTotal)

updateStatus(eTotal,nTotal,sTotal)
}

function updateStatus(eTotal,nTotal,sTotal){

let eBudget = getNumber(document.getElementById("essentialBudget").value)
let nBudget = getNumber(document.getElementById("nonBudget").value)
let sBudget = getNumber(document.getElementById("saveBudget").value)

document.getElementById("essentialStatus").innerText = getStatus(eTotal,eBudget)
document.getElementById("nonStatus").innerText = getStatus(nTotal,nBudget)
document.getElementById("saveStatus").innerText = getStatus(sTotal,sBudget)

generateAdvice(
getStatus(eTotal,eBudget),
getStatus(nTotal,nBudget),
getStatus(sTotal,sBudget)
)

}

function getStatus(total,budget){

if(budget === 0) return "-"

if(total > budget) return "Over Budget"

if(total > budget * 0.85) return "Tight Budget"

return "Under Budget"
}

function generateAdvice(e,n,s){

let box = document.getElementById("advice")

box.innerHTML = `

<b>Essential Expenses</b><br>
Status: ${e}<br>
Solutions / Recommendations:<br>
• Reduce unnecessary household bills.<br>
• Plan groceries weekly.<br>
• Compare service prices.<br><br>

<b>Non Essential Expenses</b><br>
Status: ${n}<br>
Solutions / Recommendations:<br>
• Reduce entertainment spending.<br>
• Avoid impulse buying.<br>
• Set a weekly spending limit.<br><br>

<b>Savings</b><br>
Status: ${s}<br>
Recommendations:<br>
• Try saving at least 20% of income.<br>
• Build an emergency fund.<br>
• Set long-term financial goals.

`
}

document.querySelectorAll("input").forEach(i=>{
i.addEventListener("input",calculate)
})

function newMonth(){

let month = prompt("Enter new month")

if(!month) return

let select = document.getElementById("monthSelect")

let option = document.createElement("option")
option.text = month
option.value = month

select.appendChild(option)

select.value = month
}
