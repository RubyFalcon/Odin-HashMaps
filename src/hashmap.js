export class HashMap {
    constructor(capacity = 16, loadFactor = .75){
        this.table = new Array(capacity)
        this.capacity = capacity;
        this.loadFactor = loadFactor;
    }

    hash(key){
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue = (hashValue + key.charCodeAt(i) * i)% this.capacity;
        }
        return hashValue;
    }

    set(key,value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    remove(key){
        const index = this.hash(key);
        delete this.table[index];
    }

    get(key){
        const index = this.hash(key);
        return this.table[index];
    }

    has(key) {
        const index = this.hash(key)
        return (this.table[index] != null)
    }

    length() {
        return this.table.length;
    }

    clear(){
        delete this.table;
        this.table = new Array(this.capacity)
    }

}

// export function stringToNumber(string) {
//     let hashCode = 0;
//     for (let i = 0; i < string.length; i++) {
//         hashCode += string.charCodeAt(i);
//     }

//     return hashCode;
// }

// export function hash(name, surname) {
//     return stringToNumber(name) + stringToNumber(surname);

// }   