function searchHandler(...args){
    /* capture the search query entered by customer */
    const { value } = args[0].target;
    /* Make an API call with search query */
    getSearchResults(value);
    }

const optimisedSearchHandler = debounceFunc(searchHandler, 500)
const debounceFunc = (func, delay) => {
       let timer;
        return function(...args) {
           const context = this;
           clearTimeOut(timer);
           timer = setTimeOut(() => {
               func.apply(context, args);
           }, delay)
         }
    }