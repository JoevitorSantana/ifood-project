import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class AddAvatarColumns1650582506015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('restaurants', 
            new TableColumn({
                name: 'avatar',
                type: 'varchar',
                isNullable: true,
            })
        )

        await queryRunner.createTable(
            new Table({
                name: 'restaurant_images',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'restaurant_id',
                        type: 'uuid',
                    },
                    {
                        name: 'image_name',
                        type: 'varchar',
                    }
                ]
            })
        )

        await queryRunner.createForeignKey('restaurant_images', 
            new TableForeignKey({
                name: 'RestaurantImages',
                columnNames: ['restaurant_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'restaurants',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'product_images',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                    },
                    {
                        name: 'image_name',
                        type: 'varchar',
                    }
                ]
            })
        )

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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('restaurants', 'avatar');
        await queryRunner.dropTable('restaurant_images');
        await queryRunner.dropForeignKey('restaurant_images', 'RestaurantImages');
        await queryRunner.dropTable('product_images');
        await queryRunner.dropForeignKey('product_images','ProductImages');
    }

}
