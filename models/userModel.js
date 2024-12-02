const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "admin",
    reminders: [{
      id: 1,
      title: "buy milk",
      description: "go to Costco buy 2L milk",
      completed: false
    },
    {
      id: 2,
      title: "python quiz review",
      description: "complete python lab and do the review",
      completed: true
    }
  ]
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    role: "user",
    reminders: [{
      id: 5,
      title: "take money from Tom",
      description: "go see Tom and get 5K",
      completed: false
    },
    ]
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    role: "user",
    reminders: []
  },
  {
    id: 4,
    name: "Administrator",
    email: "admin@sudoersd.com",
    password: "admin!",
    role: "admin",
    reminders: []
  },
  {
    id: "nuree",
    name: "nuree king",
    email: "nuree@na",
    password: "a",
    role: "user",
    reminders: [{
      id: 52,
      title: "DEFAULT TASK",
      description: "GO KILL BOBBY AND STEAL MONEY",
      completed: false
    },
    {
      id: 522,
      title: "Another",
      description: "drinking water",
      completed: true
    },
  ]
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
};

module.exports = { database, userModel };
