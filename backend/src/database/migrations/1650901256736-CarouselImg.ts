import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CarouselImg1650901256736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'carousel',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'alt',
                        type: 'varchar',
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('carousel');
    }

}
