const bagelInfo = {title:'This is the best bagel app', like_count:22, image: 'https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}

const bagelImage = document.getElementById('bagel-image')
bagelImage.src = bagelInfo.image

const bagelTitle = document.getElementById('title')
bagelTitle.innerText = bagelInfo.title

const bagelLikes = document.getElementById('like-count')
bagelLikes.innerHTML = bagelInfo.like_count

const likeButton = document.getElementById('like-button')
likeButton.addEventListener("click", (event)=> bagelLikes.innerHTML++)

function incrementLikes(){
 
//     event.preventDefault
//     bagelLikes.textContent = parseint(bagelLikes.textContent +1)
}
// const bagelTitle = document.getElementById('title')
// bagelTitle.innerText = bagelInfo.title

// const bagelImage = document.getElementById('image')
// bagelImage.src = bagelInfo.image
// const likeCount = document.getElementById('like-count')
// likeCount.innerText = bagelInfo.like_count
const bagelURL = 'http://bagel-api-fis.herokuapp.com/bagels'

fetch(bagelURL)
    .then(response => response.json())
    .then(result => displayBagels(result))

function displayBagels(bagels){
    bagels.forEach(bagel => {displayBagel(bagel)
    })
}

function displayBagel(bagel){
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    h1.textContent = bagel.type
    p.textContent = bagel.rating
    div.append(h1, p)
    document.body.append(div)
}

const newBagelForm = document.getElementById('create-bagel')
newBagelForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const type = formData.get('type')
    const rating = formData.get('rating')
    const bagel = {type, rating}
    displayBagel(bagel)
})
