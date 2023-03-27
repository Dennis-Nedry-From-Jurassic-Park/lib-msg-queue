import {nats_client, sc} from "./conn";


export const pub = async (subject: string, message: string) => {
    nats_client
        .then((it) => {
            it.publish(subject, sc.encode(message));
        })
        .catch(err => console.error(err));
    await (await nats_client).drain();
}


export const drain = async () => {
    await (await nats_client).drain();
}
export const pub0 = async (subject: string, message: string) => {
    nats_client
        .then((it) => {
            it.publish(subject, sc.encode(message));
        })
        .catch(err => console.error(err));
}
