var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    length: 0
  };

  // Implement the methods below
  //okay

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
};