import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AlterFKProductImages1650597351484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('product_images', 'ProductImages');
        await queryRunner.createForeignKey('product_images',
            new TableForeignKey({
                name: 'FKProductImages',
                columnNames: ['product_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'products',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('product_images', 
            new TableForeignKey({
                name: 'ProductImages',
                columnNames: ['product_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'restaurants',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        );
        await queryRunner.dropForeignKey('product_images', 'FKProductImages');
    }

}
