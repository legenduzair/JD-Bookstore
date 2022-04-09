function handleResponse(obj) {
    obj.items.forEach((item, index) => {
     let div = document.createElement('div');
     div.className = 'b-card';
     div.innerHTML = `<h1>${item.volumeInfo.title}</h1>
     <p><strong>${item.volumeInfo.authors[0]}</strong></p>
     <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />`
     
     let container = document.querySelector('.booklist-cards');
     container.append(div);
   })
 }