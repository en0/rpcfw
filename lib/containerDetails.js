'use strict';

module.exports = function serviceDescription(obj) {
    var self = {};

    self.registry = obj.registry;
    self.image = obj.image;

    self.toString = toString;
    self.isValid = isValid;

    function toString(tag) {
        if(self.registry && self.tag)
            return `${self.registry}/${self.image}:${tag}`;

        else if(self.registry)
            return `${self.registry}/${self.image}`;

        else
            return self.image;
    }

    function isValid() {
        if(!self.image)
            return false;
        return true;
    }
};