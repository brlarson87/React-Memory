const initialState = {
  cards: [
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15717-illustration-of-an-ace-of-hearts-playing-card-pv.png",
    },
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15743-illustration-of-an-ace-of-clubs-playing-card-pv.png",
    },
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15730-illustration-of-an-ace-of-diamonds-playing-card-pv.png",
    },
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15702-illustration-of-an-ace-of-spades-playing-card-pv.png",
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15705-illustration-of-a-king-of-hearts-playing-card-pv.png",
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15731-illustration-of-a-king-of-clubs-playing-card-pv.png",
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15718-illustration-of-a-king-of-diamonds-playing-card-pv.png",
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15690-illustration-of-a-king-of-spades-playing-card-pv.png",
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15719-illustration-of-a-queen-of-diamonds-playing-card-pv.png",
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15732-illustration-of-a-queen-of-clubs-playing-card-pv.png",
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15719-illustration-of-a-queen-of-diamonds-playing-card-pv.png",
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15691-illustration-of-a-queen-of-spades-playing-card-pv.png",
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15707-illustration-of-a-jack-of-hearts-playing-card-pv.png",
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15733-illustration-of-a-jack-of-clubs-playing-card-pv.png",
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15720-illustration-of-a-jack-of-diamonds-playing-card-pv.png",
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15692-illustration-of-a-jack-of-spades-playing-card-pv.png",
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15708-illustration-of-a-ten-of-hearts-playing-card-pv.png",
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15734-illustration-of-a-ten-of-clubs-playing-card-pv.png",
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15721-illustration-of-a-ten-of-diamonds-playing-card-pv.png",
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15693-illustration-of-a-ten-of-spades-playing-card-pv.png",
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15709-illustration-of-a-nine-of-hearts-playing-card-pv.png",
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15735-illustration-of-a-nine-of-clubs-playing-card-pv.png",
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15722-illustration-of-a-nine-of-diamonds-playing-card-pv.png",
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15694-illustration-of-a-nine-of-spades-playing-card-pv.png",
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15710-illustration-of-an-eight-of-hearts-playing-card-pv.png",
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15736-illustration-of-a-eight-of-clubs-playing-card-pv.png",
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15723-illustration-of-an-eight-of-diamonds-playing-card-pv.png",
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15695-illustration-of-an-eight-of-spades-playing-card-pv.png",
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15724-illustration-of-a-seven-of-diamonds-playing-card-pv.png",
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15737-illustration-of-a-seven-of-clubs-playing-card-pv.png",
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15724-illustration-of-a-seven-of-diamonds-playing-card-pv.png",
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15696-illustration-of-a-seven-of-spades-playing-card-pv.png",
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15712-illustration-of-a-six-of-hearts-playing-card-pv.png",
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15738-illustration-of-a-six-of-clubs-playing-card-pv.png",
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15725-illustration-of-a-six-of-diamonds-playing-card-pv.png",
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15697-illustration-of-a-six-of-spades-playing-card-pv.png",
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15713-illustration-of-a-five-of-hearts-playing-card-pv.png",
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15739-illustration-of-a-five-of-clubs-playing-card-pv.png",
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15726-illustration-of-a-five-of-diamonds-playing-card-pv.png",
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15698-illustration-of-a-five-of-spades-playing-card-pv.png",
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15714-illustration-of-a-four-of-hearts-playing-card-pv.png",
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15740-illustration-of-a-four-of-clubs-playing-card-pv.png",
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15727-illustration-of-a-four-of-diamonds-playing-card-pv.png",
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15699-illustration-of-a-four-of-spades-playing-card-pv.png",
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15509-illustration-of-a-three-of-hearts-playing-card-pv.png",
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15741-illustration-of-a-three-of-clubs-playing-card-pv.png",
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15728-illustration-of-a-three-of-diamonds-playing-card-pv.png",
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15700-illustration-of-a-three-of-spades-playing-card-pv.png",
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15716-illustration-of-a-two-of-hearts-playing-card-pv.png",
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15742-illustration-of-a-two-of-clubs-playing-card-pv.png",
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15729-illustration-of-a-two-of-diamonds-playing-card-pv.png",
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15701-illustration-of-a-two-of-spades-playing-card-pv.png",
    },
  ],
  matchesLeft: 26,
  matches: 0,
  time: 300,
  playing: false,
  clockRunning: false,
  guesses: [],
  modal: "hidden",
  covered: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GUESS_ADDED":
      return {
        ...state,
        guesses: [...state.guesses, payload],
      };
    case "COUNTDOWN":
      return {
        ...state,
        time: state.time - 1,
      };
    case "START":
      return {
        ...state,
        playing: !state.playing,
        clockRunning: !state.clockRunning,
      };
    case "CLEAR_GUESSES":
      return {
        ...state,
        guesses: [],
      };
    case "FOUND_MATCH":
      return {
        ...state,
        matches: state.matches + 1,
        matchesLeft: state.matchesLeft - 1,
      };
    case "STOP_CLOCK":
      return {
        ...state,
        clockRunning: !state.clockRunning,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: "visible",
      };
    case "REMOVE_COVER":
      return {
        ...state,
        covered: false,
      };
    default:
      return state;
  }
}
