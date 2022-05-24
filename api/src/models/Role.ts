import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert, AfterLoad } from "typeorm";
import { User } from './User';

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.role)
    user: User

    @BeforeInsert()
    beforeCreate() {
        this.name = this.name.toLowerCase();
    }

    // Getters:
    @AfterLoad()
    capitalizeName(){
        // always return the value with the first letter capitalize
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}