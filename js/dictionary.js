const loadData = (word) => {


    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch (url)

    .then (response => response.json())
    .then (data => showData(data[0]))
}


const showData = (data) => { 
    console.log (data.phonetics[0].audio)


    const word = document.getElementById ('word');

    word.innerText = data.word;

    const text = document.getElementById ('text');
    text.innerText =  data.phonetic;

    const partOfSpeech = document.getElementById ('part_of_speech'); 
    partOfSpeech.innerText = data.meanings[0].partOfSpeech;

    const definition1 = document.getElementById ('definition-1')
    definition1.innerText = data.meanings[0].definitions[0].definition;
    const definition2 = document.getElementById ('definition-2')
    definition2.innerText = data.meanings[0].definitions[1].definition;
    const Synonyms = document.getElementById ('Synonyms');
    Synonyms.innerText = data.meanings[0].synonyms[0];

    const sound = document.getElementById ('sound')
    sound.innerHTML = `

    <source src="${data.phonetics[0].audio}">

    
    
    `


    





}








const resultBySearch = (getValue) => {

    const values = document.getElementById('search').value;

    loadData (values)





    




}
