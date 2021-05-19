// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".


// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"


address = "1.1.1.1"


const defang = (ip) => {
  dfAddress = ip.split(".").join("[.]")
  return dfAddress
}


console.log(defang(address))