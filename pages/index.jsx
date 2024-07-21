import { IndexLayout } from "@/components/layouts";
import { Card } from "@/components/ui";



export default function Home({entradas}) {



  return (
    <IndexLayout>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 mb-10 mx-auto'>
        {entradas.map(entrada => (
          <Card 
            entrada={entrada}
          />
        ))}
      </div>
    </IndexLayout>
  );
}

export async function getStaticProps() {

  const url = `https://projects-git-main-emigb0s-projects.vercel.app
/api/projects`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
      props: {
          entradas
      }
  }
}
