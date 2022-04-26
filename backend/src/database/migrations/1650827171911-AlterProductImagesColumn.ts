import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterProductImagesColumn1650827171911 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('products', 'product_images', 
            new TableColumn({
                name: 'product_images',
                type: 'uuid',
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('products', 'product_images',
            new TableColumn({
                name: 'product_images',
                type: 'varchar',
                isNullable: true
            })
        )
    }

}
