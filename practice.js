import events from "events";
const myEmitter = new events.EventEmitter();

// myEmitter.on("ping", function (data) {
//     console.log("First subscriber: " + data);
// });
// myEmitter.emit("ping", "This is my first Node.js event emitter example.");

myEmitter.on("hello", (err) => {
    console.error("whoops! there was an error bro! \n" + err);
});
myEmitter.emit("hello", new Error("It is an unidentified error!"));
