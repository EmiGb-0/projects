// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
       
      {
        img: 'https://cdn.discordapp.com/attachments/1264713260469456976/1264713286054576352/arima.png?ex=669edf88&is=669d8e08&hm=82f10cd6f6fe4dec5dc44d70770b230fd36e64c69fe828f40589a306d7dc08c7&',
        title: 'Arima Web',
        description: 'Sitio web desarrollado con Next 14, utilizando las tecnologias mas nuevas, acompañado con TailwindCss, TypedJs y Swiper. Consumiendo una api proveniente de un cms',
        technologies: 'NextJs, TailwindCss, Javascript, Reactjs',
        url: 'https://www.arimaxc.com',
      },
      { 
        img: 'https://cdn.discordapp.com/attachments/1264713260469456976/1264713286469816452/cafe.png?ex=669edf88&is=669d8e08&hm=f6d74570c8218ff25996eaaa09e54cb668b374e608678aa6f61723f7e0b20cc3&',
        title: 'BlogDeCafe',
        description: 'Sitio elaborado con HTML y CSS',
        technologies: 'HTML, CSS',
        url: 'https://gallant-wescoff-137dc7.netlify.app',
      },
      {
        img: 'https://cdn.discordapp.com/attachments/1264713260469456976/1264713286885314570/flamingo.png?ex=669edf88&is=669d8e08&hm=557b76b8abfc670830ef5af35f203bd4faf08037c275d4780ee89b3cdfa02abf&',
        title: 'Flamingo',
        description: 'SPA elaborado coon Nextjs y TailwindCss',
        technologies: 'NextJs, TailwindCss, ReactJs, javascript',
        url: 'https://flamingo-olive.vercel.app',
      },
      {
        img: 'https://cdn.discordapp.com/attachments/1264713260469456976/1264713287262666793/hypercode.png?ex=669edf88&is=669d8e08&hm=9703098c88ad66eed3f86cf3523d4ea1a816b704015e3e1fc79d65387f54d53d&',
        title: 'HyperCode',
        description: 'Plataforma de cursos elaborada con Laravel 8, livewire, tailwindcss, apline.js.',
        technologies: 'Laravel 8, livewire, tailwindcss, alpine.js, adminlte, php 8',
        url: 'https://github.com/EmiGb-0/hypercode-0'
      },
      {
        img: 'https://cdn.discordapp.com/attachments/1264713260469456976/1264713287681966091/staffs.png?ex=669edf89&is=669d8e09&hm=34076b922fe21340ca93a8a1b9b0c6790b2895b33df5eb8b716b0acfc8f59477&',
        title: 'Staffs Hispanos',
        description: 'SPA realizado con nextjs 14 y tailwinds css',
        technologies: 'NextJs, TailwindCss, ReactJs, JavaScript',
        url: 'https://staffshispanos.vercel.app'
      }
      
    ]
  );
}
