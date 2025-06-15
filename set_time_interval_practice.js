console.log("Practice: Set Time Interval");

setTimeout(function(){
    console.log("This message is displayed after 3 seconds.");
}, 3000);

// setInterval(function(){
//     console.log("This message is displayed every 2 seconds.");
// }, 2000);

// let count = 0;
// const intervalId = setInterval(function() {
//     // count++;
//     console.log("Count:", count);
//     if (count === 5) {
//         clearInterval(intervalId);
//         console.log("Interval cleared after 5 counts.");
//     }
//     count++;
// }, 1000);

// setInterval(async function() {
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     try {
//         let response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         let data = await response.json();
//         console.log("Fetched data:", data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }, 5000); // Fetch data every 5 seconds
