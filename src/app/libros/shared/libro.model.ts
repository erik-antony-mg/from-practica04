export interface Welcome {
  content:          Libro[];
  pageable:         Pageable;
  totalElements:    number;
  totalPages:       number;
  last:             boolean;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface Libro {
  id:                 number;
  titulo:             string;
  slug:               string;
  descripcion:        null|string;
  rutaPortada:        null|string;
  rutaArchivo:        null|string;
  precio:             number;
  fechaCreacion:      Date;
  fechaActualizacion: Date|null;
}

export interface Pageable {
  sort:       Sort;
  pageNumber: number;
  pageSize:   number;
  offset:     number;
  unpaged:    boolean;
  paged:      boolean;
}

export interface Sort {
  sorted:   boolean;
  unsorted: boolean;
  empty:    boolean;
}
