import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddCreatedByColumnInProducts1650486285924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('products',
            new TableColumn({
                name: 'created_by',
                type: 'uuid',
            })
        );

        await queryRunner.createForeignKey('products',
            new TableForeignKey({
                name: 'ProductRestaurantManager',
                columnNames: ['created_by'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'created_by');
        await queryRunner.dropForeignKey('products', 'ProductRestaurantManager');
    }

}
