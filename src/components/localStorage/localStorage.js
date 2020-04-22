// ==============  for TEST =================
const watched = {
  id: 1,
  original_title: 'Cat',
  vote_average: 7,
  vote_count: 145,
  popularity: 75.2,
  genres: ['drama'],
  overview: 'Some text...',
  poster_path: 'images/qwe.img',
  release_date: 2018,
};
const queue = {
  id: 2,
  original_title: 'Batmen',
  vote_average: 15,
  vote_count: 65,
  popularity: 80.2,
  genres: ['western'],
  overview: 'Some text...',
  poster_path: 'images/qwe.img',
  release_date: 2011,
};
const next = {
  id: 3,
  original_title: 'Wall',
  vote_average: 30,
  vote_count: 90,
  popularity: 100.2,
  genres: ['western'],
  overview: 'Some text...',
  poster_path: 'images/qwe.img',
  release_date: 2015,
};

// let itemArray = [];

// setLocalStorage('watched', watched);
// myLibrary.setLocalStorage('watched', queue);
// getLocalStorage('watched');

// setLocalStorage('queue', queue);
// setLocalStorage('queue', watched);
// myLibrary.setLocalStorage('queue', next);
// getLocalStorage('queue');

// const x2 = getItemLocalStorage('watched', 1);
// const x3 = getItemLocalStorage('queue');
// console.log('query watched id=1 :', x2);
// console.log('query queue no id :', x3);

// deleteItemLocalStorage('queue', 2);

// ==============  /for TEST =================
// ======================= object ============
const myLibrary = {
  itemArray: [],

  setLocalStorage(key, value) {
    const item = localStorage.getItem(key);
    if (item !== null) {
      this.itemArray = JSON.parse(item);
    }
    this.itemArray.push(value);
    localStorage.setItem(key, JSON.stringify(this.itemArray));
    this.itemArray = [];
  },

  getLocalStorage(key) {
    const item = localStorage.getItem(key);
    if (item !== null) {
      this.itemArray = JSON.parse(item);
    }
    const [...result] = this.itemArray;
    this.itemArray = [];
    return result;
  },

  getItemLocalStorage(key, id) {
    let result;
    const item = localStorage.getItem(key);
    if (item !== null) {
      this.itemArray = JSON.parse(item);
    }
    if (!id) {
      [...result] = this.itemArray;
    } else {
      result = this.itemArray.find(el => id === el.id);
    }
    this.itemArray = [];
    return result;
  },

  deleteItemLocalStorage(key, id) {
    const item = localStorage.getItem(key);
    if (item !== null) {
      this.itemArray = JSON.parse(item);
    } else {
      const err = 'Not finded!';
      return err;
    }
    const result = this.itemArray.filter(el => el.id !== id);
    localStorage.setItem(key, JSON.stringify(result));
    this.itemArray = [];
  },
};

export default myLibrary;

// myLibrary.setLocalStorage('watched', next);
//  myLibrary.getLocalStorage('watched');

//  myLibrary.setLocalStorage('queue', queue);
//  myLibrary.setLocalStorage('queue', watched);
// myLibrary.setLocalStorage('queue', queuenext);

// const x2 =  myLibrary.getItemLocalStorage('watched', 1);
// const x3 =  myLibrary.getItemLocalStorage('queue');
// console.log('query watched id=1 :', x2);
// console.log('query queue no id :', x3);

//  myLibrary.deleteItemLocalStorage('queue', 2);