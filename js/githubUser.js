const loadUser = (name) => {

    const url = `https://api.github.com/users/${name}`
    fetch (url)
    .then (response => response.json())
    .then (data => displayUser(data))




}



const displayUser = (user) => {
    console.log (user.bio)


    const name = document.getElementById ('name')
    const nickname = document.getElementById ('nickname')
    const bio = document.getElementById ('bio')
    const repos = document.getElementById ('repos')
    const followers = document.getElementById ('follower')
    const following = document.getElementById ('following');
    const address = document.getElementById ('address')

    name.innerText = user.login;
    nickname.innerText = user.name
    repos.innerText = user.public_repos;
    followers.innerText =user.followers;
    following.innerText = user.following;
    bio.innerText = user.bio;
    address.innerText = user.location



    fetch (user.followers_url)
    .then (response => response.json())
    .then (data => displayFollowers (data.slice (0, 3)))

   


 





}

document.getElementById ('btn').addEventListener ('click', function () {

    const input = document.getElementById ('input').value;

    loadUser (input)

    



})


const displayFollowers = (follower) => {


    const followrContainer = document.getElementById ('follower-container')
    const follower1 = document.getElementById ('follower-1')
    const follower2 = document.getElementById ('follower-2')


    follower.map (picture => {
        console.log (picture.avatar_url)

       followrContainer.innerHTML = `
       
       <div class="avatar">
                      <div  class="w-12">

                      <img class="w-36" src="${picture.avatar_url}" alt="">

                      </div>
                     
                    </div>
                    <div class="avatar">
                        <div id="follower-2" class="w-12">

                        <img class="w-36" src="${picture.avatar_url}" alt="">

                        </div>
                        
                     
                    </div>
       `
        


        
    })



}







loadUser('Rayhan')