function showClock() {

    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let part =  'AM'


    h == 0 ? h = 12 : h
    
    h > 12 ? h = h - 12 : h

    

    h < 10 ? h = '0'+h : h
    m < 10 ? m = '0'+m : m
    s < 10 ? s = '0'+s : s


    let exactTime = `${h} : ${m} : ${s} ${part}`
    
    
    
    let myDiv = document.querySelector('#date-div')
    myDiv.textContent = exactTime

    setTimeout(showClock, 1000)

}

showClock()