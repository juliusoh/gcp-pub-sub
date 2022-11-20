async function main(topicNameOrId = 'demo') {
    // [START pubsub_create_topic]
    /**
     * TODO(developer): Uncomment this variable before running the sample.
     */
    const topicNameOrId = 'demo';
  
    // Imports the Google Cloud client library
    const {PubSub} = require('@google-cloud/pubsub');
  
    // Creates a client; cache this for further use
    const pubSubClient = new PubSub();
  
    async function createTopic() {
      // Creates a new topic
      await pubSubClient.createTopic(topicNameOrId);
      console.log(`Topic ${topicNameOrId} created.`);
    }
  
    createTopic();
    // [END pubsub_create_topic]
  }
  
  main(...process.argv.slice(2)).catch(e => {
    console.error(e);
    process.exitCode = -1;
  });
