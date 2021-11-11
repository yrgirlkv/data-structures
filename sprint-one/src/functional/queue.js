var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    length: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.length] = value;
    storage.length++;

  };

  someInstance.dequeue = function() {
    let response = storage[0];
    for (let i = 0; i < storage.length; i++) {
      storage[i] = storage [i + 1];
    }
    delete storage[storage.length - 1];
    storage.length > 0 ? storage.length-- : storage.length *= 1;
    return response;
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
  //a somewhat silly feature of the implmenetation of queue given here
  //is that the actual values of head and tail, and the indexes, will become stupidly huge if you do a large number of operations on the que
  //because i can't figure out how to reassign the indexes in an efficient way
};