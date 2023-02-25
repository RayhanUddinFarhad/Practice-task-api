const loadCountry = (region) => {

  const url = `https://restcountries.com/v3.1/subregion/${region}`

  fetch (url)
  .then (response => response.json())
  .then (data => showCountry(data))




}


const showCountry = (country) => {

  const container = document.getElementById ('container')
  container.innerHTML = '';



  country.map(countrys => {



    const div = document.createElement ('div')

    div.innerHTML = `


    <div class="card w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src="${countrys.flags.png}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
    ${countrys.name.common}

     
      <div class="badge badge-secondary">${countrys.subregion}</div>
    </h2>
    <p>Population : <span class= "btn-secondary p-1 rounded-md"> ${countrys.population} </span></p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">${countrys.capital[0]}</div> 
    </div>
  </div>
</div>
    
    
    
    
    `


    container.appendChild (div)




    
  })




 }


const handclick = (get) => {

 const getValue = document.getElementById('region-container').value;

  loadCountry (getValue)








}


// const regionLoad = () => { 




//   const url = 'https://restcountries.com/v3.1/all'
//   fetch (url)
//   .then (response => response.json())
//   .then (data => regionDisplay(data))



// }

// const regionDisplay= (names) => {


//   const  container = document.getElementById ('region-container')


//   names.map (name => {
//     console.log (name.region)



//     const option = document.createElement('option');
//     option.textContent = name.region;
//     container.appendChild(option);



//   })







//  }












loadCountry ('asia')

