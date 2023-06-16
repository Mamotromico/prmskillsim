type JobData = {
  jobName: string
  category: string
  prerequisite: string
  skillPoints: number
  skills: Partial<Record<string, SkillData>>
}

type SkillData = {
  skillName: string
  maxLevel: number
  prereq: Partial<SkillPreReq>[]
  description: string
  x: number
  y: number
}

type SkillPreReq = {
  [skillName: string]: number
}

type JobDataCollection = { [jobname: string]: JobData }

export type { JobData, JobDataCollection, SkillData }
