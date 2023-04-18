import {nats_client} from "./conn";

export const status = async () => {
    console.log(JSON.stringify(await (await nats_client).status()))
}
export const info = async () => {
    console.log(JSON.stringify(await (await nats_client).jetstream()))
}