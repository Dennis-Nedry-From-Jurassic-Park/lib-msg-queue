import {nats_client, sc} from "./conn";

const subject = '>'

const sub = nats_client.then(it => it.subscribe(subject));

(async () => {
    console.info(`connected ${(await nats_client).getServer()}`);

    for await (const m of await sub) {
        console.log(`[${(await sub).getProcessed()}]: ${sc.decode(m.data)}`);
    }
    console.log("subscription closed");
})();