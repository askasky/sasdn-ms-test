import {Entity, Column, Generated, PrimaryColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity("")
export class Msg {

    @PrimaryColumn("integer")
    @Generated()
    id: number;

    @Column()
    fromSzId: string;

    @Column()
    toSzId: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    status: number;

    // @CreateDateColumn()
    // createdDate: Date;
    //
    // @UpdateDateColumn()
    // updatedDate: Date;

}
