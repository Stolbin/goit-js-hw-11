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
            <p class='info-item'>Likes: ${hits.likes}</p>
            <p class='info-item'>Views: ${hits.views}</p>
            <p class='info-item'>Comments: ${hits.comments}</p>
            <p class='info-item'>Downloads: ${hits.downloads}</p>
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