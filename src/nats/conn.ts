import {connect, StringCodec} from "nats";

export const sc = StringCodec();

export const nats_client = connect({
    servers: `${process.env.NATS_SERVER}:${process.env.NATS_PORT}`,
    token: process.env.NATS_TOKEN,
    debug: false,
    verbose: true,
    maxPingOut: 5
});
