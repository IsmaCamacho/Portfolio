import HogwartsImage from "../assets/img-projects/Hogwarts.jpg";
import TrainWellImage from "../assets/img-projects/TrainWell.png";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";

export const proyectos = [
  {
    titulo: "Hogwarts App",
    descripcion:
      "Aplicación Android nativa que gestiona el universo de Harry Potter. Implementa lógica de filtrado avanzado, gestión de estados de vista y una interfaz de usuario dinámica siguiendo las guías de Material Design. Proyecto enfocado en la modularización y eficiencia del código en Kotlin.",
    imagen: HogwartsImage.src, 
    stack: "Kotlin - Android SDK - View Binding - Material Components - Git",
    tecnologias: ["Kotlin", "Android Studio", "XML", "SQL"],
    demo: "https://github.com/IsmaCamacho/Desafio1-Hogwarts-PMDM", 
    codigo: "https://github.com/IsmaCamacho/Desafio1-Hogwarts-PMDM",
    categoria: "frontend",
  },
  {
    titulo: "MiColorNote",
    descripcion:
      "Aplicación de gestión de notas personales con persistencia de datos local. Implementa un sistema de categorización por colores y una arquitectura orientada a la usabilidad, permitiendo al usuario organizar su día a día de forma eficiente y persistente.",
    imagen: VintageTone.src,
    stack: "Kotlin - SQLite - Android SDK - Material Design - SharedPreferences",
    tecnologias: ["Kotlin", "Android Studio", "Firebase", "Compose"],
    demo: "https://github.com/IsmaCamacho/MiColorNote", 
    codigo: "https://github.com/IsmaCamacho/MiColorNote",
    categoria: "fullstack",
  },
  {
    titulo: "TrainWell",
    descripcion:
      "Sistema integral de gestión para centros de entrenamiento. Desarrollado en Kotlin, este proyecto implementa una arquitectura robusta para el control de usuarios, rutinas y planes de entrenamiento, enfocándose en la integridad de los datos y la lógica de negocio del lado del servidor.",
    imagen: VintageTone.src, 
    stack: "Java - JDBC - MySQL - Programación Orientada a Objetos - Entornos de Desarrollo",
    tecnologias: ["Kotlin", "NoSQL", "Firebase", "Compose"],
    demo: "https://github.com/IsmaCamacho/TrainWell", 
    codigo: "https://github.com/IsmaCamacho/TrainWell",
    categoria: "backend", // O "fullstack" si tiene parte web, pero en DAM suele ser Desktop
  },
  {
    titulo: "SGC - Gestión de Cursos",
    descripcion:
      "Sistema de Gestión de Cursos para centros de formación. Implementa una arquitectura profesional para la administración de alumnos, profesores y cursos, gestionando la lógica de negocio y la persistencia en bases de datos relacionales con un enfoque en la integridad referencial.",
    imagen: VintageTone.src, 
    stack: "C# - .NET Framweork - ADO.NET- SQLServer - Windows Forms",
    tecnologias: ["C#", "SQLServer", ".NET"],
    demo: "https://github.com/IsmaCamacho/SGCursosFormacionIsmaelCamacho", 
    codigo: "https://github.com/IsmaCamacho/SGCursosFormacionIsmaelCamacho",
    categoria: "backend", 
  },
];
