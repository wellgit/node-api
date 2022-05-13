import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Aluno extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  idade: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  curso: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Aluno>) {
    super(data);
  }
}

export interface AlunoRelations {
  // describe navigational properties here
}

export type AlunoWithRelations = Aluno & AlunoRelations;
