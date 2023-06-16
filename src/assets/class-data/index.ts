import type { JobData, JobDataCollection } from '@/types'

import thiefRaw from '@/assets/class-data/thief.json'
const thief: JobData = thiefRaw
import duelistRaw from '@/assets/class-data/duelist.json'
const duelist: JobData = duelistRaw
import kingslayerRaw from '@/assets/class-data/kingslayer.json'
const kingslayer: JobData = kingslayerRaw

export default { thief, duelist, kingslayer } as JobDataCollection
