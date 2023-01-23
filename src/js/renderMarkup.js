import { getRefs } from "./refs";

const refs = getRefs();

function createImageElement(hits) {
    return hits
    .map(
        (hits) => 
        `<div class='photo-card'>
        <a
        href=${hits.largeImageURL}>
        <img
        src=${hits.webformatURL} 
        alt=${hits.tags} 
        loading='lazy' 
        width='300px' 
        height='200px'
        />
        </a>
            <div class='info'>
            <p class='info__item'><span class='info__titel'>Likes: </span><span class='info__value'>${hits.likes}</span></p>
            <p class='info__item'><span class='info__titel'>Views: </span><span class='info__value'>${hits.views}</span></p>
            <p class='info__item'><span class='info__titel'>Comments: </span><span class='info__value'>${hits.comments}</span></p>
            <p class='info__item'><span class='info__titel'>Downloads: </span><span class='info__value'>${hits.downloads}</span></p>
            </div>
        </div>`
      )
      .join("");
    }
    
    function renderMarkup(hits) {
        refs.imagsBox.insertAdjacentHTML("beforeend", createImageElement(hits));
        }
        
        function clear() {
            refs.imagsBox.innerHTML = "";
        }
        
export { renderMarkup, clear };