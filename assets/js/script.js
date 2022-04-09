 function handleResponse(obj) {
    obj.items.forEach((item, index) => {
     let div = document.createElement('div');
     div.className = 'b-card';
     div.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
     <h1>${item.volumeInfo.title} - ${item.volumeInfo.subtitle}</h1>
     <p><strong>${item.volumeInfo.authors[0]}</strong></p>
     <strong>Pages: ${item.volumeInfo.pageCount}</strong>
     <p class="book-description">${item.volumeInfo.description}</p>`
     
     let container = document.querySelector('.booklist-cards');
     container.append(div);
   })
 }