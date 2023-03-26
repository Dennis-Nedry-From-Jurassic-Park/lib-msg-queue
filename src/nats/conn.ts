import {connect, StringCodec} from "nats";

export const nats_client = connect({
    servers: "188.120.227.233:4222",
    token: "s3cr3t",
    debug: false,
    verbose: true,
    maxPingOut: 5
});

export const sc = StringCodec();
