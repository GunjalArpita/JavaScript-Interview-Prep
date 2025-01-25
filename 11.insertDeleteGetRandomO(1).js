var RandomizedSet=function(){
    this.map=new Map();
    this.arr=[];
}
RandomizedSet.prototype.insert=function(val){
    if(this.map.has(val)) return false;
    this.map.set(val,this.arr.length);
    this.arr.push(val);
    return true;
}
RandomizedSet.prototype.remove=function(val){
    if(!this.map.has(val)) return false;
    let index=this.map.get(val);
    let last=this.arr[this.arr.length-1];
    this.arr[index]=last;
    this.map.set(last,index);
    this.arr.pop();
    this.map.delete(val);
    return true;
}
RandomizedSet.prototype.getRandom=function(){
    let randomIndex=Math.floor(Math.random()*this.arr.length);
    return this.arr[randomIndex];
}
var obj=new RandomizedSet();
var val=1;
var param_1=obj.insert(val);
var param_2=obj.remove(val);
var param_3=obj.getRandom();
console.log(param_1);
console.log(param_2);
console.log(param_3);


// Implement the RandomizedSet class:
// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

 // Example 1:
// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output :[null, true, false, true, 2, true, false, 2]
// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.



// //var set;
// var RandomizedSet = function() {
//     this.set = new Set();
//     set = this.set;
// }

// RandomizedSet.prototype.insert = function(val) {

//     if(set.has(val)) return false;
//     set.add(val);
//     return true;

// };

// RandomizedSet.prototype.remove = function(val) {
    
//     if(set.has(val)){
//         set.delete(val);
//         return true;
//      };
//     }

// RandomizedSet.prototype.getRandom = function() {
    
//     let arr = Array.from(set);
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// };


// var obj = new RandomizedSet();
// var val = 1;

//   var param_1 = obj.insert(val)
//   var param_2 = obj.remove(val)
//   var param_3 = obj.getRandom()
//     console.log(param_1);
//     console.log(param_2);
//     console.log(param_3);





