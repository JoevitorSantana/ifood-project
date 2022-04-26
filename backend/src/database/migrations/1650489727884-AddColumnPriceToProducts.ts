import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnPriceToProducts1650489727884 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('products', 
            new TableColumn({
                name: 'price',
                type: 'decimal',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'price');
    }

}
