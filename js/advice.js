const getAdvice = (query) => {



    const url = `https://api.adviceslip.com/advice/search/${query}`
    fetch(url)
    .then (response => response.json())
    .then (data => showAdvice(data))
    
}


const showAdvice = (advice) => { 



    const id = document.getElementById ('id')
    id.innerText = advice.slips[0].id;

    const adviceText = document.getElementById ('advice')

    adviceText.innerText = ` 
    "${advice.slips[0].advice}"
    
    `






}


const resultByQuery = () => {

    const value = document.getElementById ('search-advice').value;

    getAdvice (value)







 }

getAdvice ()