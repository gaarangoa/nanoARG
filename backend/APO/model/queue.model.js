Promise = require('promise');

class Queue {

    constructor() {

    }

    RabbitMQ(sid, qix, res) {
        var amqp = require('amqplib');
        var msg = Buffer.from(JSON.stringify(sid)).toString('base64');

        // console.log(msg)

        return new Promise(
            function(resolve, reject) {
                amqp.connect('amqp://rabbitmq:rabbitmq@scheduler').then(function(conn) {
                    return conn.createChannel().then(function(ch) {
                        var q = qix;
                        var ok = ch.assertQueue(q, { durable: true });

                        return ok.then(function() {

                            ch.sendToQueue(q, new Buffer(msg), { deliveryMode: 2 });
                            // console.log(" [x] Sent '%s'", msg);
                            res.json({ request: "success" })
                            return ch.close();

                        });
                    }).finally(function() { conn.close(); });
                }).catch(console.warn);
            }
        ); // END promise
    }

    kafka(sid, qix, res) {

        var msg = JSON.stringify({ sid: sid });

        var kafka = require('kafka-node'),
            Producer = kafka.Producer,
            KeyedMessage = kafka.KeyedMessage,
            client = new kafka.Client(),
            producer = new Producer(client),
            km = new KeyedMessage('key', 'message'),

            payloads = [
                { topic: 'nanopore', messages: msg, partition: 0 },
            ];

        return new Promise(
            function(resolve, reject) {

                producer.on('ready', function() {
                    producer.send(payloads, function(err, data) {
                        // console.log(data);
                        // res.json({request: 'success'});
                        resolve({ request: 'success' });
                        producer.close()
                        client.close()
                    });
                });

                producer.on('error', function(err) {
                    resolve({ request: 'error' });
                    // res.json({request: 'error'});
                })
            }
        );

    }

}

exports.Queue = Queue;