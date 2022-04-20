import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProductsTable1650422441674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'product_name',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,                        
                    },
                    {
                        name: 'restaurant_id',
                        type: 'uuid',
                    },
                    {
                        name: 'quantity',
                        type: 'integer',                        
                    },
                    {
                        name: 'product_images',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'category_id',
                        type: 'uuid',
                        isNullable: true,
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
            }),            
        )

        await queryRunner.createForeignKey('products',
            new TableForeignKey({
                name: 'RestaurantProduct',
                columnNames: ['restaurant_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'restaurants',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',

            })
        )

        await queryRunner.createForeignKey('products',
            new TableForeignKey({
                name: 'CategoryProducts',
                columnNames: ['category_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'categories',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products'),
        await queryRunner.dropForeignKey('products', 'RestaurantProduct');
        await queryRunner.dropForeignKey('products', 'CategoryProducts');
    }

}
