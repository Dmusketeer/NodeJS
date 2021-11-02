const dns = require('dns')
dns.lookup('www.google.com', (err, address, family) => {
    console.log('Address : ' + address + '\nFamily :' + family);
})

// Reading IP address of the current host
console.log("ip address of the current host : ", dns.getServers());


// Calling dns.lookupService() method for
// 127.0.0.1 port  number 22
dns.lookupService('127.0.0.1', 22,
    (err, hostname, service) => {

        // Printing hostname and service as callback
        console.log('hostname : ' + hostname + '\nservices : ' + service);
    });