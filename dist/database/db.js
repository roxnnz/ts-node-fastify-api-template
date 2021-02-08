"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserDatabase = /** @class */ (function () {
    function UserDatabase() {
        mongoose_1.default.connect('mongodb://localhost/my_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
    }
    UserDatabase.prototype.update = function () { };
    UserDatabase.prototype.add = function () { };
    return UserDatabase;
}());
exports.default = UserDatabase;
