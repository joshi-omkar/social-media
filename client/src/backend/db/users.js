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
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg
 * https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg
 */

export const users = [
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Joshi",
    email: "omkarjoshi@gmail.com",
    username: "omkarjoshi",
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
        username: "archisdhakne",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg",
      },
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar:
          "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "archisdhakne@gmail.com",
        username: "archisdhakne",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg",
      },
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar:
          "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Archis",
    lastName: "Dhakne",
    email: "archisdhakne@gmail.com",
    username: "archisdhakne",
    password: "123456",
    bio: "Yo bro! Brown munde ! Archis here",
    website: "https://github.com/Archis0801",
    profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg",
    createdAt: "2023-01-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Omkar",
        lastName: "Joshi",
        email: "omkarjoshi@gmail.com",
        username: "omkarjoshi",
        profileAvatar:
          "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        username: "priteshjoshi",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg",
      },
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar:
          "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg",
      },
      {
        _id: uuid(),
        firstName: "Omkar",
        lastName: "Joshi",
        email: "omkarjoshi@gmail.com",
        username: "omkarjoshi",
        profileAvatar:
          "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Om",
    lastName: "Gaikwad",
    email: "omgaikwad@gmail.com",
    username: "omgaikwad",
    password: "123456",
    bio: "Hey! Om here",
    website: "https://github.com/Om26102001",
    profileAvatar:
      "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg",
    createdAt: "2022-02-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "archisdhakne@gmail.com",
        username: "archisdhakne",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        username: "priteshjoshi",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Pritesh",
    lastName: "Joshi",
    email: "priteshjoshi@gmail.com",
    username: "priteshjoshi",
    password: "priteshjoshi@gmail.com",
    bio: "Hey! Pritesh here",
    website: "https://github.com/Pritesh1905",
    profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg",
    createdAt: "2022-09-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar:
          "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg",
      },
      {
        _id: uuid(),
        firstName: "Archis",
        lastName: "Dhakne",
        email: "archisdhakne@gmail.com",
        username: "archisdhakne",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Pranav",
    lastName: "Raut",
    email: "pranavraut@gmail.com",
    username: "pranavraut",
    password: "123456",
    bio: "Hey! Pranav here",
    website: "https://github.com/Pranav1kashyap",
    profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg",
    createdAt: "2023-03-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        profileAvatar: "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg",
      },
    ],
    followers: [],
    bookmarks: [],
  },
];
