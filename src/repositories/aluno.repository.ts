import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataBaseMemoryDataSource} from '../datasources';
import {Aluno, AlunoRelations} from '../models';

export class AlunoRepository extends DefaultCrudRepository<
  Aluno,
  typeof Aluno.prototype.id,
  AlunoRelations
> {
  constructor(
    @inject('datasources.dataBaseMemory') dataSource: DataBaseMemoryDataSource,
  ) {
    super(Aluno, dataSource);
  }
}
