export interface OtherProjectsProps {
    featured: OtherProjectDataProps[]
}

export interface OtherProjectDataProps {
    name: string,
    tools: string[],
    descriptionPoints: string[],
    githubLink?: string,
    hostedLink?: string,
    documentationLink?: string,
    images?: string[]
}