import { Workshop } from '../workshop-mod/workshop-class';

export class User{
  email: string;
  firstname: string;
  github: string;
  lastname: string;
  picture: string;
  position: string;
  workshops: null;

  constructor(
    email: string,
    firstname: string,
    github: string,
    lastname: string,
    picture: string,
    position: string,
    workshops: null
  ){
    this.email = email;
    this.firstname = firstname;
    this.github = github;
    this.lastname = lastname;
    this.picture = picture;
    this.position = position;
    this.workshops = workshops;
  }
};
