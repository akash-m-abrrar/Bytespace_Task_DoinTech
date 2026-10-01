export interface GrowthStat {
  id: string
  value: string
  label: string
}

export interface ProfessionalGrowthSectionProps {
  className?: string
}

export interface ProfessionalGrowthContentProps {
  heading: string
  description: string
  stats: readonly GrowthStat[]
  className?: string
}

export interface ProfessionalGrowthStatsProps {
  stats: readonly GrowthStat[]
  className?: string
}

export interface ProfessionalGrowthVisualProps {
  className?: string
}
