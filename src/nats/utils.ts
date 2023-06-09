import {nats_client} from "./conn";

export const purge = async (stream: string) => {
    const  js = (await nats_client).jetstream();
    const jsm = await (await nats_client).jetstreamManager();
    await jsm.streams.purge(stream);
} // TODO: right close done https://github.com/nats-io/nats.js/issues/424