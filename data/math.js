const args = [5, 3, 4];
const read = (...n) => {
    // console.log(...n)
    n.forEach((e) => {
        console.log(e)
    }) 
}
// read(args);

export function numberArray(size,limit=9,unique=false) {
    let result = new Array(size);
    if (unique) {
        for (let i = 0; i < size; i++) {
            result[i] = randomNumber(limit,...result);
        }
    } else {
        for (let i = 0; i < size; i++) {
            result[i] = randomNumber(limit);
        }
    }
    return result;
}

// let testerA = [56,4,6,75,3,6,4,46]

// console.log(testerA.reduceRight((prev,next) => {
//     return prev + next
// }));

function population(start,growthRate = 13,weeks = 5,deathRate = 10){
    let result = [];
    let init = start;
    result.push(`Starting Population => ${start}`);
    for (let i = 1 ; i <= weeks ; i++) {
        let growth = Number((init*(growthRate/100)).toFixed(0));
        let ref = (init + growth);
        result.push(`WEEK ${i} =>`)
        result.push(`Population Change of ${growth} from ${init} to ${ref}`);
        init += growth;
    }
    result.push(' ',`Results => Population increase of ${(init / start * 100).toFixed(0)}% from ${start} to ${init}`);
    // console.log(result);
    return result;
}

let A = population(25,5);
// console.log(A)

// export function log (q,delay=1) {
//     let item;
//     let start = setInterval(() => {
//         item = q.shift();
//         typeof item == "function" ? item() : console.log(item);
//         if(!q.length) {
//             clearInterval(start);
//         }
//     }, 1000*delay)
// }

let effect = { id: 0 , trigger: 'damage' , type: 'charm' , effect: -20 }
let effect2 = { id: 0 , trigger: 'damage' , type: 'charm' , effect: 10 }
let effect3 = { id: 0 , trigger: 'damage' , type: 'ward' , effect: 30 }

let stack = [effect,effect2,effect3];
// log()


// console.log('hi')
// log(population(250,25,10),0.13)
// log(population(5,50,10),0.5)
// console.log('buye')

var moveZeroes = function(nums) {
    let [n,zeros] = [nums.length,0];
    for (let i = 0; i < n; i++) {
        nums[0] ? nums.push(nums[0]) : zeros++;
        nums.shift();
    }
    while (zeros) {
        nums.push(0);
        zeros--;
    }
    console.log(nums);
};

// moveZeroes([4,0,5,0,3,0])

var maxArea = function(height) {
    let maxArea = [];
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let heightLimit = Math.min(height[i],height[j]);
            let area = heightLimit * (j - i);
            console.log(`Line A ${height[i]} Line B ${height[j]} MaxHeight ${heightLimit} Distance ${j-i} Area ${area}`)
            area > maxArea ? maxArea = area : null;
        }
    }
    console.log(maxArea)
    return maxArea;
};

// maxArea([5,1,2,13,4,9,12,11,6,8])

// console.log([6,7,8,9,3].indexOf(7))

export function randomChoice(...args) {

    return args[Math.floor(Math.random()*args.length)];
    
}

export function randomNumber(max,...exclusions) {
    let result = Math.ceil(Math.random()*max);
    while (exclusions.includes(result)) {
        result = Math.ceil(Math.random()*max);
    }
    return result;
}

function bubbleSort(arr) {
    let [swapping,swapcount] = [true,0];
    while (swapping) {
        swapping = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swapping = true;
                console.log(`Swapping ${arr[i]} and ${arr[i+1]}`);
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapcount++;
            } 
        }
    }
    console.log(arr, swapcount);
}

// bubbleSort([5,4,3,2,1])

var largestAltitude = function(gain) {
    let altitudes = [0];
    for (let i = 0; i < gain.length ; i++) {
        altitudes.push(altitudes[i] + gain[i]);
    }
    return altitudes;
};

export var criticalHit = number => {
    return number >= Math.ceil(Math.random()*100);
}

export var accuracy = number => {
    return 100 - number <= 0 ? true : Math.random()*100 <= number;
}

function randomSpellOfType(type) {

    var randomTypeSpellList = spells.filter((e) => {
        return e.type == type;
    });

    var randomTypeSpell = randomTypeSpellList[Math.floor(Math.random()*randomTypeSpellList.length)];

    return randomTypeSpell;
}


function spellsOfType(type) {

    return spells.filter((e) => {
        return e.type == type;
    })

}