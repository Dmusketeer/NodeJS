# -------------------------- DNS Module --------------------------



- DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup.

## Advantage
- No need for memorising IP addresses – DNS servers provide a nifty solution of converting domain or subdomain names to IP addresses.


## DNS Methods:
- dns.getServers() : The dns.getServers() method is an inbuilt application programming interface of the dns module which is used to get IP addresses of the current server.
- dns.lookup() : The dns.lookup() method is an inbuilt application programming interface of the dns module which is used to resolve IP addresses of the specified hostname for given parameters into the first found A (IPv4) or AAAA (IPv6) record.

    - Syntax:

            dns.lookup( hostname, options, callback )
            
- dns.lookupService() : The dns.lookupService() method is an inbuilt application programming interface of the dns module which is used to resolve the addresses and port number to hostname using operating system’s underlying getnameinfo implementation.

    - Syntax:

            dns.lookupService( address, port, callback ) 
