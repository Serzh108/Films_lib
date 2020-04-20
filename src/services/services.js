export default {
    baseURL: 'https://api.themoviedb.org/3',
    key:'?api_key=20f20d883cac0d777d3eec349954fec5',
    imagePath: 'https://image.tmdb.org/t/p/w500/',
    searchPoint: '/search/movie',
    popularFilms: '/discover/movie',
    pupularityFilter: '&sort_by=popularity.desc',
    page: 1,
    query: 'christ',
    // VIZEVAET FILMY PO ZAPROSY
    fetchFilms(){
        const requestStr = this.baseURL +this.searchPoint + this.key + `&query='${this.query}'` + `&page=${this.page}`;
        return this.fetchRequest(requestStr).catch(error =>{
            console.log(error);
        });
        // return this.fetch(requestStr);
    },
    // VIZEVAET FILMY PO POPULIARNIM
    fetchPopular(){
        const requestStr = `https://api.themoviedb.org/3/discover/movie?api_key=20f20d883cac0d777d3eec349954fec5&sort_by=popularity.desc` + this.page;
        return this.fetchRequest(requestStr);
    },
    // PEREVODIT V JSON NASHI ZAPROSY
    fetchRequest(requestStr){
        return fetch(requestStr).then(response => {
            return response.json();
        })
        .then(data =>{
            return data
        });
    },
    // VERNET FILM PO ID
    fetchId(id){
        const requestStr = `${this.baseURL}/movie/${id}${this.key}&language=en-US`;
        return fetch(requestStr)
        .then(response => response.json());
    },
    //VERNET ZHANRY
    fetchGenres(){
        const requestStr = `${this.baseURL}/genre/movie/list${this.key}&language=en-US`
        return fetch(requestStr)
        .then(response => response.json());
    },
    get searchQuery(){ 
        return this.query;
        
    },
    
    set searchQuery(value){
        this.query = value;
    },
    incrementPage(){
        this.page +=1;
    },
    decrementPage(){
        this.page -=1;
    },
    resetPage(){
        this.page =1;
    },
    sortGeneres(item){
        movies.fetchFilms().then(data=>{
            return data.results[1].genre_ids;
        })
        .then(ids =>{
            movies.fetchGenres().then(genres =>{
                // const genresArr = genres.genres;
                // const finalGenres = ids.map(item =>{
                //     return filteredGenres(genresArr, item);
                // });
                const finalGenres2 = ids.reduce((acc, item) =>{
                    const genre = this.filteredGenres(genresArr, item);
                    acc.push(genre[0].name);
                    return acc;
                },[]);
                console.log(finalGenres2);
            })
            
        })
    },
    filteredGenres(arr, id){
        return arr.filter(elem => elem.id === id);
    },
    
}