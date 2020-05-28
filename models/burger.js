const orm = require("../config/orm.js");

const burger = {
    selectAll: async () => {
        const result = await orm.selectAll("burgers");

        return result;
    },
    insertOne: async () => {
        const result = await orm.insertOne("burgers", cols, vals);

        return result;
    },
    updateOne: async () => {
        const result = await orm.updateOne("burgers", objColVals, condition);

        return result;
    },
    deleteOne: async () => {
        const result = await orm.deleteOne("burgers", condition);

        return result;
    }
};
module.exports = burger;