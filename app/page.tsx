import { Container, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";


export default function Home() {
  return(
      <>
        <Container>
         <Title text="Все пиццы" size="lg" className="font-extrabold"/>
        </Container>
        <Categories/>
        <Container>
          <>
          <div className="w-[250px]">
          </div>
          </>
        </Container>
      </>
  )
}