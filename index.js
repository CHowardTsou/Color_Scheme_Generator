const seedColorEl = document.getElementById('seed-color')
const modeSelectEl = document.getElementById('mode-select')
const displayColorEl = document.getElementById('display-color')


document.getElementById('btn-get').addEventListener('click', function(){
    // get rid of # from hex color e.q. #FFFFFF to FFFFFF
    let seedColor = seedColorEl.value.slice(1)
    
    // fetch color api
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${modeSelectEl.value}`)
    .then(res => res.json())
    .then(data => {
        let colorsObject = data.colors
        
        // render color from api to html
        for(let i = 0 ; i < colorsObject.length; i++){
            document.getElementById(`sec${i+1}`).style.backgroundColor = colorsObject[i].hex.value
            document.getElementById(`hex${i+1}`).textContent = colorsObject[i].hex.value
        }
    })
    
})

