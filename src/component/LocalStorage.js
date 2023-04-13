class LocalStorage {
    constructor() {
       this.map = {};
    }

    getItem(key) {
        if(this.map[key]) {
            return this.map[key];
        }
        return null;
    }

    setItem(key, value) {
        this.map[key] = value;
        return this.map[key];
    }

    setItemWithExpiry(key, value, time) {
        this.map[key] = value;
        setTimeout((key) => {
           delete this.map[key];
        }, time);
    }
}

const store = new LocalStorage();
const a = 1;
store.setItem(a, "hello");
console.log(store.getItem(a));

