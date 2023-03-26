import {connect, StringCodec} from "nats";

export const sc = StringCodec();

export const nats_client = connect({
    servers: `${process.env.NATS_SERVER}:${process.env.NATS_PORT}`,
    token: process.env.NATS_TOKEN,
    debug: false,
    verbose: true,
    maxPingOut: 5
});

delete process.env.NATS_TOKEN
delete process.env.NATS_SERVER
delete process.env.NATS_PORT
