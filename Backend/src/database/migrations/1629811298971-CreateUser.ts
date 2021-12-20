import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1629811298971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                        isNullable:false
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isNullable:false
                    },
                    {
                        name:"login",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"address",
                        type:"varchar",
                        isNullable:false
                    },
                    {
                        name:"email",
                        type:"varchar",
                        isUnique:true,
                        isNullable:false
                    },
                    {
                        name:"password",
                        type:"varchar",
                        isNullable:false
                    },
                    {
                        name:"isAdmin",
                        type:"boolean",
                        default:false
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
