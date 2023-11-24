import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class ChangeUserRoleDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    role:string
 
}