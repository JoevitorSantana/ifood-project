import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreatedByColumn1650602327035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('restaurant_images', 
            new TableColumn({
                name: 'created_by',
                type: 'uuid'
            })
        );

        await queryRunner.addColumn('product_images', 
            new TableColumn({
                name: 'created_by',
                type: 'uuid'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('restaurant_images', 'created_by');
        await queryRunner.dropColumn('product_images', 'created_by');
    }

}
