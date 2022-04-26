import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddUpdateAtAndCreatedAtColumns1650598178331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('product_images', 
            new TableColumn({
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
            })
        );
        await queryRunner.addColumn('product_images', 
            new TableColumn({
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()'
            })
        );
        await queryRunner.addColumn('restaurant_images', 
            new TableColumn({
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
            })
        );
        await queryRunner.addColumn('restaurant_images', 
            new TableColumn({
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('restaurant_images', 'created_at')
        await queryRunner.dropColumn('restaurant_images', 'updated_at')
        await queryRunner.dropColumn('product_images', 'created_at')
        await queryRunner.dropColumn('product_images', 'updated_at')
    }

}
