import { Container, Title, TopBar, Filters } from "@/components/shared";
import { Categories } from "@/components/shared/categories";


export default function Home() {
  return(
      <>
        <Container>
         <Title text="Все пиццы" size="lg" className="font-extrabold"/>
        </Container>
        <Categories/>
        <TopBar />
        <Container>
          <div className="flex ">
            <div className="w-[250px]">
              <Filters />
            </div>
          </div>
        </Container>
      </>
  )
}