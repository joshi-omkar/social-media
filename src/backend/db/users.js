import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */
/**
 * 
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/8_hentfh.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/7_psig48.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/6_yhlawt.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/4_fxsd5d.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/3_gepnpf.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/3_gepnpf.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg
 */

export const users = [
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Joshi",
    email: "omkarjoshi@gmail.com",
    bio: "Hey! I'm Omkar Joshi.",
    website: "https://github.com/johsi-omkar",
    profileAvatar:
      "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg",
    password: "123456",
    createdAt: "2022-08-01",
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "archisdhakne@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "archisdhakne@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Archis",
    lastName: "Dhakne",
    email: "archisdhakne@gmail.com",
    password: "123456",
    bio: "Yo bro! Brown munde ! Archis here",
    website: "https://github.com/Archis0801",
    profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
    createdAt: "2023-01-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Omkar",
        lastName: "Joshi",
        email: "omkarjoshi@gmail.com",
        profileAvatar:
          "https://media.istockphoto.com/id/1354770626/vector/childhood-education-study-success-like-concept-young-happy-cheerful-smiling-boy-pupil.jpg?s=612x612&w=0&k=20&c=7Mhgf-cdXQrHQHjjuhYaPMT81RFQxthX01gX0OklMQU=",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
      },
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        profileAvatar:
          "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
      },
      {
        _id: uuid(),
        firstName: "Omkar",
        lastName: "Joshi",
        email: "omkarjoshi@gmail.com",
        profileAvatar:
          "https://media.istockphoto.com/id/1354770626/vector/childhood-education-study-success-like-concept-young-happy-cheerful-smiling-boy-pupil.jpg?s=612x612&w=0&k=20&c=7Mhgf-cdXQrHQHjjuhYaPMT81RFQxthX01gX0OklMQU=",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Om",
    lastName: "Gaikwad",
    email: "omgaikwad@gmail.com",
    password: "omgaikwad@gmail.com",
    bio: "Hey! Om here",
    website: "https://github.com/Om26102001",
    profileAvatar:
      "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
    createdAt: "2022-02-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "archisdhakne@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Pritesh",
    lastName: "Joshi",
    email: "priteshjoshi@gmail.com",
    password: "priteshjoshi@gmail.com",
    bio: "Hey! Pritesh here",
    website: "https://github.com/Pritesh1905",
    profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
    createdAt: "2022-09-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        profileAvatar:
          "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
      },
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "archisdhakne@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Pranav",
    lastName: "Raut",
    email: "pranavraut@gmail.com",
    password: "pranavraut@gmail.com",
    bio: "Hey! PranavRaut here",
    website: "https://github.com/Pranav1kashyap",
    profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
    createdAt: "2023-03-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
      },
    ],
    followers: [],
    bookmarks: [],
  },
];
