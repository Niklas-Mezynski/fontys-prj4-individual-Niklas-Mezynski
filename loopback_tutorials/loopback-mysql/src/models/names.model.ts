import {Entity, model, property} from '@loopback/repository';

@model()
export class Names extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Names>) {
    super(data);
  }
}

export interface NamesRelations {
  // describe navigational properties here
}

export type NamesWithRelations = Names & NamesRelations;
