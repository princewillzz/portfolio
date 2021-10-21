export interface FeaturedProjectsProps {
    featured: FeatureProjectProps[]
}

export interface FeatureProjectProps {
    name: string,
    tools: string[],
    descriptionPoints: string[],
    githubLink?: string,
    hostedLink?: string,
    documentationLink?: string,
    images?: string[]
}