import { Replace } from '@app/helpers/replace';
import { randomUUID } from 'crypto';

export interface UserSchema {
  name: string;
  login: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class User {
  private props: UserSchema;
  private _id: string;

  constructor(props: Replace<UserSchema, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    this._id = id || randomUUID();
  }

  // Getters
  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get login(): string {
    return this.props.login;
  }

  public get password(): string {
    return this.props.password;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.createdAt;
  }

  // Setters

  public set name(name: string) {
    this.props.name = name;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  // Methods
  public update(): void {
    this.props.updatedAt = new Date();
  }
}
