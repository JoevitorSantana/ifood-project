import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateUsers1649644868044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'lastName',
                        type: 'varchar',                        
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar',                        
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'city',
                        type: 'varchar',                        
                    },
                    {
                        name: 'uf',
                        type: 'char',                        
                    },
                    {
                        name: 'street',
                        type: 'varchar',                        
                    },
                    {
                        name: 'number',
                        type: 'integer',                        
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
