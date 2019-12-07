const initialState = {
  cards: [
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15511-illustration-of-an-ace-of-hearts-playing-card-pv.png"
    },
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15537-illustration-of-an-ace-of-clubs-playing-card-pv.png"
    },
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15524-illustration-of-an-ace-of-diamonds-playing-card-pv.png"
    },
    {
      value: "ace",
      img:
        "http://res.freestockphotos.biz/pictures/15/15498-illustration-of-an-ace-of-spades-playing-card-pv.png"
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15499-illustration-of-a-king-of-hearts-playing-card-pv.png"
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15525-illustration-of-a-king-of-clubs-playing-card-pv.png"
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15512-illustration-of-a-king-of-diamonds-playing-card-pv.png"
    },
    {
      value: "king",
      img:
        "http://res.freestockphotos.biz/pictures/15/15486-illustration-of-a-king-of-spades-playing-card-pv.png"
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15500-illustration-of-a-queen-of-hearts-playing-card-pv.png"
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15526-illustration-of-a-queen-of-clubs-playing-card-pv.png"
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15513-illustration-of-a-queen-of-diamonds-playing-card-pv.png"
    },
    {
      value: "queen",
      img:
        "http://res.freestockphotos.biz/pictures/15/15487-illustration-of-a-queen-of-spades-playing-card-pv.png"
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15501-illustration-of-a-jack-of-hearts-playing-card-pv.png"
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15527-illustration-of-a-jack-of-clubs-playing-card-pv.png"
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15514-illustration-of-a-jack-of-diamonds-playing-card-pv.png"
    },
    {
      value: "jack",
      img:
        "http://res.freestockphotos.biz/pictures/15/15488-illustration-of-a-jack-of-spades-playing-card-pv.png"
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15502-illustration-of-a-ten-of-hearts-playing-card-pv.png"
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15528-illustration-of-a-ten-of-clubs-playing-card-pv.png"
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15515-illustration-of-a-ten-of-diamonds-playing-card-pv.png"
    },
    {
      value: "10",
      img:
        "http://res.freestockphotos.biz/pictures/15/15489-illustration-of-a-ten-of-spades-playing-card-pv.png"
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15503-illustration-of-a-nine-of-hearts-playing-card-pv.png"
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15529-illustration-of-a-nine-of-clubs-playing-card-pv.png"
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15516-illustration-of-a-nine-of-diamonds-playing-card-pv.png"
    },
    {
      value: "9",
      img:
        "http://res.freestockphotos.biz/pictures/15/15490-illustration-of-a-nine-of-spades-playing-card-pv.png"
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15504-illustration-of-an-eight-of-hearts-playing-card-pv.png"
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15530-illustration-of-an-eight-of-clubs-playing-card-pv.png"
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15517-illustration-of-an-eight-of-diamonds-playing-card-pv.png"
    },
    {
      value: "8",
      img:
        "http://res.freestockphotos.biz/pictures/15/15491-illustration-of-an-eight-of-spades-playing-card-pv.png"
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15505-illustration-of-a-seven-of-hearts-playing-card-pv.png"
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15531-illustration-of-a-seven-of-clubs-playing-card-pv.png"
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15518-illustration-of-a-seven-of-diamonds-playing-card-pv.png"
    },
    {
      value: "7",
      img:
        "http://res.freestockphotos.biz/pictures/15/15492-illustration-of-a-seven-of-spades-playing-card-pv.png"
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15506-illustration-of-a-six-of-hearts-playing-card-pv.png"
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15532-illustration-of-a-six-of-clubs-playing-card-pv.png"
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15519-illustration-of-a-six-of-diamonds-playing-card-pv.png"
    },
    {
      value: "6",
      img:
        "http://res.freestockphotos.biz/pictures/15/15493-illustration-of-a-six-of-spades-playing-card-pv.png"
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15507-illustration-of-a-five-of-hearts-playing-card-pv.png"
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15533-illustration-of-a-five-of-clubs-playing-card-pv.png"
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15520-illustration-of-a-five-of-diamonds-playing-card-pv.png"
    },
    {
      value: "5",
      img:
        "http://res.freestockphotos.biz/pictures/15/15494-illustration-of-a-five-of-spades-playing-card-pv.png"
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15508-illustration-of-a-four-of-hearts-playing-card-pv.png"
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15534-illustration-of-a-four-of-clubs-playing-card-pv.png"
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15521-illustration-of-a-four-of-diamonds-playing-card-pv.png"
    },
    {
      value: "4",
      img:
        "http://res.freestockphotos.biz/pictures/15/15495-illustration-of-a-four-of-spades-playing-card-pv.png"
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15509-illustration-of-a-three-of-hearts-playing-card-pv.png"
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15535-illustration-of-a-three-of-clubs-playing-card-pv.png"
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15522-illustration-of-a-three-of-diamonds-playing-card-pv.png"
    },
    {
      value: "3",
      img:
        "http://res.freestockphotos.biz/pictures/15/15496-illustration-of-a-three-of-spades-playing-card-pv.png"
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15510-illustration-of-a-two-of-hearts-playing-card-pv.png"
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15536-illustration-of-a-two-of-clubs-playing-card-pv.png"
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15523-illustration-of-a-two-of-diamonds-playing-card-pv.png"
    },
    {
      value: "2",
      img:
        "http://res.freestockphotos.biz/pictures/15/15497-illustration-of-a-two-of-spades-playing-card-pv.png"
    }
  ],
  matchesLeft: 26,
  matches: 0,
  time: 300,
  playing: false,
  clockRunning: false,
  guesses: [],
  modal: "hidden",
  covered: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GUESS_ADDED":
      return {
        ...state,
        guesses: [...state.guesses, payload]
      };
    case "COUNTDOWN":
      return {
        ...state,
        time: state.time - 1
      };
    case "START":
      return {
        ...state,
        playing: !state.playing,
        clockRunning: !state.clockRunning
      };
    case "CLEAR_GUESSES":
      return {
        ...state,
        guesses: []
      };
    case "FOUND_MATCH":
      return {
        ...state,
        matches: state.matches + 1,
        matchesLeft: state.matchesLeft - 1
      };
    case "STOP_CLOCK":
      return {
        ...state,
        clockRunning: !state.clockRunning
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: "visible"
      };
    case "REMOVE_COVER":
      return {
        ...state,
        covered: false
      };
    default:
      return state;
  }
}
