const card = document.body.querySelector(".card")
const form = document.forms.for

const validity = document.createElement("div")
const Namesur = document.createElement("div")
const space = document.createElement("div")

const table = document.querySelector("table")
const bigtr = document.createElement("tr")
bigtr.className = "bigtr"
table.append(bigtr)


form.addEventListener("submit", e=>{
    e.preventDefault()
    document.querySelector(".card").innerHTML = ''
    validity.innerText = ''
    Namesur.innerText = ''
    const bigtr = document.createElement("tr")
    bigtr.className = "bigtr"
    table.append(bigtr)
    for(let i = 0;i<form.elements.length;i++){
        let el = form.elements[i]
        
        if(el.value){
        const tbank = document.createElement("td")
        tbank.className = "tbank"
        tbank.style.border = "1px solid black"
        tbank.style.textAlign = "center"

        const tpaysys = document.createElement("td")
        tpaysys.className = "tpaysys"
        tpaysys.style.border = "1px solid black"
        tpaysys.style.textAlign = "center"

        const tcard = document.createElement("td")
        tcard.className = "tcard"
        tcard.style.border = "1px solid black"
        tcard.style.textAlign = "center"

        const tname = document.createElement("td")
        tname.className = "tname"
        tname.style.border = "1px solid black"
        tname.style.textAlign = "center"
        
        const tsurname = document.createElement("td")
        tsurname.className = "tsurname"
        tsurname.style.border = "1px solid black"
        tsurname.style.textAlign = "center"

        const texpdate = document.createElement("td")
        texpdate.className = "texpdate"
        texpdate.style.border = "1px solid black"
        texpdate.style.textAlign = "center"

        const tcvv = document.createElement("td")
        tcvv.className = "tcvv"
        tcvv.style.border = "1px solid black"
        tcvv.style.textAlign = "center"

            switch(el.name){
            case "bnk":
            card.innerHTML += `<div style="font-size: 25px">${el.value}</div>`
            tbank.innerText += `${el.value}`
            bigtr.append(tbank)
            break
            case "dig":
            card.innerHTML += `<div style="margin-top:10px; font-size: 30px">${el.value}</div>`
            tcard.innerText += `${el.value}`
            bigtr.append(tcard)
            card.append(Namesur)
            Namesur.style.display = "flex"
            break
            case "s":
            Namesur.innerHTML += `<div class="namesurname"style="font-size: 25px">${el.value}</div>`
            tsurname.innerText += `${el.value}`
            bigtr.append(tsurname)
            break
            case "n":
            Namesur.innerHTML += `<div class="namename"style="font-size: 25px">${el.value}</div>`
            validity.className = "validity"
            tname.innerText += `${el.value}`
            bigtr.append(tname)
            card.append(validity)
            break
            case "vm":
            card.innerHTML += `<div>${el.value}</div>`
            tpaysys.innerHTML += `${el.value}`
            bigtr.append(tpaysys)
            break
            case "vl1":
            validity.innerHTML += `<div>${el.value}</div>`
            const span = document.createElement("span")
            span.innerText = "/"
            validity.append(span)
            break
            case "vl2":
            validity.innerHTML += `<div>${el.value}</div>`
            texpdate.innerText += validity.innerText
            bigtr.append(texpdate)
            break
            case "cvv":
            card.innerHTML += `<div>CVV-${el.value}</div>`
            tcvv.innerText += `${el.value}`
            bigtr.append(tcvv)
            break
            }
    }
}
})
form.addEventListener("reset",e =>{
    document.querySelector(".card").innerHTML = ''
})