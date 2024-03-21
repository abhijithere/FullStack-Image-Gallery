import Header from "@/components/shared/Header"
import ImagesComponent from "@/components/shared/ImagesComponent"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <div className=" flex  justify-center items-center mt-10 ">
        <div className="w-[95%]">

      <ImagesComponent/>
        </div>

      </div>

    </div>
  )
}