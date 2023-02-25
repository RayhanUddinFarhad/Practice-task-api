const getAdvice = () => {



    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
    .then (response => response.json())
    .then (data => showAdvice(data.slip))
    
}


const showAdvice = (advice) => { 
    console.log ()



    const id = document.getElementById ('id')
    id.innerText = advice.id;

    const adviceText = document.getElementById ('advice')

    adviceText.innerText = ` 
    "${advice.advice}"
    
    `






}

getAdvice ()