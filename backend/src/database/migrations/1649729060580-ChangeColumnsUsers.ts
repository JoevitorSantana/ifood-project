import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ChangeColumnsUsers1649729060580 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users', 'uf', 
            new TableColumn({
                name: 'uf',
                type: 'varchar',
                isNullable: true,
            })
        )
        await queryRunner.changeColumn('users', 'street', 
            new TableColumn({
                name: 'street',
                type: 'varchar',
                isNullable: true,
            })
        )
        await queryRunner.changeColumn('users', 'number', 
            new TableColumn({
                name: 'number',
                type: 'int',
                isNullable: true,
            })
        )
        await queryRunner.changeColumn('users', 'avatar', 
            new TableColumn({
                name: 'avatar',
                type: 'varchar',
                isNullable: true,
            })
        )
        await queryRunner.changeColumn('users', 'district', 
            new TableColumn({
                name: 'district',
                type: 'varchar',
                isNullable: true,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'uf',
            type: 'varchar'
        }))
        await queryRunner.addColumn('users', new TableColumn({
            name: 'street',
            type: 'varchar'
        }))
        await queryRunner.addColumn('users', new TableColumn({
            name: 'number',
            type: 'int'
        }))
        await queryRunner.addColumn('users', new TableColumn({
            name: 'avatar',
            type: 'varchar'
        }))
        await queryRunner.addColumn('users', new TableColumn({
            name: 'district',
            type: 'varchar'
        }))
    }

}
