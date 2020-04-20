const watched = {
  id: 1,
  originalTitle: 'Batmen',
  vote: 10,
  votes: 45,
  popularity: 100.2,
  genre: 'western',
  about: 'Some text...',
  imageSrc: 'images/qwe.img',
  date: 2015,
};
const queue = {
  id: 2,
  originalTitle: 'Cats',
  vote: 20,
  votes: 500,
  popularity: 90.2,
  genre: 'western',
  about: 'Some text...',
  imageSrc: 'images/qwe.img',
  date: 2010,
};
const next = {
  id: 3,
  originalTitle: 'Wall',
  vote: 210,
  votes: 5300,
  popularity: 40.2,
  genre: 'western',
  about: 'Some text...',
  imageSrc: 'images/qwe.img',
  date: 2018,
};

// let itemArray = [];

// setLocalStorage('watched', watched);
// setLocalStorage('watched', queue);
// getLocalStorage('watched');

// setLocalStorage('queue', queue);
// setLocalStorage('queue', watched);
// setLocalStorage('queue', next);
// getLocalStorage('queue');

// const x2 = getItemLocalStorage('watched', 1);
// const x3 = getItemLocalStorage('queue');
// console.log('query watched id=1 :', x2);
// console.log('query queue no id :', x3);

// deleteItemLocalStorage('queue', 2);

// =======================***===================
// ======================= object =================
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
// ======================== test ==============

// myLibrary.setLocalStorage('watched', watched);
myLibrary.setLocalStorage('watched', queue);
myLibrary.setLocalStorage('queue', queue);
myLibrary.setLocalStorage('queue', watched);
myLibrary.setLocalStorage('queue', next);
// myLibrary.getLocalStorage('queue');

const x2 = myLibrary.getItemLocalStorage('watched', 2);
const x3 = myLibrary.getItemLocalStorage('queue');
console.log('query watched id=1 :', x2);
console.log('query queue no id :', x3);

myLibrary.deleteItemLocalStorage('watched', 2);
// ======================= /object =================

// function setLocalStorage(key, value) {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     itemArray = JSON.parse(item);
//   }
//   itemArray.push(value);
//   localStorage.setItem(key, JSON.stringify(itemArray));
//   itemArray = [];
// }

// function getLocalStorage(key) {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     itemArray = JSON.parse(item);
//   }
//   // console.log(`${key}: `, itemArray, typeof itemArray);
//   const [...result] = itemArray;
//   itemArray = [];
//   return result;
// }

// function getItemLocalStorage(key, id) {
//   let result;
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     itemArray = JSON.parse(item);
//   }
//   if (!id) {
//     [...result] = itemArray;
//   } else {
//     result = itemArray.find(el => id === el.id);
//   }
//   itemArray = [];
//   return result;
// }

// function deleteItemLocalStorage(key, id) {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     itemArray = JSON.parse(item);
//     // const result = itemArray.filter(el => el.id !== id);
//     // localStorage.setItem(key, JSON.stringify(result));
//     // itemArray = [];
//   } else {
//     const err = 'Not finded!';
//     return err;
//   }
//   const result = itemArray.filter(el => el.id !== id);
//   localStorage.setItem(key, JSON.stringify(result));
//   itemArray = [];
// }

// function testEmptyLocalStorage(key) {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     const filmArray = JSON.parse(item);
//     return filmArray;
//   }
// }
