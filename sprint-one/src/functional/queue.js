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
};
