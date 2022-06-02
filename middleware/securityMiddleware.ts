import helmet from "helmet";
const xss = require("xss-clean");
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";

export default [xss(), helmet(), hpp(), mongoSanitize()];
