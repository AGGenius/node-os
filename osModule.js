function getSysData() {
    const data = {
        name: "",
        type: "",
        vers: "",
        arch: "",
        cpu: "",
        memoryT: "",
        memoryF: "",
        tellData() {
            return `Name: ${this.name}. Type: ${this.type}. Version: ${this.vers}. Architecture: ${this.arch}. CPU's: ${this.cpu}. Total Memory: ${this.formatMemory(this.memoryT)} MB. Free Memory: ${this.formatMemory(this.memoryF)} MB.`;
        },
        formatMemory(memory) {
            return Math.floor(memory/1000000);
        }
    };

    const os = require('node:os');

    data.name =  os.hostname();
    data.type = os.type();
    data.vers = os.version();
    data.arch = os.arch();
    data.cpu = os.cpus().length;
    data.memoryT = os.totalmem();
    data.memoryF = os.freemem();

    return data.tellData();
}

module.exports = getSysData;