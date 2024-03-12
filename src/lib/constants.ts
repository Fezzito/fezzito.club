import behance from "../../public/behance.svg";
import gmail from "../../public/gmail.svg";
import medium from "../../public/medium.svg";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import pen from "../../public/pen.svg";
import pencil from "../../public/pencil.svg";
import code from "../../public/code.svg";

export const myWorks = [
  {
    title: "Kennel redesign",
    imagen: pencil.src,
    url: "https://www.behance.net/gallery/100261651/Canil-transportable-4X",
    className: "h-[300px] col-span-10 sm:col-span-5 m-2",
  },
  {
    title: "Billetera Santa Fe UX Case",
    imagen: pencil.src,
    url: "https://www.behance.net/gallery/183619529/Billetera-Santa-Fe-UX-Research-Case-Study",
    className: "col-span-12 sm:col-span-3 h-[300px] m-2",
  },
  {
    title: "Blackout curtain design",
    imagen: pencil.src,
    url: "https://www.behance.net/gallery/180032921/Elevador-de-cortina-tipo-blackout",
    className: "col-span-12 sm:col-span-8 h-[300px] m-2",
  },
  {
    title: "My first portfolio",
    imagen: code.src,
    url: "https://github.com/Fezzito/portfolio",
    className: "h-[300px] col-span-10 sm:col-span-5 m-2",
  },
  {
    title: "My first ever webpage",
    imagen: code.src,
    url: "https://retos-summerhack.web.app/",
    className: "col-span-10 sm:col-span-4 h-[300px] m-2",
  },
  {
    title: "Vulgar display of dogecoin",
    imagen: pen.src,
    url: "https://medium.com/@ftzeitler/vulgar-display-of-dogecoin-b06ca529bddc",
    className: "w-full h-[300px] col-span-10 sm:col-span-5 m-2",
  },
  {
    title: "Obras del diseño de la Argentina industrialista",
    imagen: pen.src,
    url: "https://medium.com/@ftzeitler/obras-del-dise%C3%B1o-de-la-argentina-industrialista-f79d9b9e57d0",
    className: "w-full h-[300px] col-span-12 sm:col-span-7 m-2",
  },
  {
    title: "Snake game",
    imagen: code.src,
    url: "https://github.com/Fezzito/viborita",
    className: "col-span-8 sm:col-span-4 h-[300px] m-2",
  },
];

export const mySocials = [
  {
    title: "BeHance",
    image: behance.src,
    url: "https://www.behance.net/feerzeitler",
    className: "h-[300px] col-span-10 sm:col-span-5 m-2",
  },
  {
    title: "Github",
    image: github.src,
    url: "https://github.com/Fezzito",
    className: "w-full h-[300px] col-span-10 sm:col-span-5 m-2",
  },
  {
    title: "LinkedIn",
    image: linkedin.src,
    url: "https://www.linkedin.com/in/fernando-zeitler/",
    className: "col-span-12 sm:col-span-3 h-[300px] m-2",
  },
  {
    title: "Medium",
    image: medium.src,
    url: "https://medium.com/@ftzeitler",
    className: "col-span-12 sm:col-span-6 h-[300px] m-2",
  },
  {
    title: "Gmail",
    image: gmail.src,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=ftzeitler@gmail.com&su=ContactFromYourWebpage&body=HelloFezzito",
    className: "w-full h-[300px] col-span-10 sm:col-span-5 m-2",
  },
];
