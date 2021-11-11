var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    head: 0,
    tail: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.tail] = value;
    storage.tail++;

  };

  someInstance.dequeue = function() {
    let response = storage[storage.head];
    delete storage[storage.head];
    storage.head++;
    return response;
  };

  someInstance.size = function() {
    return storage.tail - storage.head >= 0 ? storage.tail - storage.head : 0;
  };

  return someInstance;
  //a somewhat silly feature of this particular implmenetation of queue
  //is that the actual values of head and tail, and the indexes, will become stupidly huge if you do a large number of operations on the que
  //because i can't figure out how to reassign the indexes in an efficient way
};