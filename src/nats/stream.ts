import {
    DiscardPolicy, Placement,
    RetentionPolicy,
    StorageType,
    StreamConfig,
    StreamUpdateConfig
} from "nats/lib/nats-base-client/types";
import {nats_client} from "./conn";
import {pub0} from "./pub";

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

    (await nats_client)
        .jetstreamManager()
        .then(it => it.streams.add(streamConfig))
        .catch(err => console.log(err))
}

const stream_ti = 'atr_cex_tinkoff_investments_v2'
const stream_bybit = 'atr_cex_bybit'

const subjects_ti = [
    "atr.cex.ti.snapshot.actions.>",
    "atr.cex.ti.snapshot.marketdata.>",
    "atr.cex.ti.snapshot.portfolio.>",
    "atr.cex.ti.snapshot.market.orderbook.>",
]
const subjects_bybit = [
    "atr.cex.bybit.v5.>",
    "atr.cex.bybit.v3.>",
]
// 1 step
// create_stream(
//     stream_bybit, // stream_ti
//     subjects_bybit, // subjects_ti
//     RetentionPolicy.Limits,
//     StorageType.File,
//     -1,
//     false,
//     DiscardPolicy.Old
// );
// 2 step: send message to create subjects, clickhouse can't connect to empty subjects
const exec = async () => {

    // subjects_ti.forEach(subject => {
    //     pub0(subject.replace('>', 'test'), "{}")
    // })
    subjects_bybit.forEach(subject => {
        pub0(subject.replace('>', 'test'), "{}")
    })
}
exec();




