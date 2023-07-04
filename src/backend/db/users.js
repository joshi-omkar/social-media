import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Joshi",
    email: "abc@gmail.com",
    bio: "Hey! I'm Omkar Joshi.",
    website: "https://github.com/johsi-omkar",
    profileAvatar:
      "https://res.cloudinary.com/Pritesh1905/image/upload/v1687716248/844-8444619_student-png-male-student-cartoon-png_ibwnbv.png",
    password: "123456",
    createdAt: "2022-08-01",
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "Archis123",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "Archis123",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Archis",
    lastName: "Dhakne",
    email: "Archis123@gmail.com",
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
        email: "abc@gmail.com",
        profileAvatar:
          "https://media.istockphoto.com/id/1354770626/vector/childhood-education-study-success-like-concept-young-happy-cheerful-smiling-boy-pupil.jpg?s=612x612&w=0&k=20&c=7Mhgf-cdXQrHQHjjuhYaPMT81RFQxthX01gX0OklMQU=",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "Pritesh123",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
      },
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "Om123",
        profileAvatar:
          "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
      },
      {
        _id: uuid(),
        firstName: "Omkar",
        lastName: "Joshi",
        email: "abc@gmail.com",
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
    email: "Om123",
    password: "Om123",
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
        email: "Archis123",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "Pritesh123",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Pritesh",
    lastName: "Joshi",
    email: "Pritesh123",
    password: "Pritesh123",
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
        email: "Om123",
        profileAvatar:
          "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
      },
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "Archis123",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "Pranav123",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Pranav",
    lastName: "Raut",
    email: "Pranav123",
    password: "Pranav123",
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
        email: "Pritesh123",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
      },
    ],
    followers: [],
    bookmarks: [],
  },
];
