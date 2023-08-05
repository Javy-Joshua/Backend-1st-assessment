const os = require('os');

// Get the current user information
const userInfo = os.userInfo();

// Print the user information
console.log('User Information:');
console.log(`Username: ${userInfo.username}`);
console.log(`Home Directory: ${userInfo.homedir}`);
console.log(`User ID (UID): ${userInfo.uid}`);
console.log(`Group ID (GID): ${userInfo.gid}`);
console.log(`Shell: ${userInfo.shell}`);
