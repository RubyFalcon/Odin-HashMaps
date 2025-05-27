class HashMap {
    constructor(capacity= 16, loadFactor = .75){
        this.table = new Array(capacity)
        this.capacity = capacity;
        this.loadFactor = loadFactor;
    }
}

function stringToNumber(string) {
    let hashCode = 0;
    for (let i = 0; i < string.length; i++) {
        hashCode += string.charCodeAt(i);
    }

    return hashCode;
}

function hash(name, surname) {
    return stringToNumber(name)+ stringToNumber(surname);

}