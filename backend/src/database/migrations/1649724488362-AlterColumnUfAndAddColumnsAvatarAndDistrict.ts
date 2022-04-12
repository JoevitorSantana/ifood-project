import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterColumnUfAndAddColumnsAvatarAndDistrict1649724488362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'uf');

        await queryRunner.addColumn('users',
            new TableColumn({
                name:'uf',
                type: 'varchar',
            })
        );

        await queryRunner.addColumn('users',
            new TableColumn({
                name:'avatar',
                type: 'varchar',
            })
        );

        await queryRunner.addColumn('users',
            new TableColumn({
                name:'district',
                type: 'varchar',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', 
            new TableColumn({
                name: 'uf',
                type: 'char'
            })
        );

        await queryRunner.dropColumn('users', 'uf');
        await queryRunner.dropColumn('users', 'district');
    }

}
