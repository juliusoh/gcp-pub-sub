async function main() {
  /**
   * TODO(developer): Uncomment this variable before running the sample.
   */
  const subscriptionNameOrId = "demo-sub";

  // Imports the Google Cloud client library
  const { PubSub } = require("@google-cloud/pubsub");

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  const sub = await pubSubClient.subscription(subscriptionNameOrId);
  sub.on('message', message => {
    if (message) {
      console.log('Received message:', message.data.toString());
    } else {
        process.stdout.write("Waiting for messages...");
    }
  })
}

main();
