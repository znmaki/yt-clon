import {
    ButtomLogin, IconExploreChanel, IconGames, IconHelp, IconHistory, IconHistoryD, IconHome, IconLearning,
    IconLibary, IconMusic, IconNews, IconSendComment, IconSetting, IconShort, IconSports, IconSubs,
    IconTrend, IconYTK, IconYTM, IconYTP, IconYTTV
} from "@/components"

import { IOptions, IOptionSuggestion } from "@/models"

export const options: IOptions[] = [
    { name: "Principal", Icon: IconHome, type: "category" },
    { name: "Shorts", Icon: IconShort, type: "category" },
    { name: "Suscripciones", Icon: IconSubs, type: "category", divider: true },

    { name: "Biblioteca", Icon: IconLibary, type: "category" },
    { name: "Historia", Icon: IconHistory, type: "category", divider: true },

    {
        name: "Accede para dar “Me gusta” a los videos, realizar comentarios y suscribirte.",
        type: "text"
    },
    { Icon: ButtomLogin, divider: true },

    { name: "Explorar", type: "title" },
    { name: "Tendencias", Icon: IconTrend, type: "explorer" },
    { name: "Música", Icon: IconMusic, type: "explorer" },
    { name: "Videojuegos", Icon: IconGames, type: "explorer" },
    { name: "Noticias", Icon: IconNews, type: "explorer" },
    { name: "Deportes", Icon: IconSports, type: "explorer" },
    { name: "Aprendizaje", Icon: IconLearning, type: "explorer", divider: true },

    { name: "Explorar canales", Icon: IconExploreChanel, type: "category", divider: true },

    { name: "Más de Youtube", type: "title" },
    { name: "YouTube Premium", Icon: IconYTP, type: "category" },
    { name: "YouTube Music", Icon: IconYTM, type: "category" },
    { name: "YouTube Kids", Icon: IconYTK, type: "category" },
    { name: "YouTube TV", Icon: IconYTTV, type: "category" },

    { name: "Configuración", Icon: IconSetting, type: "more" },
    { name: "Historial de denuncias", Icon: IconHistoryD, type: "more" },
    { name: "Ayuda", Icon: IconHelp, type: "more" },
    { name: "Enviar comentarios", Icon: IconSendComment, type: "more", divider: true },

    { name: "© 2022 Google LLC", type: "more" },
]

export const optionSuggestion: IOptionSuggestion[] = [
    { name: 'Todos' },
    { name: 'Mixes' },
    { name: 'Aves' },
    { name: 'Música japonesa' },
    { name: 'ASMR' },
    { name: 'Música' },
    { name: 'Temas musicales' },
    { name: 'Videojuegos' },
    { name: 'Manga' },
    { name: 'Banda sonora' },
    { name: 'Música de fondo' },
    { name: 'Copa Mundial de Fútbol' },
    { name: 'Programación' },
    { name: 'Rock alternativo' },
    { name: 'Pokémon' },
    //
]