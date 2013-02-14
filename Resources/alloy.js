function ucfirst(text) {
    return text ? text[0].toUpperCase() + text.substr(1) : text;
}

function isTabletFallback() {
    return !(Math.min(Ti.Platform.displayCaps.platformHeight, Ti.Platform.displayCaps.platformWidth) < 700);
}

var _ = require("alloy/underscore")._, Backbone = require("alloy/backbone");

exports.version = "1.0.0";

exports._ = _;

exports.Backbone = Backbone;

exports.M = function(name, modelDesc, migrations) {
    var config = modelDesc.config, type = (config.adapter ? config.adapter.type : null) || "localDefault";
    type === "localDefault" && (type = "sql");
    var adapter = require("alloy/sync/" + type), extendObj = {
        defaults: config.defaults,
        sync: function(method, model, opts) {
            var config = model.config || {}, adapterObj = config.adapter || {}, type = (config.adapter ? config.adapter.type : null) || "localDefault";
            type === "localDefault" && (type = "sql");
            require("alloy/sync/" + type).sync(method, model, opts);
        }
    }, extendClass = {};
    migrations && (extendClass.migrations = migrations);
    _.isFunction(adapter.beforeModelCreate) && (config = adapter.beforeModelCreate(config, name) || config);
    var Model = Backbone.Model.extend(extendObj, extendClass);
    Model.prototype.config = config;
    _.isFunction(modelDesc.extendModel) && (Model = modelDesc.extendModel(Model) || Model);
    _.isFunction(adapter.afterModelCreate) && adapter.afterModelCreate(Model, name);
    return Model;
};

exports.C = function(name, modelDesc, model) {
    var extendObj = {
        model: model,
        sync: function(method, model, opts) {
            var config = model.config || {}, type = (config.adapter ? config.adapter.type : null) || "localDefault";
            type === "localDefault" && (type = "sql");
            require("alloy/sync/" + type).sync(method, model, opts);
        }
    }, Collection = Backbone.Collection.extend(extendObj), config = Collection.prototype.config = model.prototype.config, type = (config.adapter ? config.adapter.type : null) || "localDefault", adapter = require("alloy/sync/" + type);
    _.isFunction(adapter.afterCollectionCreate) && adapter.afterCollectionCreate(Collection);
    _.isFunction(modelDesc.extendCollection) && (Collection = modelDesc.extendCollection(Collection) || Collection);
    return Collection;
};

exports.createWidget = function(id, name, args) {
    return new (require("alloy/widgets/" + id + "/controllers/" + (name || "widget")))(args);
};

exports.createController = function(name, args) {
    return new (require("alloy/controllers/" + name))(args);
};

exports.createModel = function(name, args) {
    return new (require("alloy/models/" + ucfirst(name)).Model)(args);
};

exports.createCollection = function(name, args) {
    return new (require("alloy/models/" + ucfirst(name)).Collection)(args);
};

exports.isTablet = function() {
    return Ti.Platform.osname === "ipad";
}();

exports.isHandheld = !exports.isTablet;

exports.Globals = {};

exports.Models = {};

exports.Models.instance = function(name) {
    return exports.Models[name] || (exports.Models[name] = exports.createModel(name));
};

exports.Collections = {};

exports.Collections.instance = function(name) {
    return exports.Collections[name] || (exports.Collections[name] = exports.createCollection(name));
};

exports.CFG = require("alloy/CFG");