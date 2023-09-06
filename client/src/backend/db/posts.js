import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Joshi",
    email: "omkarjoshi@gmail.com",
    username: "omkarjoshi",
    profileAvatar:
      "https://res.cloudinary.com/Pritesh1905/image/upload/v1687716248/844-8444619_student-png-male-student-cartoon-png_ibwnbv.png",
    content: "Breaking Bad is GOAT!",

    likes: {
      likeCount: 4,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "Gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar:
            "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
        },
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar:
            "https://res.cloudinary.com/Pritesh1905/image/upload/v1687716248/844-8444619_student-png-male-student-cartoon-png_ibwnbv.png",
        },
        {
          _id: uuid(),
          firstName: "Archis",
          lastName: "Dhakne",
          email: "archisdhakne@gmail.com",
          username: "archisdhakne",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Pranav",
          lastName: "Raut",
          email: "pranavraut@gmail.com",
          username: "pranavraut",
          profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        },
      ],
    },

    media:
      "https://res.cloudinary.com/diudzga1m/image/upload/v1693458907/ulq8upvyhkff1oy3fsne.jpg",
    createdAt: "2023-05-11",
    updatedAt: "2023-05-11",
    comments: [
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
        createdAt: "2023-05-11",
        updatedAt: "2023-05-11",
        comment: "me too!",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Om",
    lastName: "Gaikwad",
    email: "omgaikwad@gmail.com",
    username: "omgaikwad",
    profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
    content: "Brown munde ! AP Dhillon is best",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Pranav",
          lastName: "Raut",
          email: "pranavraut@gmail.com",
          username: "pranavraut",
          profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        },
      ],
    },

    media: "https://res.cloudinary.com/diudzga1m/image/upload/v1693459116/AP_Dhillon_performs_at_DEC_Arena_m61949_zajdeh.jpg",
    createdAt: "2023-06-12",
    updatedAt: "2023-06-12",
    comments: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        username: "priteshjoshi",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        createdAt: "2023-06-09",
        updatedAt: "2023-06-09",
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        createdAt: "2023-06-09",
        updatedAt: "2023-06-09",
        comment: "nice nice!",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Joshi",
    email: "omkarjoshi@gmail.com",
    username: "omkarjoshi",
    profileAvatar:
      "https://res.cloudinary.com/Pritesh1905/image/upload/v1687716248/844-8444619_student-png-male-student-cartoon-png_ibwnbv.png",
    content: `Better Call Saul!!`,
    // link: "https://yo-shop-neogcamp.netlify.app/",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Pranav",
          lastName: "Raut",
          email: "pranavraut@gmail.com",
          username: "pranavraut",
          profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        },
      ],
    },

    media: "https://res.cloudinary.com/diudzga1m/image/upload/v1693458999/p13837077_b_v9_aa_r9xprx.jpg",
    createdAt: "2023-06-25",
    updatedAt: "2023-06-25",
    comments: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        username: "priteshjoshi",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        createdAt: "2023-02-19",
        updatedAt: "2023-02-19",
        comment: "nice nice!",
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Pritesh",
    lastName: "Joshi",
    email: "priteshjoshi@gmail.com",
    username: "priteshjoshi",
    profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
    content: "Why this kolaveri-Di ?",
    media: "",
    createdAt: "2023-06-21",
    updatedAt: "2023-06-21",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "Gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar:
            "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
        },
        {
          _id: uuid(),
          firstName: "Pranav",
          lastName: "Raut",
          email: "pranavraut@gmail.com",
          username: "pranavraut",
          profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        },
      ],
    },

    comments: [
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar:
          "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
        createdAt: "2023-04-21",
        updatedAt: formatDate(),
        comment: "Haha!",
      },
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        createdAt: "2023-04-21",
        updatedAt: "2023-04-21",
        comment: "nice nice!",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Pritesh",
    lastName: "Joshi",
    email: "priteshjoshi@gmail.com",
    username: "priteshjoshi",
    profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
    content: "Visited kedarnath! Jai shiv ji !!",
    media:
      "https://res.cloudinary.com/diudzga1m/image/upload/v1693459192/GettyImages-539105384_kxjfzw.jpg",
    createdAt: "2023-04-21",
    updatedAt: "2023-04-21",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar:
            "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
        },
        {
          _id: uuid(),
          firstName: "Omkar",
          lastName: "Joshi",
          email: "omkarjoshi@gmail.com",
          username: "omkarjoshi",
          profileAvatar:
            "https://res.cloudinary.com/Pritesh1905/image/upload/v1687716248/844-8444619_student-png-male-student-cartoon-png_ibwnbv.png",
        },
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Pranav",
          lastName: "Raut",
          email: "pranavraut@gmail.com",
          username: "pranavraut",
          profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        },
      ],
    },

    comments: [
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar:
          "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
        createdAt: "2023-04-21",
        updatedAt: formatDate(),
        comment: "Jai Shiv!",
      },
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        createdAt: "2023-04-21",
        updatedAt: "2023-04-21",
        comment: "nice nice!",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Om",
    lastName: "Gaikwad",
    email: "omgaikwad@gmail.com",
    username: "omgaikwad",
    profileAvatar:
      "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
    content: "Started learning Java",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Pranav",
          lastName: "Raut",
          email: "pranavraut@gmail.com",
          username: "pranavraut",
          profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        },
      ],
    },

    media: "",
    createdAt: "2023-02-19",
    updatedAt: "2023-02-19",
    comments: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        username: "priteshjoshi",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "nice nice!",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Pranav",
    lastName: "Raut",
    email: "pranavraut@gmail.com",
    username: "pranavraut",
    profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
    content: "I'm going to hit gym from tom.",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Johsi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "Gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
        },
      ],
    },

    media: "",
    createdAt: "2023-06-04",
    updatedAt: "2023-06-04",
    comments: [
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
        createdAt: "2023-06-04",
        updatedAt: formatDate(),
        comment: "Waao !",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Pranav",
    lastName: "Raut",
    email: "pranavraut@gmail.com",
    username: "pranavraut",
    profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
    content: "Lifting new challenges ! ",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "Gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
        },
      ],
    },

    media:
      "",
    createdAt: "2023-06-05",
    updatedAt: "2023-06-05",
    comments: [
      {
        _id: uuid(),
        firstName: "Om",
        lastName: "Gaikwad",
        email: "omgaikwad@gmail.com",
        username: "omgaikwad",
        profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
        createdAt: "2023-06-05",
        updatedAt: formatDate(),
        comment: "Very nice !",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Om",
    lastName: "Gaikwad",
    email: "omgaikwad@gmail.com",
    username: "omgaikwad",
    profileAvatar:
      "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
    content: "CSK champions for the 5th time!",

    likes: {
      likeCount: 5,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "Gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar:
            "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
        },
        {
          _id: uuid(),
          firstName: "Omkar",
          lastName: "Joshi",
          email: "omkarjoshi@gmail.com",
          username: "omkarjoshi",
          profileAvatar:
            "https://res.cloudinary.com/Pritesh1905/image/upload/v1687716248/844-8444619_student-png-male-student-cartoon-png_ibwnbv.png",
        },
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
        {
          _id: uuid(),
          firstName: "Pranav",
          lastName: "Raut",
          email: "pranavraut@gmail.com",
          username: "pranavraut",
          profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        },
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "Gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
        },
      ],
    },

    media:
      "https://res.cloudinary.com/diudzga1m/image/upload/v1693459286/Cup05_bhkbc5.jpg",
    createdAt: "2023-06-17",
    updatedAt: "2023-06-17",
    comments: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        username: "priteshjoshi",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "nice nice!",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Om",
    lastName: "Gaikwad",
    email: "omgaikwad@gmail.com",
    username: "omgaikwad",
    profileAvatar: "https://avatars.githubusercontent.com/u/36763315?v=4",
    content: "Sharayu! The River",

    likes: {
      likeCount: 3,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Om",
          lastName: "Gaikwad",
          email: "omgaikwad@gmail.com",
          username: "omgaikwad",
          profileAvatar:
            "https://media.licdn.com/dms/image/D5603AQH4CjoVxLewyA/profile-displayphoto-shrink_400_400/0/1686765403158?e=1692230400&v=beta&t=TD2bZvpcrwyQ_xRFJWcKGrdedAU3zbyss3ygheSSveA",
        },
        {
          _id: uuid(),
          firstName: "Omkar",
          lastName: "Joshi",
          email: "omkarjoshi@gmail.com",
          username: "omkarjoshi",
          profileAvatar:
            "https://res.cloudinary.com/Pritesh1905/image/upload/v1687716248/844-8444619_student-png-male-student-cartoon-png_ibwnbv.png",
        },
        {
          _id: uuid(),
          firstName: "Pritesh",
          lastName: "Joshi",
          email: "priteshjoshi@gmail.com",
          username: "priteshjoshi",
          profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        },
      ],
    },

    media:
      "https://res.cloudinary.com/diudzga1m/image/upload/v1693459405/1200px-Sarayu_River_AJTJ_P1020789_fyd0iu.jpg",
    createdAt: "2023-06-09",
    updatedAt: "2023-06-09",
    comments: [
      {
        _id: uuid(),
        firstName: "Pritesh",
        lastName: "Joshi",
        email: "priteshjoshi@gmail.com",
        username: "priteshjoshi",
        profileAvatar: "https://avatars.githubusercontent.com/u/94983216?v=4",
        createdAt: "2023-06-12",
        updatedAt: formatDate(),
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Pranav",
        lastName: "Raut",
        email: "pranavraut@gmail.com",
        username: "pranavraut",
        profileAvatar: "https://avatars.githubusercontent.com/u/67819701?v=4",
        createdAt: "2023-06-12",
        updatedAt: formatDate(),
        comment: "nice nice!",
      },
    ],
  },
];
