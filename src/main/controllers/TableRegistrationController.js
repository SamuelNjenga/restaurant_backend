const tableRegistrationService = require("../services/TableRegistrationService");

const ReqValidator = require("../utils/validator");

exports.tableRegistration = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      level: "required|integer",
      label: "required|string",
    });

    if (!valid) return;

    const data = {
      level: req.body.level,
      booked: req.body.booked,
      label: req.body.label,
      arrived: req.body.arrived,
    };

    await tableRegistrationService.createTableRegistration(data);
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.updateTableInformation = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      level: "required|integer",
      label: "required|string",
    });

    if (!valid) return;

    const data = {
      level: req.body.level,
      booked: req.body.booked,
      label: req.body.label,
      arrived: req.body.arrived,
    };

    const tableRegistrationId = req.params.id;
    await tableRegistrationService.updateTableRegistration(data, {
      where: {
        id: tableRegistrationId,
      },
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTable = async (req, res, next) => {
  try {
    const tableRegistrationId = req.params.id;
    await tableRegistrationService.deleteTableRegistration({
      where: {
        id: tableRegistrationId,
      },
    });
    res.status(200).json({
      data: null,
      message: `Table ${tableRegistrationId} has been deleted`,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTables = async (req, res) => {
  try {
    const tables = await tableRegistrationService.getTableRegistrations();
    res.status(200).json(tables);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
