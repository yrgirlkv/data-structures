var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    index: 0,
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.index] = value;
    storage.index++;
  };

  someInstance.pop = function() {
    var response = storage[storage.index - 1];
    delete storage[storage.index - 1];
    storage.index > 0 ? storage.index-- : storage.index *= 1;
    return response;
  };

  someInstance.size = function() {
    return storage.index;
  };

  return someInstance;
};