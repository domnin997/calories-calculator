import setEaten from "./setCaloryTarget.js";

function createElement (product) {
        
    const newRow = document.createElement('tr');

    for (let key in product) {
        if (key !== 'id') {
            let newTb = document.createElement('tb');
                newTb.innerText = product[key];
                    newRow.append(newTb);
        }  
    }
  
    const delIcon = document.createElement('tb');
          delIcon.classList.add('del-icon-tb');
          delIcon.innerHTML = `
          <div class="delete-icon-container">
            <svg class="delete-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20"
                    viewBox="0 0 20 20"
                    fill="none">

                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
                </svg>
            </div> `

    newRow.dataset.key = product.id;
    newRow.append(delIcon);
    newRow.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('delete-icon')) {
            let startIndex = userData.products.findIndex((product) => product.id === +e.currentTarget.dataset.key);
                userData.products.splice(startIndex, 1);
                localStorage.setItem('userData', JSON.stringify(userData));
                setEaten();
                e.currentTarget.remove();
        }
    })

    document.querySelector('.prod-table__body').append(newRow);
}

export const createListItem = createElement;