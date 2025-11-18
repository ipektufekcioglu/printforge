
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type ModelDetailPageProps = {
  params: Promise<{id: string}>
}

export type CategoryPageProps = {
    params: Promise<{categoryName: string}>
}

export type Category = {
  displayName: string, 
  slug: string
}

export type ModelGridProps = {
  title: string,
  models: Model[]
}

export type ModelCardProps = {
  model: Model
}

export type NavLinkProps = {
  href: string,
  isActive: boolean,
  children: string
}

export type GetModelsParams = {
  category?: string
}