import CategoriesNav from "../components/CategoriesNav";

export default function ModelsLayout({children}: {children: React.ReactNode}) {

  return (
    <div className="relative flex flex-col md:flex-row md:gap-4">
        <CategoriesNav />
        <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
    )
}