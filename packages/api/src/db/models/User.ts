import { Model, Sequelize, DataTypes, BuildOptions } from 'sequelize';

interface User extends Model {
  readonly id: String;
  name: String;
  email: String;
  password_hash: String;
  created_at: Date;
  updated_at: Date;
}

type UserStatic = typeof Model & {
  new (values?: Partial<User>, options?: BuildOptions): User;
};

export function User(sequelize: Sequelize) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  ) as UserStatic;

  return User;
}
