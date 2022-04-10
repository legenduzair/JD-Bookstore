 function handleResponse(obj) {
   obj.items.forEach((item, index) => {
     // To limit max character length of description
    let text = (item.volumeInfo.description).substring(0, 140);
    // To only grab subtitle if subtitle exists, else return empty array
    let subtitle = item.volumeInfo.subtitle?" - " + item.volumeInfo.subtitle:"";
    // If number of cards is within the first 8, then add to booklist cards div
    if(index <= 7) {
     let div = document.createElement('div');
     div.className = 'b-card';
     div.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
     <h1>${item.volumeInfo.title}${subtitle}</h1>
     <p><strong>${item.volumeInfo.authors}</strong></p>
     <strong>Pages: ${item.volumeInfo.pageCount}</strong>
     <p class="book-description">${text}</p>`
     
     let container = document.querySelector('.booklist-cards');
     container.append(div);
    }  
    // Or else if the number cards is 9 or 10, then add to featured cards div.
    else {
      let div = document.createElement('div');
      div.className = 'f-card';
      div.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
      <h1>${item.volumeInfo.title}${subtitle}</h1>
      <p><strong>${item.volumeInfo.authors}</strong></p>
      <strong>Pages: ${item.volumeInfo.pageCount}</strong>
      <p class="book-description">${text}</p>`
      
      let container = document.querySelector('.featured-cards');
      container.append(div);
    }
   })

  /* If selected cards exist in local storage, 
  then read saved selected cards from local storage 
  or else return empty array */ 
  const selectedCards = localStorage.getItem('selectedCards') ? JSON.parse(localStorage.getItem('selectedCards')) : [];

  // Acquiring booklist and featured card elements by acquiring class name.
  let bCards = document.getElementsByClassName('b-card');
  let fCards = document.getElementsByClassName('f-card');

  // To iterate through the selected cards and set previously selected.
  selectedCards.forEach(index => {
    if(index <= 7) {
      bCards[index].classList.add('is-selected');
    }

    if (index > 7) {
      // Minus 8 to restore index 
      fCards[index - 8].classList.add('is-selected');
    }
  });

  /* To iterate through the bCards divs to add event listeners to elements
  and remove and add from & to local storage */ 
  for (let i = 0; i < bCards.length; i++) {
  bCards[i].addEventListener('click', () => {
      const classes = bCards[i].classList;
      if (classes.contains('is-selected')) {
        // if bCards are selected, then remove from local storage
          saveToLocalStorage(selectedCards, i, false);
          bCards[i].classList.remove('is-selected');
      } else {
        // if bCards are removed, then add to local storage
          saveToLocalStorage(selectedCards, i, true);
          bCards[i].classList.add('is-selected');
      }
  });
  }

   /* To iterate through the fCards divs to add event listeners to elements
  and remove and add from & to local storage */ 
  for (let i = 0; i < fCards.length; i++) {
    fCards[i].addEventListener('click', () => {
        const classes = fCards[i].classList;
        if (classes.contains('is-selected')) {
          /*if fCards are selected, then remove from local storage.
          The +8 is present to mark index of featured card.*/ 
          saveToLocalStorage(selectedCards, i + 8, false);
          fCards[i].classList.remove('is-selected');
        } else {
          /*if fCards are removed, then add to local storage.
          The +8 is present to mark index of featured card.*/
          saveToLocalStorage(selectedCards, i + 8, true);
          fCards[i].classList.add('is-selected');
        }
    });
    } 
  }

  // Function to save to local storage
  function saveToLocalStorage(selected, i, add) {
    // If add is true, then push(save) to local storage.
    if(add) {
      selected.push(i);
    } 
    // If add is false, then splice(remove) from local storage.
    else {
      const index = selected.indexOf(i);
      selected.splice(index, 1);
    }
    // Save the selected card item as a string
    localStorage.setItem('selectedCards', JSON.stringify(selected));
  }
 

