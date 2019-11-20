const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];
function buildGraph(roads) {
    let graph = {};
    let roadArr = roads.map(i => i.split('-'));
    function addRoad(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for(let [from, to] of roadArr) {
        addRoad(from, to);
        addRoad(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
//console.log(roadGraph);

class villageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        }
        let parcels = this.parcels.map(p => {
            if(p.place != this.place) return p;
            return {
                place: destination,
                address: p.address
            };
        }).filter(p => p.place != p.address);
        return new villageState(destination, parcels);
    }
}

// let first = new villageState('Daria\'s House', [{place: 'Daria\'s House', address: 'Ernie\'s House'}, {place: 'Ernie\'s House', address: 'Grete\'s House'}]);
// let next = first.move('Ernie\'s House');
// let next2 = next.move(  'Grete\'s House');
// console.log(next2);

function random(arr) {
    let number = Math.floor(Math.random() * arr.length);
    return arr[number];
}

villageState.random = function (parcelCount) {
    let parcel = [];
    for(let i = 0; i< parcelCount; i++) {
        let address = random(Object.keys(roadGraph));
        let place;
        do {
            place = random(Object.keys(roadGraph));
        } while(place == address);
        parcel.push({place, address})
    }
    return new villageState("Post Office", parcel);
}

function randomRobot(state) {
    return {direction: random(roadGraph[state.place])}
}

function runRobot(state, robot, memory) {
    for(let turn = 0;;turn++) {
        if(state.parcels.length == 0){
            console.log(`Don't in ${turn} turn!`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}
runRobot(villageState.random(5), randomRobot)