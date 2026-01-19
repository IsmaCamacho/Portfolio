import HogwartsImage from "../assets/img-projects/Hogwarts.jpg";
import TrainWellImage from "../assets/img-projects/TrainWell.png";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";

export const proyectos = [
  {
    titulo: "Hogwarts App",
    imagen: HogwartsImage.src, 
    tecnologias: ["Kotlin", "Android Studio", "XML", "SQL"],
    demo: "https://github.com/IsmaCamacho/Desafio1-Hogwarts-PMDM", 
    codigo: "https://github.com/IsmaCamacho/Desafio1-Hogwarts-PMDM",
  },
  {
    titulo: "MiColorNote",
    imagen: VintageTone.src, // Recuerda cambiar esto por una captura de la app
    tecnologias: ["Kotlin", "Android Studio", "Firebase", "Compose"],
    demo: "https://github.com/IsmaCamacho/MiColorNote", 
    codigo: "https://github.com/IsmaCamacho/MiColorNote",
  },
  {
    titulo: "TrainWell",
    imagen: TrainWellImage.src, 
    tecnologias: ["Kotlin", "NoSQL", "Firebase", "Compose"],
    demo: "https://github.com/IsmaCamacho/TrainWell", 
    codigo: "https://github.com/IsmaCamacho/TrainWell",
  },
  {
    titulo: "SGC - Gestión de Cursos",
    imagen: VintageTone.src, 
    tecnologias: ["C#", "SQLServer", ".NET"],
    demo: "https://github.com/IsmaCamacho/SGCursosFormacionIsmaelCamacho", 
    codigo: "https://github.com/IsmaCamacho/SGCursosFormacionIsmaelCamacho",
  },
];
