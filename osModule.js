function getSysData() {
    // Object with base values and functions.
    const data = {
        name: "",
        type: "",
        vers: "",
        arch: "",
        cpu: "",
        memoryT: "",
        memoryF: "",
        tellData() {
            return `Name: ${this.name}.\n Type: ${this.type}.\n Version: ${this.vers}.\n Architecture: ${this.arch}.\n CPU's: ${this.cpu}.\n Total Memory: ${this.formatMemory(this.memoryT)} MB.\n Free Memory: ${this.formatMemory(this.memoryF)} MB.`;
        },
        formatMemory(memory) {
            return Math.floor(memory/1000000);
        }
    };

    const os = require('node:os');

    //Gives value to previously created object.
    data.name =  os.hostname();
    data.type = os.type();
    data.vers = os.version();
    data.arch = os.arch();
    data.cpu = os.cpus().length;
    data.memoryT = os.totalmem();
    data.memoryF = os.freemem();

    // Calls object function to display the string with required values.
    return data.tellData();
}

module.exports = {getSysData};