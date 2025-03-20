import { Container, Title, TopBar, Filters, ProductCard } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { ProductGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="flex">
        <div className="flex">
          <div className="w-[250px]">
            <Filters />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductGroupList title="Пиццы" items={[{
              id: 1,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/020/542/871/216/222/9/100045560750b0.jpg',
              price: 550,
              items: [{ price: 550 }]
            },
            {
              id: 2,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/020/542/871/216/222/9/100045560750b0.jpg',
              price: 550,
              items: [{ price: 550 }]
            },
            {
              id: 3,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/020/542/871/216/222/9/100045560750b0.jpg',
              price: 550,
              items: [{ price: 550 }]
            },
            {
              id: 4,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/020/542/871/216/222/9/100045560750b0.jpg',
              price: 550,
              items: [{ price: 550 }]
            },
            {
              id: 5,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/020/542/871/216/222/9/100045560750b0.jpg',
              price: 550,
              items: [{ price: 550 }]
            },
            ]} categoryId={0}/>
          </div>
        </div>
      </Container>
    </>
  );
}