export interface DataRespuesta {
    nombre?:  string;
    resumen?: string;
    foto?:    string;
    url?:     string;
    tag?:     string;
    id?:      string;
    fecha?:   Date;
    idd?:     string;
    final?:   string;
}

export interface ArticulosByCategoriaAndPage{
    [key: string]: {
        page: number;
        articulos: DataRespuesta[];
    };
}
