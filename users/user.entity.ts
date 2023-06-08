import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

const saltOrRounds = 8 
@Entity( { name: 'auth-app-user'})

export class User extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email: string

    @Column()
    password: string


    @Column()
    @UpdateDateColumn()
    updatedAT: Date
    static create: any;
    static findOne: any;

    @BeforeInsert()
    async hashpassword()
    {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
    }

    async validatePassword(password: string): Promise<boolean>
    {
        return bcrypt.compare(password, this.password)
    }

}