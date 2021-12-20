import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateSaleProduct1629948381537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sale_product",
                columns: [
                    {
                        name: "sale_id",
                        type: "uuid",
                        isNullable: false,
                        isPrimary:true,
                    },
                    {
                        name: "qtd",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()"
                    }
                ]
            }
        ))
        await queryRunner.addColumn('sale_product',new TableColumn({
            name:"product_id",
            type:"uuid",
            isNullable:false,
            isPrimary:true
        }))

        await queryRunner.createForeignKey('sale_product',new TableForeignKey({
            name:"FkProduct",
            columnNames:['product_id'],
            referencedTableName:'products',
            referencedColumnNames:['id'],
            onDelete:"CASCADE"
        }))
        await queryRunner.createForeignKey('sale_product',new TableForeignKey({
            name:"FkSale",
            columnNames:['sale_id'],
            referencedTableName:'sales',
            referencedColumnNames:['id'],
            onDelete:"CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sale_product')
    }

}
