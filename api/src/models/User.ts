import {
  AfterLoad,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Role } from "./Role";
import * as bcrypt from "bcrypt";
// Setear en tsconfig, strictPropertyInitialization en false

@Entity() // Con esto aclaramos que la clase User no es solo una clase de typescript sino tambien una tabla
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 200,
    select: false,
  })
  firstName: string;

  @Column({ select: false })
  lastName: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true, select: false })
  googleId: string;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  //Setters:
  @BeforeInsert()
  async beforeCreate() {
    this.firstName = this.firstName.toLowerCase();
    this.lastName = this.lastName.toLowerCase();
    if (this.password) {
      // Hashing password before instantiate User.
      const salt: string = await bcrypt.genSaltSync(10, "a");
      this.password = bcrypt.hashSync(this.password, salt);
    }
  }
  @BeforeUpdate()
  async beforeUpdPassword() {
    if (this.password) {
      // Hashing password before instantiate User.
      const salt: string = await bcrypt.genSaltSync(10, "a");
      this.password = bcrypt.hashSync(this.password, salt);
    }
  }
  // Getters:
  // @AfterLoad()
  // capitalizeName(){
  //     // always return the value with the first letter capitalize
  //     const capLastName:string = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1)
  //     return ( capLastName, this.lastName
  //       );
  // }
}
