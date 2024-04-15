function getNetworkData() {
    const interfacesArr = [];
    let text = "";

    const os = require('node:os');
    const interfaces = os.networkInterfaces();

    // Gets values from "os" object and sets values on our object.
    Object.entries(interfaces).forEach(element => {
        const interfaces = {
            interface: '',
            interfaceData: []
        }

        interfaces.interface = element[0];

        element[1].forEach(subElement => {
            const interfaceData = {
                family: '',
                direction: '',
                intern: ''
            }

            interfaceData.family = subElement.family;
            interfaceData.direction = subElement.address;
            interfaceData.intern = subElement.internal;

            interfaces.interfaceData.push(interfaceData);
        })
        
        interfacesArr.push(interfaces);
    })

    // Creates the string with all needed values.
    interfacesArr.forEach(element => {
        text = text.concat(`Interface: ${element.interface}. `);
        element.interfaceData.forEach(subElement => {
            text = text.concat(`Family: ${subElement.family}. Direction: ${subElement.direction}. Inter: ${subElement.intern}. `);
        })
        text = text.concat('\n');
    })

    return text;
}

module.exports = {getNetworkData};