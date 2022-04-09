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

  const selectedCards = localStorage.getItem('selectedCards') ? JSON.parse(localStorage.getItem('selectedCards')) : [];
  let bCards = document.getElementsByClassName('b-card');
  let fCards = document.getElementsByClassName('f-card');

  selectedCards.forEach(index => {
    if(index <= 7) {
      bCards[index].classList.add('is-selected');
    }

    if (index > 7) {
      fCards[index - 8].classList.add('is-selected');
    }
  });

  for (let i = 0; i < bCards.length; i++) {
  bCards[i].addEventListener('click', () => {
      const classes = bCards[i].classList;
      if (classes.contains('is-selected')) {
          saveToLocalStorage(selectedCards, i, false);
          bCards[i].classList.remove('is-selected');
      } else {
          saveToLocalStorage(selectedCards, i, true);
          bCards[i].classList.add('is-selected');
      }
  });
  } 
  for (let i = 0; i < fCards.length; i++) {
    fCards[i].addEventListener('click', () => {
        const classes = fCards[i].classList;
        if (classes.contains('is-selected')) {
          saveToLocalStorage(selectedCards, i + 8, false);
          fCards[i].classList.remove('is-selected');
        } else {
          saveToLocalStorage(selectedCards, i + 8, true);
          fCards[i].classList.add('is-selected');
        }
    });
    } 
  }

  function saveToLocalStorage(selected, i, add) {
    if(add) {
      selected.push(i);
    } else {
      const index = selected.indexOf(i);
      selected.splice(index, 1);
    }
    localStorage.setItem('selectedCards', JSON.stringify(selected));
  }
 

