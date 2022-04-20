import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateRestaurant1649889580103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'restaurants',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',     
                        isPrimary: true,                   
                    },
                    {
                        name: 'restaurantName',
                        type: 'varchar',                        
                    },
                    {
                        name: 'city',
                        type: 'varchar',                        
                    },
                    {
                        name: 'uf',
                        type: 'varchar'
                    },
                    {
                        name: 'district',
                        type: 'varchar',                        
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                    },
                    {
                        name: 'number',
                        type: 'int'
                    },
                    {
                        name: 'restaurant_manager',
                        type: 'uuid',
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                    },
                    {
                        name: 'rate',
                        type: 'decimal',
                        isNullable: true,
                    },
                    {
                        name: 'category',
                        type: 'varchar',
                        isNullable: true
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
                    },
                ]
            }),
        )

        await queryRunner.createForeignKey('restaurants',
            new TableForeignKey({
                name: 'RestaurantManager',
                columnNames: ['restaurant_manager'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',                    
            }),            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('restaurants');
        await queryRunner.dropForeignKey('restaurants', 'RestaurantManager');
    }

}
