function main(topicNameOrId = "demo-topic") {
  const { PubSub } = require("@google-cloud/pubsub");

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();
  data = JSON.stringify({ foo: "bar" });
  async function publishMessage() {
    const dataBuffer = Buffer.from(data);

    try {
      const messageId = await pubSubClient
        .topic(topicNameOrId)
        .publishMessage({ data: dataBuffer });
      console.log(`Message ${messageId} published.`);
    } catch (error) {
      console.error(`Received error while publishing: ${error.message}`);
      process.exitCode = 1;
    }
  }

  publishMessage();
  // [END pubsub_publish_with_error_handler]
  // [END pubsub_quickstart_publisher]
}

process.on("unhandledRejection", (err) => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
