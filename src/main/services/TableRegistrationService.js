const db = require("../db/models/index");

exports.createTableRegistration = async (data) => {
  return db.TableRegistration.create(data);
};

exports.updateTableRegistration = async (data, root) => {
  return db.TableRegistration.update(data, root);
};

exports.getTableRegistrations = async () => {
  return db.TableRegistration.findAll();
};

exports.deleteTableRegistration = async (data) => {
  return db.TableRegistration.destroy(data);
};