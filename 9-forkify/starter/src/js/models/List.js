import uniqId from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqId(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        // splice vs slice
        // [2,4,8] --> slice(1,2) --> returns [4,8] arr=[2,4,8] // don't mutate returns new copy
        // [2,4,8] --> splice(1,2) --> returns [4] arr = [2,8] //mutate
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}