import {nats_client} from "../../../../atr-cex-crypto/shared/lib-msg-queue/src/nats/conn";
import {
    DiscardPolicy, Placement,
    RetentionPolicy,
    StorageType,
    StreamConfig,
    StreamUpdateConfig
} from "nats/lib/nats-base-client/types";



export const create_stream = async (
    stream: string,
    subjects: string[],
    retention: RetentionPolicy,
    storage: StorageType,
    max_consumers: number,
    sealed: boolean,

    discard: DiscardPolicy
) => {
    const streamConfig: StreamConfig = {
        name: stream,
        retention: retention,
        storage: storage,
        max_consumers: max_consumers,
        sealed: sealed, // StreamUpdateConfig
        subjects: subjects,
        max_msgs_per_subject: -1,
        max_msgs: -1,
        max_bytes: -1,
        max_msg_size: -1,
        max_age: 0,
        discard: discard,
        discard_new_per_subject: false,
        duplicate_window: 100 * 1000000,
        allow_rollup_hdrs: false,
        num_replicas: 1,
        deny_delete: false,
        deny_purge: false,
        allow_direct: true,
        mirror_direct: false
    } as StreamConfig

    //const obj = {...streamConfig, ...StreamUpdateConfig}

    (await nats_client)
        .jetstreamManager()
        .then(it => it.streams.add(streamConfig))
        .catch(err => console.log(err))
}

// create_stream(
//     'stream',
//     ["s1", "s2"],
//     RetentionPolicy.Limits,
//     StorageType.File,
//     -1,
//     false,
//     DiscardPolicy.Old
// );