import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ChangeColumns1649727640579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users', 'city', 
            new TableColumn({
                name: 'city',
                type: 'varchar',
                isNullable: true,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'city',
            type: 'varchar'
        }))
    }

}
