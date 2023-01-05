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
            <p class='info-item'><span class='info-titel'>Likes: </span><span class='info-value'>${hits.likes}</span></p>
            <p class='info-item'><span class='info-titel'>Views: </span><span class='info-value'>${hits.views}</span></p>
            <p class='info-item'><span class='info-titel'>Comments: </span><span class='info-value'>${hits.comments}</span></p>
            <p class='info-item'><span class='info-titel'>Downloads: </span><span class='info-value'>${hits.downloads}</span></p>
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