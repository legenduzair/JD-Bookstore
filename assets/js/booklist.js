 function handleResponse(obj) {
   obj.items.forEach((item, index) => {
    let text = (item.volumeInfo.description).substring(0, 140);
    let subtitle = item.volumeInfo.subtitle?" - " + item.volumeInfo.subtitle:"";
    if(index <= 7) {
     let div = document.createElement('div');
     div.className = 'b-card';
     div.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
     <h1>${item.volumeInfo.title}${subtitle}</h1>
     <p><strong>${item.volumeInfo.authors[0]}</strong></p>
     <strong>Pages: ${item.volumeInfo.pageCount}</strong>
     <p class="book-description">${text}</p>`
     
     let container = document.querySelector('.booklist-cards');
     container.append(div);
    }  else {
      let div = document.createElement('div');
      div.className = 'f-card';
      div.innerHTML = `<h1>${item.volumeInfo.title}${subtitle}</h1>
      <p><strong>${item.volumeInfo.authors[0]}</strong></p>
      <strong>Pages: ${item.volumeInfo.pageCount}</strong>
      <p class="book-description">${text}</p>
      <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />`
      
      let container = document.querySelector('.featured-cards');
      container.append(div);
    }
   })
 }