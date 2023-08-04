// Example function returning a Promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating an asynchronous operation (e.g., fetching data from a server)
        const userData = { id: 1, name: 'John Doe', age: 30 };
        // Resolve the Promise with the fetched data
        resolve(userData);
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  // Async function using await
  async function getUserData() {
    try {
      console.log('Fetching user data...');
      const userData = await fetchUserData(); // Execution pauses here until fetchUserData() Promise is resolved
      console.log('User data:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  // Call the async function
  getUserData();
  