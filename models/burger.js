var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", cb);
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne("burger", "burger_name", burgerName, cb);
    },
    updateOne: function(oCV, condition, cb) {
        orm.updateOne("burger", oCV, condition, cb)
    }
};

module.exports = burger;