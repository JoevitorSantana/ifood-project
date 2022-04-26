import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateForeignKeysInTheCitiesTable1650491191670 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('cidades', 
            new TableForeignKey({
                name: 'CityState',
                columnNames: ['estado_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'estados',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        )

        await queryRunner.dropColumn('users', 'uf');

        await queryRunner.changeColumn('users', 'city',
            new TableColumn({
                name: 'city_id',
                type: 'integer',
                isNullable: true,
            })
        )

        await queryRunner.createForeignKey('users', 
            new TableForeignKey({
                name: 'CityUsers',
                columnNames: ['city_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'cidades',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        )        

        await queryRunner.dropColumn('restaurants', 'uf');

        await queryRunner.changeColumn('restaurants', 'city',
            new TableColumn({
                name: 'city_id',
                type: 'integer',                
            })
        )

        await queryRunner.createForeignKey('restaurants', 
            new TableForeignKey({
                name: 'CityRestaurants',
                columnNames: ['city_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'cidades',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cidades', 'CityState');
        await queryRunner.dropForeignKey('users', 'CityUsers');
        await queryRunner.dropForeignKey('restaurants', 'CityRestaurants');
        await queryRunner.addColumn('users', 
            new TableColumn({
                name: 'uf',
                type: 'varchar',
                isNullable: true,
            })
        );
        await queryRunner.addColumn('restaurants', 
            new TableColumn({
                name: 'uf',
                type: 'varchar',
                isNullable: true,
            })
        );

        await queryRunner.changeColumn('users', 'city_id',
            new TableColumn({
                name: 'city',
                type: 'varchar',
                isNullable: true,
            })
        )

        await queryRunner.changeColumn('restaurants', 'city_id',
            new TableColumn({
                name: 'city',
                type: 'varchar',
                isNullable: true,
            })
        )
    }

}
