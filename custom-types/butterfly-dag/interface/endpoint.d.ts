export default Endpoint;
declare class Endpoint extends EventEmit3<string | symbol, any> {
    constructor();
}
import EventEmit3 = require("eventemitter3");
