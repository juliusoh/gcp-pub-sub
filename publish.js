function main(
    topicNameOrId = 'demo-topic',
    data = JSON.stringify({foo: 'bar'})
  ) {
    // [START pubsub_publish_with_error_handler]
    // [START pubsub_quickstart_publisher]
    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
    // const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
    // const data = JSON.stringify({foo: 'bar'});
  
    // Imports the Google Cloud client library
    const {PubSub} = require('@google-cloud/pubsub');
  
    // Creates a client; cache this for further use
    const pubSubClient = new PubSub();
  
    async function publishMessage() {
      // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
      const dataBuffer = Buffer.from(data);
  
      try {
        const messageId = await pubSubClient
          .topic(topicNameOrId)
          .publishMessage({data: dataBuffer});
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
  
  process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
  });
  main(...process.argv.slice(2));